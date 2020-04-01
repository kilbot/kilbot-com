import React, { memo } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

import Repositories from '../components/repositories'

const query = graphql`
  query onGitHub {
    githubData {
      data {
        repository {
          name
          description
          owner {
            login
            avatarUrl
          }
        }
      }
    }
  }
`

function Home({ data, pageContext }) {
  const contentJson = useStaticQuery(query)
  const repos = [contentJson.githubData.data.repository]

  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Hello human</h1>
          <p>A new site is coming</p>
        </Container>
        <Repositories repos={repos} />
      </Page>
    </IndexLayout>
  )
}

export default memo(Home)
