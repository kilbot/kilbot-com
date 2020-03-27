import React, { memo } from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

import Repositories from '../components/repositories'

function Home({ data, pageContext }) {
  console.log(data)
  console.log(pageContext)

  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Hello human</h1>
          <p>A new site is coming</p>
        </Container>
        <Repositories repos={pageContext.repos} />
      </Page>
    </IndexLayout>
  )
}

export default memo(Home)
