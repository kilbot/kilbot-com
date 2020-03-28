import React from 'react'
import { Router, RouteComponentProps, Link, useMatch } from '@reach/router'

type Props = RouteComponentProps<{
  // results: string
}>

const RandomPerson: React.FC<Props> = () => {
  const { results } = useMatch('/playground/app/:results') || 1
  const [person, setPerson] = React.useState()
  const [number, setNumber] = React.useState(results)

  React.useEffect(() => {
    fetch(`https://randomuser.me/api?results=${number}`)
      .then((x) => x.json())
      .then((x) => setPerson(x))
  }, [number])

  return (
    <div>
      <h1>Randos</h1>
      <select
        onChange={(event) => {
          setNumber(event.target.value)
        }}
      >
        <option value-="1">1</option>
        <option value-="2">2</option>
        <option value-="3">3</option>
        <option value-="4">4</option>
        <option value-="5">5</option>
      </select>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Router>
        <RandomPerson path="/playground/app/*" />
      </Router>
    </div>
  )
}
