import { scrollHandle } from '../../util/ScrollUtil';
import './Header.css';

function Header() {
  
  return (
    <>
        <header className='header'>
            <div className='logo'><a href='#home'>Sg.</a></div>
            <div className='links'>
                <div className='link'><a href='#home'>HOME</a></div>
                <div className='link'><a href='#about-me'>ABOUT</a></div>
                <div className='link'><a href='#projects'>PROJECTS</a></div>
                <div className='link'><a href='#contact-me'>CONTACT</a></div>
            </div>
        </header>
    </>
  );
}

export default Header;