import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, Button } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Card.Root variant={'elevated'} maxW={'sm'}>
        <Card.Header><Card.Title>うえの</Card.Title>
        <Card.Description>結稀です</Card.Description></Card.Header>
        <Card.Body>本文</Card.Body>
        <Card.Footer>test</Card.Footer>
      </Card.Root>
    </>
  )
}

export default App
