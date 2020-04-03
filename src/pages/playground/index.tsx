import React from 'react'
import { Link } from 'gatsby'

export default function Playground() {
  return (
    <>
      <header>
        <h1>Playground</h1>
        <ul>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
          <li>
            <Link to="/playground/app/2">App</Link>
          </li>
          <li>
            <Link to="/playground/markdown">Markdown</Link>
          </li>
        </ul>
      </header>
    </>
  )
}
