import React from "react";

const Skills = () => {
    return (
        <div className="resume-container">
            <div className="left-section">
                <h2 className="section-title">
                    Skills
                    <br />& Expertise
                </h2>
            </div>
            <div className="right-section">
                <div className="section-description">
                    <ul>
                        Languages :<li>Python</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="section-description">
                    <ul>
                        Frameworks/Libraries :<li>Django</li>
                        <li>React</li>
                        <li>Redux</li>
                    </ul>
                </div>
                <div className="section-description">
                    <ul>
                        Web Technologies :<li>REST Api</li>
                        <li>WebSockets</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="section-description">
                    <ul>
                        Databases :<li>PostgreSQL</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="section-description">
                    <ul>
                        Tools :<li>Git</li>
                        <li>AWS (EC2, S3)</li>
                        <li>Nginx</li>
                    </ul>
                </div>
                <div className="section-description">
                    <ul>
                        Additional skills :<li>OOP</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

// <div className='right-section'>
//     <div className='section-description'>
//         <heading> Languages :</heading> Python, JavaScript
//     </div>
//     <div className='section-description'>
//         <heading> Frameworks :</heading> Django, React, Redux
//     </div>
//     <div className='section-description'>
//         <heading> Web Technologies :</heading> HTML, CSS, Bootstrap
//     </div>
//     <div className='section-description'>
//         <heading> Databases :</heading> PostgreSQL, MySQL
//     </div>
//     <div className='section-description'>
//         <heading> Tools :</heading> Git, AWS (EC2, S3), Nginx, Web Socket, OOP
//     </div>
// </div>

export default Skills;
