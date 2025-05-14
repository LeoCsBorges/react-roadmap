import viteLogo from '/vite.svg'
import reactLogo from '@/assets/react.svg'
import styles from './Masthead.module.css';

export function Masthead() {
    return (
        <header id='top' className={styles.masthead}> 
            <a href="https://vite.dev/" target='_blank'>
                <img className={`${styles.logo} ${styles.vite}`} src={viteLogo} alt='Logo do Vite' />
            </a>
            <a href="https://react.dev/" target='_blank'>
                <img className={`${styles.logo} ${styles.react}`} src={reactLogo} alt='Logo do React' />
            </a>
        </header>
    )
}


