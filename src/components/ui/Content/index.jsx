import upArrow from '@/assets/images/up-icon.png'
import styles from './Content.module.css';

export const H1 = ({children}) => <h1 className={styles.h1}>{children}</h1>;

export const H2 = ({children}) => <h2 className={styles.h2}>{children}</h2>;

export const H3 = ({children}) => <h3 className={styles.h3}>{children}</h3>;

export const Text = ({children}) => <p className={styles.text}>{children}</p>;

export const TextStrong = ({children}) => <span className={styles.textstrong}>{children}</span>;

export const UpPage = () => <a className={styles['up-page']} href="#top"><img src={upArrow} alt /></a>;