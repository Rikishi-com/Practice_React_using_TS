// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { HStack } from '@chakra-ui/react'
import  ResultCard from './components/ResultCard'
import { projects } from './data/projects'

function App() {

  return (
    <>
      <HStack>
        {projects.map((p,i) => (
          <ResultCard key={i} {...p}/>
        ))}
      </HStack>
    </>
  )
}

export default App
