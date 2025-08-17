import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HStack,Text } from '@chakra-ui/react'
import  ResultCard from './components/ResultCard'
import { projects } from './data/projects'
import Header from './components/Header'
import Content from './components/content'

function App() {

  return (
    <>
      <Header 
      imageSrc = "/motor.png"
      imageAlt = "HeaderImage"
      title = "ポートフォリオサイト"
      fontSize = "50px"
      fontFamily = "'Shippori Mincho B1', serif"
      />

      <Content 
      title = "学習成果"
      description='私は主にハッカソンをメインに作品を作成しております．
      作品詳細は以下から参照してください．'
      link='./components/ResultCard.tsx'
      />

    <Router>
      <Routes>
        <Route path="/" element={<Content title="..." description="..." link="/result" />} />
        <Route path="/result" element={projects.map((p,i) => (<ResultCard key={i} {...p}/>
))} />
      </Routes>
    </Router>
    </>
  )
}

export default App
