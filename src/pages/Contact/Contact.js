import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import personalInfo from "data/personalInfo";

const Contact = () => {
	const [isSubmiting, setIsSubmiting] = useState(false);
	const form = useRef();

	const { phone, email, location } = personalInfo;

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const setSuccessmsg = () =>
		Swal.fire(
			"Message received",
			"Thank You for contacting me i will replay soon",
			"success"
		);

	const sendEmail = (e) => {
		if (isSubmiting) return;

		setIsSubmiting(true);
		e.preventDefault();

		const { name, email, subject, message } = e.target;

		const data = {
			name: name.value,
			email: email.value,
			subject: subject.value,
			message: message.value,
		};

		const scriptURL =
			"https://script.google.com/macros/s/AKfycbwumbQa-94EdcDUKN5vXs5-SE4WPP2tiACx-n2ZkhDWoTRb2SMh7mAWnxwCPniHJ3OF/exec";

		fetch(scriptURL, {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((result) => {
				e.target.reset();
				setSuccessmsg();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsSubmiting(false);
			});
	};

	return (
		<main>
			<h1>Contact</h1>
			<div className="contact-container">
				<div className="address">
					<h3>Phone</h3>
					<p className="phone">{phone}</p>
					<br />
					<h3>Email</h3>
					<p>{email}</p>
					<br />
					<h3>Location</h3>
					<p>{location}</p>
				</div>

				<div className="contact-form">
					<form ref={form} onSubmit={sendEmail}>
						<div className="input user-name">
							<input
								type="text"
								name="name"
								id="user-name"
								required
							/>
							<label>Your Name</label>
						</div>
						<div className="input email">
							<input
								type="email"
								name="email"
								id="email"
								required
							/>
							<label>Email</label>
						</div>
						<div className="input subject">
							<input
								type="text"
								name="subject"
								id="subject"
								required
							/>
							<label>Subject</label>
						</div>
						<div className="input message">
							<textarea
								name="message"
								id="message"
								required
							></textarea>
							<label>Message</label>
						</div>
						<div className="input submit-btn">
							<button type={isSubmiting ? "" : "submit"}>
								{isSubmiting ? (
									<div className="loader"></div>
								) : (
									"Submit"
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Contact;
