import '@/components/items/Item.css'
import upArrow from '@/assets/images/up-icon.png'

export const H1 = ({children}) => <h1 className='item__h1'>{children}</h1>;

export const H2 = ({children}) => <h2 className='item__h2'>{children}</h2>;

export const H3 = ({children}) => <h3 className='item__h3'>{children}</h3>;

export const Text = ({children}) => <p className='item__text'>{children}</p>;

export const TextStrong = ({children}) => <span className='item__text--strong'>{children}</span>;

export const UpPage = () => <a className='up-page' href="#top"><img src={upArrow} alt /></a>;