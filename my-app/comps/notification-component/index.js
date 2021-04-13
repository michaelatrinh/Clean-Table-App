import styles from '../styles/Window.module.css'

function Window() {
  return (
    <div className={styles.container}>
    <div className={styles.toprow}>TITLE TEXT HERE</div>
    <div className={styles.image}>
        <img src="/pictures/trophy.png" alt="trophy"/>
    </div>
    <div className={styles.middlerow}>
      <p className={styles.text}>
      To continue you must select one item from each category to generate a recipe.
      </p>
    </div>
    </div>
  )
}

export default Window;

export{Window}

