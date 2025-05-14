import { Link } from "react-router"
import styles from './HeroBanner.module.css';

export function HeroBanner() {
    return (
        <div className={styles.heroBanner__container}> 
            <div className={styles.heroBanner__title__wrapper}>
                <div className={styles.heroBanner__title__line}></div>
                <Link to="/">
                    <h2 className={styles.heroBanner__title}>Reacting</h2>
                </Link>
                <div className={styles.heroBanner__title__line}></div>
            </div>
        </div>
    );
};

