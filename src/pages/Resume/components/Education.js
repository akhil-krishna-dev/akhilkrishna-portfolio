import React from "react";

const Education = () => {
	return (
		<div className="resume-container last-child">
			<div className="left-section">
				<h2 className="section-title">Education</h2>
			</div>
			<div className="right-section">
				<div className="section-description">
					<div className="year-of-passout"> 2016 - 2019</div>
					<div className="university-details-container">
						<h4>
							Calicut University <br />
							Bachelor's Degree
						</h4>
						<p>Bachelor of Commerce</p>
					</div>
				</div>
				<br />
				<div className="section-description">
					<div className="year-of-passout"> 2015</div>
					<div className="university-details-container">
						<h4>Baron College and IT ( Thrissur )</h4>
						<p>Deploma in Computer Hardware and Network</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
