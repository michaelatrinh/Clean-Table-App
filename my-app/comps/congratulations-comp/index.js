import styles from '../styles/Congratulations.module.css'

function Congratulations() {
  return (
    <div className={styles.container}>
    <div className={styles.toprow}>CONGRATULATIONS</div>
    <div className={styles.image}>
        <img src="/trophy.png" alt="trophy"/>
    </div>
    <div className={styles.middlerow}>
      <p className={styles.text}>
      You’ve just entered in your grocery list into “MyPantry!” Now you can keep track of the food in your household. <br></br><br></br>
      The “Home” page will show you the items that are about to expire. <br></br><br></br>
      Use our “Recipe Generator” feature to create delicious meals before they expire!<br></br><br></br>
      Happy Saving!
      </p>
    </div>

    <div><button className={styles.button}>OKAY</button></div>
    </div>
  )
}

export default Congratulations;

export{Congratulations}