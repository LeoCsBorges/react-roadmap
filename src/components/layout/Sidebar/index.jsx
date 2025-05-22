import styles from './Sidebar.module.css';
import MenuLink from '../../ui/MenuLink';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__wrapper}>
                <h3 className={styles.sidebar__title}>React Roadmap</h3>
                <ul className={styles.sidebar__list}>
                    <li>
                        <MenuLink to='/components'>Components</MenuLink>
                    </li>
                    <li>
                        <MenuLink to='/functional-components'>Functional Components</MenuLink>
                    </li>
                    <li>
                        <MenuLink to='/component-basics'>Component Basics</MenuLink>
                    </li>
                    <li>
                        <MenuLink to='/rendering'>Rendering</MenuLink>
                    </li>
                    <li>
                        <MenuLink to='/hooks'>Hooks</MenuLink>
                    </li>
                    <li>
                        <MenuLink to='/routers'>Routers</MenuLink>
                    </li>
                    <li>State Management</li>
                    <li>Writting CSS</li>
                    <li>Components / Libraries</li>
                    <li>Headless Component Libraries</li>
                    <li>API calls</li>
                    <li>Testing</li>
                    <li>Frameworks</li>
                    <li>Forms</li>
                    <li>Types & Validation</li>
                    <li>Animation</li>
                    <li>Mobile Applications</li>
                </ul>
            </div>
        </aside>
    );
}
