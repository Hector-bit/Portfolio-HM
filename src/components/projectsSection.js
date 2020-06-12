import React from 'react';
import HackathonCard from './projects/HackathonCard';
import MacroCard from './projects/MacroCard';
import PortfolioWebsite from './projects/Portfolio';
import BorderTownRes from './projects/BorderTownResCard';

// const useStyles = makeStyles({
//     projects_section: {
//         margin: '7% 0'
//     },
//     projects:{
//         display: 'flex',
//         justifyContent: 'center',
//     }
// })

function ProjectsSection() {
    // const classes = useStyles()
    return (
        <section className='projects_section'>
            <h2 className='projectsTitle'>Projects</h2>
            <div className='projects_container'>
                <HackathonCard/>
                <MacroCard/>
                <PortfolioWebsite/>
                <BorderTownRes/>
            </div>
        </section>
    )
}

export default ProjectsSection;