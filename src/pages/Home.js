import React from 'react'

import FullNav from '../organisms/FullNav'
import Hero from '../molecules/Hero'
import AboutSection from '../components/AboutSection'
import AudioPlayer from '../molecules/AudioPlayer/AudioPlayer'

const Home = () => {
    

    return (
        <>
            <FullNav />
            <Hero />
            <AboutSection />
            <AudioPlayer />
            
        </>
    )
}

export default Home
