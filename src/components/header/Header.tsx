import { scrollHandle } from '../../util/ScrollUtil';
import './Header.css';

function Header() {
  
  return (
    <>
        <header className='header'>
            <div className='logo'><a href='#'>Sg.</a></div>
            <div className='links'>
                <div className='link'><a href='#'>HOME</a></div>
                <div className='link'><a href='' id='about-me-' onClick={scrollHandle}>ABOUT</a></div>
                <div className='link'><a href='' id='projects-' onClick={scrollHandle}>PROJECTS</a></div>
                <div className='link'><a href='' id='contact-me-' onClick={scrollHandle}>CONTACT</a></div>
            </div>
        </header>
    </>
  );
}

export default Header;