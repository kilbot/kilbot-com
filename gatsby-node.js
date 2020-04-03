const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const reposYaml = yaml.load(fs.readFileSync('./src/content/repos.yml', 'utf8'))

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout } = node.frontmatter
      const { relativePath } = getNode(node.parent)

      let slug = permalink

      if (!slug && relativePath) {
        slug = `/${relativePath.replace('.md', '')}/`
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      })

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      console.error(result.errors)
      throw new Error(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug, layout } = node.fields

      slug &&
        createPage({
          path: slug,
          // This will automatically resolve the template to a corresponding
          // `layout` frontmatter in the Markdown.
          //
          // Feel free to set any `layout` as you'd like in the frontmatter, as
          // long as the corresponding template file exists in src/templates.
          // If no template is set, it will fall back to the default `page`
          // template.
          //
          // Note that the template has to exist first, or else the build will fail.
          component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug
          }
        })
    })
  })

  const allDatoCmsWork = graphql(`
    {
      allDatoCmsWork {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      console.error(result.errors)
      throw new Error(result.errors)
    }

    result.data.allDatoCmsWork.edges.forEach(({ node: work }) => {
      createPage({
        path: `works/${work.slug}`,
        component: path.resolve(`./src/templates/work.tsx`),
        context: {
          slug: work.slug
        }
      })
    })
  })

  return Promise.all([allMarkdown, allDatoCmsWork])
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/playground\/app/)) {
    page.matchPath = '/playground/*'

    // Update the page.
    createPage(page)
  }
}

exports.onPreBootstrap = async () => {
  try {
    // const repos = await getGithubRepos(reposYaml)
    console.log(reposYaml)
  } catch (error) {
    throw Error(error.message)
  }
}
