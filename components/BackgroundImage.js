import styles from '../styles/background.image.module.css';

const BackgroundImage  = props => (
    <img className={styles.BackgroundImage} src={props.image}/>
);
  
export default BackgroundImage;