import styles from '../styles/navigation.module.css';

/*
 * Navigation bar will display the current (selected) post title and will show two arrows to move to previous/next
 * depending on the postion of the post in the array
 */

function Navigation(props) {
  return (
    <nav className={styles.Navigation}>
      {props.linkedPosts.before ? (<a className={styles.Button} href={props.linkedPosts.before}>&lt;</a>) : ""}
      <div className={styles.Title}>{props.title}</div>
      {props.linkedPosts.after ? (<a className={styles.Button} href={props.linkedPosts.after}>&gt;</a>) : ""}
    </nav>
  )
};

export default Navigation
