import React from 'react';
import HackathonCard from './projects/HackathonCard';
import MacroCard from './projects/MacroCard';
import PortfolioWebsite from './projects/Portfolio';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    projects:{
        display: 'flex',
        justifyContent: 'center',
    }
})

function ProjectsSection() {
    const classes = useStyles()
    return (
        <section>
            <h2 className='projectsTitle'>Projects</h2>
            <div className={classes.projects}>
                <HackathonCard/>
                <MacroCard/>
                <PortfolioWebsite/>
            </div>
        </section>
    )
}

export default ProjectsSection;