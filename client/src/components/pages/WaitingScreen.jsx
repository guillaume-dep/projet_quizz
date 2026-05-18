/* --- CSS --- */
import styles from "../../style/waitingScreen.module.css"

const WaitingScreen = () => {
    return (
        <div className={styles.waitingScreen}>

            <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
            </div>
            <span className={styles.waitingTitle}>waiting for other players to answer</span>
        </div>
    )
}

export default WaitingScreen