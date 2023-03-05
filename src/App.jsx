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
              <a href="https://fr.linkedin.com/in/na%C3%AFmoudine-saidi" target="_blank" rel="noreferrer" aria-label="go to linkedin account"><svg className='w-[35px] h-[35px] md:w-[45px] md:h-[45px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='icon' d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4zM9 17.34H6.67v-7.13H9v7.13zM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23zm9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84 1.431 1.431 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13v4.21z" fill="#000"/></svg></a>
              <a href="https://github.com/SAIDINaimoudine" target="_blank" rel="noreferrer" aria-label="go to github account"><svg className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"/><path className="icon" d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.23.66-.5v-1.69C6.73 19.91 6.14 18 6.14 18A2.69 2.69 0 0 0 5 16.5c-.91-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1 2.15 2.15 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34C8 16.17 5.62 15.31 5.62 11.5a3.87 3.87 0 0 1 1-2.71 3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1a9.63 9.63 0 0 1 5 0c1.91-1.29 2.75-1 2.75-1a3.58 3.58 0 0 1 .1 2.64 3.87 3.87 0 0 1 1 2.71c0 3.82-2.34 4.66-4.57 4.91a2.39 2.39 0 0 1 .69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2z"/></svg></a>
              <a href="https://twitter.com/Naim_js" target="_blank" rel="noreferrer" aria-label="go to Twitter account"><svg className="svg" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path className="icon" d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444" fillRule="evenodd"/></svg></a>
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
