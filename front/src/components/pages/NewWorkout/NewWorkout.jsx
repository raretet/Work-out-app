import React from 'react'

import ReactSelect from 'react-select'

import Layout from '../../common/Layout'
import Field from '../../UI/Field/Field'
import Button from '../../UI/Button/Button'

import bgImage from '../../../images/new-workout-bg.jpg'
import { NavLink } from 'react-router-dom'
import { $api } from '../../../api/api'
import { useMutation, useQuery } from 'react-query'
import Alert from '../../UI/Alert/Alert'
import Loader from '../../UI/Loader'

const NewWorkout = () => {

  const [name, setName] = React.useState('');
  const [exercisesCurrent, setExercisesCurrent] = React.useState([]);

  const {data, isSuccess} = useQuery('list exercises', () => 
  $api({
      url: '/exercises', 
}), {
  refetchOnWindowFocus: false,
})

  const {mutate, isLoading, isSuccess: isSuccessMutate, error,} = useMutation('Create new workout', ({exIds}) => 
  $api({
  url: '/workouts', 
  type: 'POST', 
  body: {name, exerciseIds: exIds}, 
  auth: false
}), {
  onSuccess() {
    setName('')
    setExercisesCurrent([])
  }
})


  const handleSubmit = (e) => {
    e.preventDefault()

    const exIds = exercisesCurrent.map(ex => ex.value)

    mutate({
      exIds,
    })
  }

  return (
    <>
      <Layout bgImage={bgImage} heading={'Create new workout'}/>
        <div className='wrapperInnerPage'>
          {error && <Alert type='error' text={error}/>}
          {isSuccessMutate && <Alert text='Workout created'/>}
          {(isLoading) && <Loader/>}
          <form onSubmit={handleSubmit}>
           <Field placeholder='Enter name' value={name} onChange={e => setName(e.target.value)}/>
           <NavLink style={{textDecoration: 'none', textAlign: 'right', display: 'block', width: '100%', marginBottom: '.5rem', color: '#511734'}}  to='/new-exercise'>Add new exercise</NavLink>
              {isSuccess && data &&
            <ReactSelect
              classNamePrefix='section2-selection'
              placeholder='Exercises...'
              title='Exercises'
              options={data.map(ex => ({
                value: ex._id,
                label: ex.name,
              }))}
              value={exercisesCurrent}
              onChange={setExercisesCurrent}
              isMulti={true}
            />
            }
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