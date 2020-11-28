import Header from './Header.js';
import styles from '../styles/layout.module.css';
import BackgroundImage from './BackgroundImage.js';

const Layout = props => (
    <div>
        <BackgroundImage image={props.backgroundImage}/>
        <div className={styles.Layout}>
            <Header/>
            {props.children}
        </div>
    </div>
)

export default Layout;