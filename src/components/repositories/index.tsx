import React, { memo } from 'react'
import Repository from './repository'

function Repositories({ repos }) {
  if (!repos) return null

  return (
    <section>
      <h1>Open Source Projects</h1>
      <div>
        {repos.map((repo) => (
          <Repository key={repo.name} repo={repo} />
        ))}
      </div>
    </section>
  )
}

export default memo(Repositories)
