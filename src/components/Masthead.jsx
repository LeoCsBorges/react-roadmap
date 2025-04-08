import viteLogo from '/vite.svg'
import reactLogo from '@/assets/react.svg'
import './Masthead.css'

export function Masthead() {
    return (
        <header className='masthead'> 
            <a href="https://vite.dev/" target='_blank'>
                <img className='logo vite' src={viteLogo} alt='Logo do Vite' />
            </a>
            <a href="https://react.dev/" target='_blank'>
                <img className='logo react' src={reactLogo} alt='Logo do React' />
            </a>
        </header>
    )
}


