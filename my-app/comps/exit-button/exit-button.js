import styles from '../styles/exitbutton.module.css'


function ExitButton() {
  return (
    <div className={styles.circle}>
      <span className={styles.x}>X</span>
    </div>
  )
}

export default ExitButton;

export{ExitButton}