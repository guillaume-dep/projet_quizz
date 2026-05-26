import styles from "../../style/finalResult.module.css"

const FinalResult = ({ scores, scoresToShow, currentPlayerScore, currentPlayerRank }) => {

    const top3 = scoresToShow.slice(0, 3);
    const others = scoresToShow.slice(3);

    return (
        <div className={styles.finalResult}>

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

            {/* PODIUM */}
            <div className={styles.podium}>

                {/* 2nd */}
                {top3[1] && (
                    <div className={styles.podiumItem}>
                        <div className={styles.label}>
                            <span className={styles.playerName}>{top3[1].name}</span>
                            <span className={styles.playerScore}>{top3[1].score} pts</span>
                        </div>
                        <div className={`${styles.block} ${styles.second}`}>2</div>
                    </div>
                )}

                {/* 1st */}
                {top3[0] && (
                    <div className={styles.podiumItem}>
                        <div className={styles.label}>
                            <span className={styles.playerName}>{top3[0].name}</span>
                            <span className={styles.playerScore}>{top3[0].score} pts</span>
                        </div>
                        <div className={`${styles.block} ${styles.first}`}>1</div>
                    </div>
                )}

                {/* 3rd */}
                {top3[2] && (
                    <div className={styles.podiumItem}>
                        <div className={styles.label}>
                            <span className={styles.playerName}>{top3[2].name}</span>
                            <span className={styles.playerScore}>{top3[2].score} pts</span>
                        </div>
                        <div className={`${styles.block} ${styles.third}`}>3</div>
                    </div>
                )}
            </div>

            {/* OTHERS */}
            {others.length > 0 && (
                <div className={styles.others}>
                    {others.map((p, i) => (
                        <div key={i} className={styles.otherRow}>
                            <span>#{i + 4}</span>
                            <span>{p.name}</span>
                            <span>{p.score} pts</span>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default FinalResult;