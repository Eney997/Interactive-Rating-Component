import React, { useState } from 'react'
import './Content.css'
import Card from '../components/Card'

const Content = () => {
    const [activeContent, setActiveContent] = useState({
        one:false,
        two:false,
        thre:false,
        four:false,
        five:false
    })
  return (
    <Card>
    <div className='starImg'></div>
    <h1 className='headtittle'>How did we do?</h1>
    <p className='txt'>Please let us know how we did with your support request.
        All feedback is appreciated to help us improve our offering!</p>
    <div className='options'>
        <div className={activeContent.one ? 'op active' : 'op'} onClick={()=> {
            setActiveContent({
                one:true,
                two:false,
                thre:false,
                four:false,
                five:false,
            })
        }}>1</div>
        <div className={activeContent.two ? 'op active' : 'op'} onClick={()=> {
            setActiveContent({
                one:false,
                two:true,
                thre:false,
                four:false,
                five:false,
            })
        }}>2</div>
        <div className={activeContent.thre ? 'op active' : 'op'} onClick={()=> {
            setActiveContent({
                one:false,
                two:false,
                thre:true,
                four:false,
                five:false,
            })
        }}>3</div>
        <div className={activeContent.four ? 'op active' : 'op'} onClick={()=> {
            setActiveContent({
                one:false,
                two:false,
                thre:false,
                four:true,
                five:false,
            })
        }}>4</div>
        <div className={activeContent.five ? 'op active' : 'op'} onClick={()=> {
            setActiveContent({
                one:false,
                two:false,
                thre:false,
                four:false,
                five:true,
            })
        }}>5</div>
    </div>  
    <button className='subBut'><span className='inButtxt'>SUBMIT</span></button>
    </Card>
    )
}

export default Content