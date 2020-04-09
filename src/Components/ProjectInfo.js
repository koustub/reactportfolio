import React from 'react';

function ProjectInfo(props) {
    console.log('Entering Project Info components');
    const projectCard = {
        margin:"20px",
        flex:1,
        flexDirection:'row',
        h5 : {
            fontSize:"4vw"
        }
    }
    return (
        <div class='jumbotron' style={projectCard}>
            <h5 class="card-title text-center " style={projectCard.h5}>{props.ProjectName}</h5>
            <p class="card-text lead"><i class="fas fa-angle-right"></i> {props.ProjectDescription}</p>
            <p class="card-text lead"><i class="fas fa-angle-right"></i> {props.ProjectDescription2}</p>
            <h6 class="display-6 text-right">{props.ProjectDate}</h6>
        </div>
          
        );
    }
        
export default ProjectInfo;