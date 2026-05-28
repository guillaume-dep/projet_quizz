import { motion } from "framer-motion"

/* --- CSS --- */
import styles from "../../style/waitingScreen.module.css"

const WaitingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={styles.waitingScreen}
        >

            <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
            </div>
            <span className={styles.waitingTitle}>waiting for other players to answer</span>
        </motion.div>
    )
}

export default WaitingScreen