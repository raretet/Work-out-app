import React from 'react'

import Layout from '../../common/Layout'
import Field from '../../UI/Field/Field'
import Button from '../../UI/Button/Button'

import styles from '../Auth/Auth.module.scss'
import bgImage from '../../../images/auth-bg.png'
import Alert from '../../UI/Alert/Alert'
import { useMutation } from 'react-query'
import { $api } from '../../../api/api'
import { useAuth } from '../../../hooks/useAuth'
import Loader from '../../UI/Loader'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const navigate = useNavigate()
  const {setIsAuth} = useAuth()

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [type, setType] = React.useState('auth'); //auth, reg

  const {mutate: register, isLoading, error,} = useMutation('Registration', () => $api({url: '/users', 
  type: 'POST', body: {email, password}, auth: false
}), {
  onSuccess(data){
    localStorage.setItem('token', data.token)
    setIsAuth()

    setPassword('')
    setEmail('')

    navigate('/', {replace: true})
  }
})

  const handleSubmit = (e) => { 
    e.preventDefault()
    if (type === 'auth') {
      console.log('Auth')
    } else {
      register()
    } 
  }

  return (
    <>
      <Layout bgImage={bgImage} heading={'Auth || Register'}/>
        <div className='wrapperInnerPage'>
          {error && <Alert type='error' text={error}/>}
          {isLoading && <Loader/>}
          <form onSubmit={handleSubmit}>
           <Field type='email' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)}/>
           <Field placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)}/>
           <div className={styles.wrapperButton}>
              <Button
              text='Sing In'
              callback={() => setType('auth')}
            />
              <Button
              text='Sing Up'
              callback={() => setType('reg')}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth