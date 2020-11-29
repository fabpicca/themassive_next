import styles from '../styles/navigation.module.css';

function Navigation(props) {
  return (
    <nav className={styles.Navigation}>
      {props.posts.map((post, index) => ( 
          <a href="#" onClick={() => props.onClick(index)}>{post.slug}</a>
      ))}
    </nav>
  )
};

export default Navigation
