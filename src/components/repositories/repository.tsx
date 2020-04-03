import React from 'react'
import { Card } from 'theme-ui'

interface Props {
  repo: import('./types').RepositoryProps
}

export default function Repository({ repo }: Props) {
  return (
    <Card>
      <p>{repo.name}</p>
      <p>{repo.description}</p>
    </Card>
  )
}
