import React from 'react'

import ReactSelect from 'react-select'

import Layout from '../../common/Layout'
import Field from '../../UI/Field/Field'
import Button from '../../UI/Button/Button'

import styles from './NewWorkout.module.scss'
import bgImage from '../../../images/new-workout-bg.jpg'
import { NavLink } from 'react-router-dom'

const NewWorkout = () => {

  const [name, setName] = React.useState('');
  const [exercises, setExercise] = React.useState([]);

  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <>
      <Layout bgImage={bgImage} heading={'Create new workout'}/>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit}>
           <Field placeholder='Enter name' value={name} onChange={e => setName(e.target.value)}/>
           <NavLink style={{textDecoration: 'none', textAlign: 'right', display: 'block', width: '100%', marginBottom: '.5rem', color: '#511734'}}  to='/new-exercise'>Add new exercise</NavLink>
            <ReactSelect
              classNamePrefix='section2-selection'
              placeholder='Exercises...'
              title='Exercises'
              options={[{
                value: 'sfsfsfs', label: 'Push-ups'
              },{
                value: 'sghdgsfs', label: 'Pull-ups'
              },]}
              value={exercises}
              onChange={setExercise}
              isMulti={true}
            />
            <Button
            text='Create'
            callback={() => {}}
          />
        </form>
      </div>
    </>
  )
}

export default NewWorkout