import React from 'react'
import KeyFeatures from './KeyFeatures'

const Project = ({setPreviewImage,project}) => {
    const {
        title,
        videoUrl,
        links,
        description,
        description2,
        description3,
        technologiesUsed,
        keyFeatures,
    } = project

    const renderProjectLinks = () => {

        const {liveLink, gitHubBackendLink, gitHubFrontendLink} = links

        if (!liveLink&&!gitHubBackendLink&&!gitHubFrontendLink) return 

        return (
            <div className='each-details-container project-links'>
                <h3>Links </h3> 
                <ul>
                    {liveLink&&<li><a href={liveLink} target='_blank' >Live Demo</a></li>}
                    <li>
                        GitHub Repository 
                        {gitHubBackendLink&&<a href={gitHubBackendLink} target='_blank'> Backend </a>} 
                        | {gitHubFrontendLink&&<a href={gitHubFrontendLink} target='_blank' >Frontend</a>} 
                    </li>
                </ul>
            </div>
        )
    }

    const renderTechnologiesUsed = () => {
        if(technologiesUsed){
            return (
                <div className='each-details-container technologies-used'>
                    <h3>Technologies Used </h3> 
                    {technologiesUsed}
                </div>
            )
        }
    }

    return (
        <div className="container">

            <div className="left-section">
                <div className="proj-title">{title}</div>
                <div className="description">{description}</div>
                {description2&&<><br/> <div className="description">{description2}</div></>}
                {description3&&<><br/> <div className="description">{description3}</div></>}
            </div>

            <div className="right-section">
                <div className="proj-video-container">
                    <video className='proj-video' controls autoPlay muted>
                        <source src={videoUrl} type='video/mp4' />
                    </video>
                </div>
            </div>

            {renderProjectLinks()}
            
            {renderTechnologiesUsed()}

            <KeyFeatures setPreviewImage={setPreviewImage} keyFeatures={keyFeatures} />
                
        </div>
    )
}

export default Project