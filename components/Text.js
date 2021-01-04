import styles from '../styles/text.module.css';
import markdownToHtml from '../lib/markdownToHtml'

function Text(props) {
  return (
    <div className={styles.Text}>
      {props.post}
    </div>
  )
}

export default Text;