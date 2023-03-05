import './index.css'
import resume from './assets/SAIDI_Naïmoudine_Resume.pdf'
import photo from './assets/photo-moi.jpg'
import Project from './components/Project/Project'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section className="hero" name="home">
            <h1 className="hero-title"> Enthusiastic frontend developer from France.</h1>
            <p className="hero-description">
              Hi, I&apos; am Naïm a young developer who&apos;s eager to learn and build modern websites. Let&apos;s build great web site together.
            </p>
            <div className="hero-socials">
              <a href="https://fr.linkedin.com/in/na%C3%AFmoudine-saidi" target="_blank" rel="noreferrer" aria-label="go to linkedin account"><span><img src="./icons/linkedin-icon.svg" alt="linkedin logo" className='w-[35px]'/></span></a>
              <a href="https://github.com/SAIDINaimoudine" target="_blank" rel="noreferrer" aria-label="go to github account"><span><img src="./icons/github-icon.svg" alt="github icon" className='w-[35px]'/></span></a>
              <a href="https://twitter.com/Naim_js" target="_blank" rel="noreferrer" aria-label="go to Twitter account"><span><img src="./icons/twitter-icon.svg" alt="" className='w-[35px]'/></span></a>
            </div>
          </section>
          <section className="about section" name="about">
            <h2 className="section-header">About</h2>
            <div className="about-body">
              <img src={photo} className="max-h-[550px]" alt="myself" />
              <div className="about-content">
                <h2 className="about-title">SAIDI Naïmoudine</h2>
                <div className="about-description">
                  <p>
                    Hello! Naïmoudine SAIDI and I&apos;m a junior frontend developer. I have a passion for creating modern and functional websites that are easy to use. I have experience with HTML, CSS, JavaScript, Reactjs and I&apos;m always eager to learn more.
                    I enjoy finding solutions to challenging problems. I&apos;m constantly improving my skills through online courses, tutorials, and personal projects, and I&apos;m excited to apply my knowledge to real-world projects.
                  </p>
                  <p className="my-8"> Currently in training I learned how to work collaboratively with team members, manage my time effectively, and communicate effectively with stakeholders.</p>
                  <p>I&apos;m excited to continue developing my skills and working on projects that make a positive impact on people&apos;s lives. If you&apos;re looking for a passionate and dedicated frontend developer, please don&apos;t hesitate to reach out!</p>
                  <a href={resume} download="resume" className="about-resume on-hover">
                    Download my resume
                    <span className="download-icon"><img src='./icons/download-icon.svg' alt='download'/></span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="work section" name="work">
            <h2 className="section-header">Work</h2>
            <div className="work-body">
              <Project />
            </div>
          </section>
          <section className="contact section" name="contact">
            <h2 className="section-header">Contact</h2>
            <div className="contact-body">
              <h2 className="contact-title">Let&apos;s keep in touch !</h2>
              <p className="contact-description">Hi there! I&apos;m a junior frontend developer and I&apos;m eager to learn, grow, and work on exciting projects. If you have any questions, or you&apos;d like to chat about a project, please don&apos;t hesitate to reach out. I&apos;m excited to connect with you.</p>
              <a href="mailto:naimoudinesaidi@gmail.com" className="contact-btn on-hover">Contact</a>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div className="container footer">
          <div className="contact-socials">
            <a href="https://fr.linkedin.com/in/na%C3%AFmoudine-saidi" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/SAIDINaimoudine" target="_blank" rel="noreferrer">Github</a>
            <a href="https://twitter.com/Naim_js" target="_blank" rel="noreferrer">Twitter</a>
          </div>
          <p className="contact-credentials">© 2023 SAIDI Naïmoudine</p>
        </div>
      </footer>
    </>
  )
}

export default App
