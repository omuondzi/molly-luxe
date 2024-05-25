import { useForm, Controller } from "react-hook-form";
import "./contact.css";

const ContactPageView = () => {
	const { control } = useForm();

	return (
		<main className="contact-page container">
			<h1>Contact Us</h1>
			<form action="" className="contact-form">
				<section className="inputs">
					<div>
						<label htmlFor="name">Name</label> <br />
						<Controller
							name="name"
							control={control}
							render={({ field }) => <input {...field} />}
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label> <br />
						<Controller
							name="email"
							control={control}
							render={({ field }) => <input {...field} />}
						/>
					</div>
				</section>
				<section className="contact-textarea">
					<label htmlFor="text">Message</label> <br />
					<Controller
						name="textArea"
						control={control}
						render={({ field }) => (
							<textarea cols={50} rows={10} {...field} />
						)}
					/>
				</section>

				<section className="buttons">
					<button>Submit</button>
				</section>
			</form>
		</main>
	);
};

export default ContactPageView;
