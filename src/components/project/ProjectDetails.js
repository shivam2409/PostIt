import React from 'react'

const ProjectDetails = (props) => {
    const id=props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                <span className='card-title'>Project Title - {id}</span>
                    <p>decide what tom gift Devi for anniversery</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by Shivam Patel</div>
                    <div>13 april, 13 pm</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails
