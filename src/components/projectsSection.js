import React from 'react';
import HackathonCard from './projects/HackathonCard';
import MacroCard from './projects/MacroCard';
import PortfolioWebsite from './projects/Portfolio';
import BorderTownRes from './projects/BorderTownResCard';
import Inmoov from './projects/Inmoov';
import AndroidGame from './projects/AndroidGameCard'

function ProjectsSection() {
    return (
        <section className='projects_section'>
            <h2 className='projectsTitle'>Projects</h2>
            <div className='projects_container'>
                <HackathonCard/>
                <MacroCard/>
                {/* <PortfolioWebsite/> */}
                <BorderTownRes/>
                <Inmoov/>
                <AndroidGame/>
            </div>
        </section>
    )
}

export default ProjectsSection;