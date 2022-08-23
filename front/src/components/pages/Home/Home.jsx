import Layout from "../../common/Layout";
import Button from "../../UI/Button/Button";
import Counters from '../../UI/Counters/Counters'
import bgImage from '../../../images/home-bg.jpg'
import styles from './Home.module.scss'
import { NavLink, useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    return (
        <Layout height='100%' bgImage={bgImage}>
            <NavLink to='/new-workout'>
                <Button text='New' type='main' callback={() => {}}/>
            </NavLink>
            <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
            <Counters/>
        </Layout>
    );
}

export default Home;