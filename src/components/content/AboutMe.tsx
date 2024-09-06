import './AboutMe.css';

function AboutMe() {
  return (
    <section id='about-me' className='about-me-wrapper'>
        <div className='content'>
            <h2 className="title">A few words about <span className='yellow-gradiant-header-content'>me</span></h2>
            <div className="some-words space-grotesk-text">
                <p>I'm Sanyam Goyal, a web developer based in Gurgaon (India), specializing in front-end and back-end technologies. With 4 years of experience, I'm currently working at Amdocs as a Software Engineer.</p>
                <p>I am Passionate about the web and new technologies, I love learning and discovering new things.</p>
            </div>
        </div>
        <div className="my-image">
            <img src="/images/sanyam-dev-2.jpg" alt="Sanyam Goyal" width='300px' height='380px' className='image'/>
        </div>
    </section>
  );
}

export default AboutMe;