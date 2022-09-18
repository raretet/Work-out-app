import React from 'react'
import Layout from '../common/Layout'
import bgImage from '../../images/ex-bg-1.jpg'
const Error404 = () => {
  return (
    <>
      <Layout bgImage={bgImage} heading={'Create new workout'}/>
        <div className='wrapperInnerPage'>
            404 page not found
      </div>
    </>
  )
}

export default Error404