import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Developed by 
                <a 
                    href="https://github.com/leocsborges" 
                    target="_blank" 
                    className={styles.footer__a}
                >
                LeoCsBorges
                </a> · © 2025. All rights reserved.
            </p>
        </footer>
    );
};
