import { useState } from 'react'
import './App.css'
import Content from './components/content'
import Thankyoupage from './components/Thankyoupage'

function App() {
  const [showThankYouPage,setShowThankYouPage] = useState(false)
  const [content,setContent] = useState(null)
  return (
    <>
      <Content/>
    </>
  )
}

export default App
