import React, { useCallback, useEffect, useState } from 'react'
import MyProjects from '../../projectbdd.json'

function Project() {
  const [sliderWidth, setSliderWidth] = useState(null)
  const [sliderContent, setSliderContent] = useState(null)
  const [projects, setProjects] = useState(null)

  const scrollRight = useCallback(() => {
    sliderContent.scrollLeft += sliderWidth
  }, [sliderContent, sliderWidth])

  const scrollLeft = useCallback(() => {
    sliderContent.scrollLeft -= sliderWidth
  }, [sliderContent, sliderWidth])

  function getProjects(data) {
    return (data.map(project => (
      <div key={project.id} className=" project-card on-hover">
        <h2 className="project-card-title">{project.title}</h2>
        <div className="project-card-img-container">
          <img src={project.image} className="project-card-img" alt="Project screenshot" />
        </div>
        <p className="project-card-description" id="projectScroll">{project.description}</p>
        <div className="project-card-stack">
          {project.stack.map(img => <img key={img.id} src={img} className="w-[25px]" alt="stack icon" />)}
        </div>
        <div className="project-card-cta">
          <a href={project.link} className="project-card-btn">view project</a>
          <a href={project.github} className="project-card-btn">view github</a>
        </div>
      </div>
    )))
  }

  useEffect(() => {
    setSliderWidth(document.getElementById('project-wrapper').offsetWidth)
    setSliderContent(document.getElementById('project-wrapper'))
    setProjects(MyProjects.length)
  }, [projects, sliderWidth])

  return (
    <>
      <div className="slider-navigation">
        <button role="button" aria-label="scroll left project caroussel" className="slider-btn" disabled={!(projects > 1)} aria-disabled={projects > 1 ? 'true' : 'false'}><img src='./icons/chevron-left-icon.svg' alt='scroll left' onClick={scrollLeft}/></button>
        <button role="button" aria-label="scroll right project caroussel" className="slider-btn" disabled={!(projects > 1)} aria-disabled={projects > 1 ? 'true' : 'false'}><img src='./icons/chevron-right-icon.svg' alt='scroll right' onClick={scrollRight}/></button>
      </div>
      <div className={projects > 0 ? 'project-wrapper' : 'no-project-wrapper'} id="project-wrapper">
        {projects > 0 ? getProjects(MyProjects) : <p className="no-project">No projects found</p>}
      </div>
    </>
  )
}

export default Project
