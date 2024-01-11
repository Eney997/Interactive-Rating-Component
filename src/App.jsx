import { useState } from 'react'
import './App.css'
import Content from './components/content'
import Thankyoupage from './components/Thankyoupage'

function App() {
  const [showThankYouPage,setShowThankYouPage] = useState(false)
  const [content,setContent] = useState(null)
  return (
    <>
      {
        showThankYouPage ? (
          <Thankyoupage content={content}/>
        ) : <Content content={content} setContent={setContent} setShowThankYouPage={setShowThankYouPage}/>
      }
    </>
  )
}
export default App
