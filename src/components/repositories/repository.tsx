import React from 'react'
import { Card } from 'theme-ui'

export default function Repository({ repo }) {
  return <Card>{repo.name}</Card>
}
