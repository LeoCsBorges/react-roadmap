import { Link } from 'react-router'
import '@/components/AsideMenu.css'

export function AsideMenu() {
    return (
        <aside className='aside'>
            <h3 className='aside__title'>React Roadmap</h3>
            <ul className='aside__list'>
                <li className='aside__list__item'>
                    <Link to='components'>Components</Link>
                </li>
                <li className='aside__list__item'>
                    <Link to='functional-components'>Functional Components</Link>
                </li>
                <li className='aside__list__item'>Rendering</li>
                <li className='aside__list__item'>Hooks</li>
                <li className='aside__list__item'>Routers</li>
                <li className='aside__list__item'>State Management</li>
                <li className='aside__list__item'>Writting CSS</li>
                <li className='aside__list__item'>Components / Libraries</li>
                <li className='aside__list__item'>Headless Component Libraries</li>
                <li className='aside__list__item'>API calls</li>
                <li className='aside__list__item'>Testing</li>
                <li className='aside__list__item'>Frameworks</li>
                <li className='aside__list__item'>Forms</li>
                <li className='aside__list__item'>Types & Validation</li>
                <li className='aside__list__item'>Animation</li>
                <li className='aside__list__item'>Mobile Applications</li>
            </ul>
        </aside>
    )
}