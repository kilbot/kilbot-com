import React from 'react'
import { Router, RouteComponentProps, Link } from '@reach/router'

type Props = RouteComponentProps<{
  results: string
}>

const RandomPerson: React.FC<Props> = ({ results = 1 }) => {
  const [person, setPerson] = React.useState()
  React.useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then((x) => x.json())
      .then((x) => setPerson(x))
  }, [results])

  return (
    <div>
      <h1>Randos</h1>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Router>
        <RandomPerson path="/playground/app/:results" />
      </Router>
    </div>
  )
}
