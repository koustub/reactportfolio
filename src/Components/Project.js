import React from 'react';
import project from './Projects.json';
import ProjectInfo from './ProjectInfo.js';

function Projects(){
   console.log(`[entering projects]`);
    return (
        <div class='container'>
            <h1 class='display-4 text-center'>Projects</h1>
            {project.map( project=><div ><ProjectInfo {...project} /></div>)}
        </div>
    );
}

export default Projects;