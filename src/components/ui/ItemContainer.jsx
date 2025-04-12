import './ItemContainer.css'

export function ItemContainer({children, className, ...props}) {
    return (
        <div className={`item-container ${className}`}  {...props}>
            {children}
        </div>
    );
}
