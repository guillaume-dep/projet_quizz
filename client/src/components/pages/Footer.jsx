/* --- CSS --- */
import styles from "../../style/footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerSection}>
                        <h4>Quiz Game</h4>
                        <p>Real-time multiplayer quiz application</p>
                    </div>
                    <div className={styles.footerSection} >
                        <h4>Made by Guillaume Depelchin</h4>
                        <p>© {new Date().getFullYear()} Quiz Game — Built for learning</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Tech</h4>
                        <p>React · Socket.IO · Node.js</p>
                    </div>
                </div>

            </div>
        </footer >
    )
}

export default Footer