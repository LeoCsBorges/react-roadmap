import styles from './ContentContainer.module.css';

export function ContentContainer({children, className, ...props}) {
    return (
        <div className={`${styles['content-container']} ${className}`}  {...props}>
            {children}
        </div>
    );
}
