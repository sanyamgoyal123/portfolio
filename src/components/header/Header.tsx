import { scrollHandle } from '../../util/ScrollUtil';
import './Header.css';

function Header() {
  
  return (
    <>
        <header className='header'>
            <div className='logo'><a href=''>Sg.</a></div>
            <div className='links'>
                <div className='link'><a href='' id='home-' onClick={(e) => scrollHandle(e)}>HOME</a></div>
                <div className='link'><a href='' id='about-me-' onClick={(e) => scrollHandle(e)}>ABOUT</a></div>
                <div className='link'><a href='' id='projects-' onClick={(e) => scrollHandle(e)}>PROJECTS</a></div>
                <div className='link'><a href='' id='contact-me-' onClick={(e) => scrollHandle(e)}>CONTACT</a></div>
            </div>
        </header>
    </>
  );
}

export default Header;