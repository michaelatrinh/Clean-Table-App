import styles from '../styles/Placeholder.module.css'


function Window() {
  return (
    <div className={styles.container}>
    <div className={styles.toprow}>VEGETABLES</div>

    <div className={styles.middlerow}>
      <div className={styles.foodbutton1}>
        <div className={styles.foodlabel1}>Example</div>
      </div>

      <div className={styles.foodbutton2}>
        <div className={styles.foodlabel2}>Example</div>
      </div>

      <div className={styles.foodbutton3}>
        <div className={styles.foodlabel}>Example</div>
      </div>
    </div>
    </div>
  )
}

export default Window;

export{Window}





