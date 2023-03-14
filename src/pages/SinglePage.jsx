import React from 'react'
import DarkmodeBtn from '../components/DarkmodeBtn'
import Navbar from '../components/Navbar'

function SinglePage() {
    return (
        <>
        <div className='container'>
            <Navbar />
            <main>
                <section className="hero section">
                    <h1 className='hero-title'>Enthusiastic frontend developer from France.</h1>
                    <p className='hero-sub'>Hi, I’ am Naïm a young developer who’s eager to learn and build modern websites. Let’s build great web site together.</p>
                </section>
                <section className="about section">
                    <h3 className='about-title'>About</h3>
                    <div className="about-body">
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/500"/></a>
                        <div className="about-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi eos labore ipsa. Ipsam delectus autem nisi pariatur excepturi sed eum nesciunt doloribus architecto, eius odit maxime necessitatibus at odio!</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        </>
    )
}

export default SinglePage