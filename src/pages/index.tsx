import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hello human</h1>
        <p>A new site is coming</p>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
