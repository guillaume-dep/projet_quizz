import { motion } from "framer-motion"

/* --- CSS --- */
import styles from "../../style/finalResult.module.css"

const FinalResult = ({ scoresToShow, currentPlayerScore, currentPlayerRank }) => {

    const top3 = scoresToShow.slice(0, 3);
    const others = scoresToShow.slice(3);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={styles.finalResult}
        >

            <h1>Final Results</h1>

            {/* MOBILE */}
            <div className={styles.mobile}>
                <div className={styles.mobileCard}>

                    <div className={styles.mobileSide}>
                        <div className={styles.mobileLabel}>Rank</div>
                        <div className={styles.mobileValue}>
                            {currentPlayerRank ? `#${currentPlayerRank}` : "—"}
                        </div>
                    </div>

                    <div className={styles.mobileDivider} />

                    <div className={styles.mobileSide}>
                        <div className={styles.mobileLabel}>Score</div>
                        <div className={styles.mobileValue}>{currentPlayerScore ?? "—"}</div>
                    </div>

                </div>
            </div>

            <div className={styles.podium}>

                {/* 2nd */}
                {top3[1] && (
                    <motion.div
                        className={styles.podiumItem}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <div className={styles.label}>
                            <span className={styles.playerName}>{top3[1].name}</span>
                            <span className={styles.playerScore}>{top3[1].score} pts</span>
                        </div>
                        <div className={`${styles.block} ${styles.second}`}>2</div>
                    </motion.div>
                )}

                {/* 1st */}
                {top3[0] && (
                    <motion.div
                        className={styles.podiumItem}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <div className={styles.label}>
                            <span className={styles.playerName}>{top3[0].name}</span>
                            <span className={styles.playerScore}>{top3[0].score} pts</span>
                        </div>
                        <div className={`${styles.block} ${styles.first}`}>1</div>
                    </motion.div>
                )}

                {/* 3rd */}
                {top3[2] && (
                    <motion.div
                        className={styles.podiumItem}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <div className={styles.label}>
                            <span className={styles.playerName}>{top3[2].name}</span>
                            <span className={styles.playerScore}>{top3[2].score} pts</span>
                        </div>
                        <div className={`${styles.block} ${styles.third}`}>3</div>
                    </motion.div>
                )}
            </div>

            {/* OTHERS */}
            {others.length > 0 && (
                <motion.div
                    className={styles.others}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 0.3 }}
                >
                    {others.map((p, i) => (
                        <div key={i} className={styles.otherRow}>
                            <span>#{i + 4}</span>
                            <span>{p.name}</span>
                            <span>{p.score} pts</span>
                        </div>
                    ))}
                </motion.div>
            )}

        </motion.div>
    );
}

export default FinalResult;