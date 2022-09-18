import {useState} from 'react'

import Layout from '../../common/Layout'
import Field from '../../UI/Field/Field'
import Button from '../../UI/Button/Button'

import styles from './NewExercise.module.scss'
import cn from 'classnames'

import bgImage from '../../../images/new-exercise-bg.jpg'
import { useMutation } from 'react-query'
import { $api } from '../../../api/api'
import Alert from '../../UI/Alert/Alert'
import Loader from '../../UI/Loader'

const data = [
  'chest', 'shoulders', 'biceps', 'legs', 'hit'
]

const NewExercise = () => {

  const [name, setName] = useState('');
  const [times, setTimes] = useState(3);
  const [imageName, setImageName] = useState('chest');

  const {isSuccess ,mutate, isLoading, error,} = useMutation('Create new exercise', () => 
  $api({
  url: '/exercises', 
  type: 'POST', 
  body: {name, times, imageName}, 
}), 
{
  onSuccess(){
    setName('')
    setTimes(3)
    setImageName('chest')
  }
})

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && times && imageName) mutate() 
  }

  return (
    <>
      <Layout bgImage={bgImage} heading={'Create new exercise'}/>
        <div className='wrapperInnerPage'>
          {error && <Alert type='error' text={error}/>}
          {isSuccess && <Alert text='Exercise created'/>}
          {(isLoading) && <Loader/>}
          <form onSubmit={handleSubmit}>
           <Field placeholder='Enter name' value={name} onChange={e => setName(e.target.value)}/>
           <Field placeholder='Enter times' value={times} onChange={e => setTimes(e.target.value)}/>
            <div className={styles.images}>
              {data.map(name => (
                <img key={`ex img ${name}`}
								src={`uploads/exercises/${name}.svg`}
								alt={name}
                className={cn({
                  [styles.active]: imageName === name,
                })}
                onClick={() => {
                  setImageName(name)
                }}
                />
              ))}
            </div>
            <Button
            text='Create'
            callback={() => {}}
          />
        </form>
      </div>
    </>
  )
}

export default NewExercise