import { Link } from 'react-router'
import '@/components/AsideMenu.css'


export function AsideMenu() {
    return (
        <aside className='aside'>
            <div className="aside__wrapper">
                <h3 className='aside__title'>React Roadmap</h3>
                <ul className='aside__list'>
                    <li>
                        <Link to='components'>Components</Link>
                    </li>
                    <li>
                        <Link to='functional-components'>Functional Components</Link>
                    </li>
                    <li>
                        <Link to='component-basics'>Component Basics</Link>
                    </li>
                    <li>
                        <Link to='rendering'>Rendering</Link>
                    </li>
                    <li>Hooks</li>
                    <li>Routers</li>
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
