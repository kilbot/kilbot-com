import React from 'react'
import { useResume } from '../../hooks/use-resume'

export default function Resume() {
  const { basics } = useResume()
  const { name, label, email, website, location } = basics

  return (
    <>
      <header>
        <p>Résumé</p>
        <h1>{name}</h1>
        <h2>{label}</h2>
      </header>
    </>
  )
}
