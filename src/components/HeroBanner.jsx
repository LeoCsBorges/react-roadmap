import '@/components/HeroBanner.css'
import { Link } from "react-router"

export function HeroBanner() {
    return (
        <div className='heroBanner__container'> 
            <div className='heroBanner__title__wrapper'>
                <div className="heroBanner__title__line"></div>
                <Link to="/">
                    <h2 className='heroBanner__title'>Reacting</h2>
                </Link>
                <div className="heroBanner__title__line"></div>
            </div>
        </div>
    )
}

