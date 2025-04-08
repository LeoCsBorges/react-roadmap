import '@/components/ItemContainer.css'
import { Outlet } from 'react-router'

export function ItemContainer() {
    return (
        <div className='item-container'>
            <Outlet />
        </div>
    );
}
