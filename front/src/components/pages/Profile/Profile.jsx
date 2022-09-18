import React from 'react'
import styles from '../Profile/Profile.module.scss'
import stylesLayout from '../../common/Layout.module.scss'

import cn from 'classnames'

import Layout from '../../common/Layout'
import Loader from '../../UI/Loader'

import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { $api } from '../../../api/api'

import bgImage from '../../../images/profile-bg.jpg'
import userImage from '../../../images/header/user.svg'
// import beforeImage from '../../../images/'
import afterImage from '../../../images/after.jpg'
import Header from '../../common/Header/Header'
import Counters from '../../UI/Counters/Counters'

const Profile = () => {

  const {data, isSuccess} = useQuery('home page counters', () => 
  $api({
      url: '/users/profile', 
  }), {
    refetchOnWindowFocus: false,
  })

  return (
    <>
    <div 
      className={`${stylesLayout.wrapper} ${stylesLayout.otherPage}`} 
      style={{backgroundImage: `url(${bgImage})`}}>
        <Header/>
          <div className={styles.center}>
            <img src={userImage} alt='Profile' height='56'/>
            <div>
              {isSuccess && <h1 className={stylesLayout.heading}>{data.email}</h1>}
            </div>
          </div>
        {isSuccess &&(
          <Counters
            minutes={data.minutes}
            workouts={data.workouts}
            kgs={data.kgs}
            type='profile'
          />
			  )}
        </div>
        <div className='wrapperInnerPage' style={{paddingLeft: 0, paddingRight: 0}}>
          <div className={styles.before_after}>
            <div>
              <div className={styles.heading}>
                Before
              </div>
              <img src={afterImage} alt=''/>
            </div>
            <div>
              <div className={styles.heading}>
                After
              </div>
              <img src={afterImage} alt=''/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Profile