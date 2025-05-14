import React from "react";

const Skill = ({ data }) => {
	const { title, skills } = data;
	return (
		<div className="section-description">
			<ul>
				{title} :
				{skills.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
		</div>
	);
};

export default Skill;
