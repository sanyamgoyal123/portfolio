import './ContactMe.css';

function ContactMe() {
  return (
    <section id='contact-me' className='contact-me-wrapper'>
        <a className='contact' href='mailto:sanyamgoyal42@gmail.com'>
            <h2 className="title">Keep in <span className='yellow-gradiant-header-content'>touch</span> <span className='wave-animation'>📧</span></h2>
        </a>
    </section>
  );
}

export default ContactMe;
