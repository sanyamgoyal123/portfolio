import './Projects.css';

function Projects() {
  return (
    <section id='projects' className='projects-wrapper'>
        <div className='content'>
            <h2 className="title">My latest <span className='yellow-gradiant-header-content'>projects</span></h2>
            <div className="project-cards space-grotesk-text">
                <ul className='no-bullets'>
                    <a href='' className='project-links'>
                        <li>
                            <h2>Optima</h2>
                            <p>It’s a very comprehensive platform handles everything from billing and customer care to network management, all while offering advanced features like multiple currency support and real-time analytics.</p>
                        </li>
                    </a>
                    <a href='' className='project-links'>
                        <li>
                            <h2>Bank recommendation system</h2>
                            <p>Engineered a customer-centric rule-based system utilizing financial information to match clients with best-fit banks for loan opportunities delivered a 30% increase in loan acceptance rates and saved 20+ hours per week in manual bank evaluation.</p>
                        </li>
                    </a>
                    <a href='' className='project-links'>
                        <li>
                            <h2>Element management system</h2>
                            <p>An online portal that reduces human labor by locating the devices and has the ability to capture 99% of faults and traps occurring at different places within a private network.</p>
                        </li>
                    </a>
                    <a href='' className='project-links'>
                        <li>
                            <h2>Vendorinfra</h2>
                            <p>Digital Collaboration Platform for Infrastructure Companies. It is a startup and recieved a huge amount of funding from investors because of an unique idea.</p>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </section>
  );
}

export default Projects;