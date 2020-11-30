import styles from '../styles/navigation.module.css';

/*
 * Navigation bar will display the current (selected) post title and will show two arrows to move to previous/next
 * depending on the postion of the post in the array
 */

function Navigation(props) {
  return (
    <nav className={styles.Navigation}>
      {props.current > 0 && <button className={styles.Button} type="button" onClick={() => props.onClick(props.current - 1)}>&lt;</button>}
      <div className={styles.Title}>{props.posts[props.current].title}</div>
      {props.current < props.posts.length -1 && <button className={styles.Button} type="button" onClick={() => props.onClick(props.current + 1)}>&gt;</button>}
    </nav>
  )
};

export default Navigation
