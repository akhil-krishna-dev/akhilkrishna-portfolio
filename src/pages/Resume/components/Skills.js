import React from "react";
import Skill from "./Skill";

const Skills = () => {
	const data = [
		{
			title: "Languages",
			skills: ["Python", "JavaScript"],
		},
		{
			title: "Frameworks/Libraries",
			skills: [
				"Django",
				"Django Rest Framework",
				"Django Channels",
				"React",
				"Redux",
			],
		},
		{
			title: "Web Technologies",
			skills: [
				"Web Services ( REST Api )",
				"WebSockets",
				"WebRTC",
				"Nginx",
				"HTML",
				"CSS",
				"Bootstrap",
			],
		},
		{
			title: "Databases",
			skills: ["PostgreSQL", "MySQL"],
		},
		{
			title: "Tools",
			skills: ["Docker", "Git", "GitHub", "Postman"],
		},
		{
			title: "Cloud Services",
			skills: ["AWS (EC2, S3, RDS)", "Python Anywhere", "Firebase Web"],
		},
		{
			title: "Additional skills",
			skills: ["OOP", "AJAX"],
		},
	];
	return (
		<div className="resume-container">
			<div className="left-section">
				<h2 className="section-title">
					Skills
					<br />& Expertise
				</h2>
			</div>
			<div className="right-section">
				{data.map((item, index) => (
					<Skill key={index} data={item} />
				))}
			</div>
		</div>
	);
};

export default Skills;
