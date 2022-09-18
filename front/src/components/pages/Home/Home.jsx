import Layout from "../../common/Layout";
import Button from "../../UI/Button/Button";
import Counters from '../../UI/Counters/Counters'
import bgImage from '../../../images/home-bg.jpg'
import styles from './Home.module.scss'

import { NavLink} from "react-router-dom";
import {useQuery} from 'react-query'
import { $api } from "../../../api/api";
import { useAuth } from "../../../hooks/useAuth";

const Home = () => {
    const {isAuth} = useAuth()

    const {data, isSuccess} = useQuery('home page counters', () => 
    $api({
        url: '/users/profile', 
  }), {
    refetchOnWindowFocus: false,
    enabled: isAuth,
  })

    return (
        <Layout height='100%' bgImage={bgImage}>
            <NavLink to='/new-workout'>
                <Button text='New' type='main' callback={() => {}}/>
            </NavLink>
            <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{isAuth || isSuccess &&(
				<Counters
					minutes={data.minutes}
					workouts={data.workouts}
					kgs={data.kgs}
				/>
			)}
        </Layout>
    );
}

export default Home;