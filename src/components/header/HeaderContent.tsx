import { scrollHandle } from '../../util/ScrollUtil';
import './HeaderContent.css';

function HeaderContent() {
  return (
    <section id='home-content' className='header-content'>
        <div className='title'>
          <h1>
            <div>Hi <span className='wave-animation'>👋</span></div>
            <div>I'm Sanyam,</div>
            <div className='yellow-gradiant-header-content'>full-stack web developer</div>
          </h1>
        </div>
        <a className='discover-projects' href='' id='projects-' onClick={scrollHandle}>Discover my projects</a>
    </section>
  );
}

export default HeaderContent;