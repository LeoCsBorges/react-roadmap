import { NavLink } from 'react-router'
import styles from './MenuLink.module.css'

export default function MenuLink({to, children}) {
    return (
        <NavLink 
            className={({isActive}) => isActive ? styles.active : ''}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}