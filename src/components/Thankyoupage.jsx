import React from 'react'
import Card from './Card'
import './Thankyoupage.css'

const Thankyoupage = ({content}) => {
  return (
    <Card>
        <div className='tyimg'></div>
        <div className='selected'>
            <p className='selectedP'>You selected {content} out of 5</p>
        </div>
        <h1 className='thankyou'>Thank you!</h1>
        <h2 className='tyDown'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</h2>
    </Card>
  )
}

export default Thankyoupage