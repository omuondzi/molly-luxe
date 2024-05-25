import { useForm, FormProvider } from "react-hook-form";
import {
	ContactUsFormData,
	ContactUsFormInitialValues,
	ContactUsFormSchema,
} from "./form-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { H2 } from "@components/typography";
import {
	PhoneInputField,
	TextAreaInputField,
	TextInputField,
} from "@components/form";
import { Button } from "@nextui-org/react";

const ContactPageView = () => {
	const methods = useForm<ContactUsFormData>({
		resolver: yupResolver(ContactUsFormSchema),
		defaultValues: ContactUsFormInitialValues,
	});

	const { handleSubmit } = methods;

	const handleContactUsForm = (data: ContactUsFormData) => {
		console.log(data);
	};

	return (
		<main className="min-h-[70vh] py-20">
			<H2 className="text-center">Contact Us</H2>
			<FormProvider {...methods}>
				<form
					className="grid my-8 md:my-12 gap-4 container border-4  p-8 max-w-[800px]"
					onSubmit={handleSubmit(handleContactUsForm)}
				>
					<TextInputField
						name="name"
						label="NAME"
						labelPlacement="outside"
						placeholder="John Doe"
					/>
					<PhoneInputField name="phone" label="PHONE" />
					<TextInputField
						name="email"
						label="EMAIL"
						labelPlacement="outside"
						placeholder="johndoe@example.com"
					/>
					<TextAreaInputField
						name="message"
						label="Message"
						minRows={4}
						labelPlacement="outside"
						size="lg"
					/>
					<Button
						size="lg"
						color="primary"
						radius="none"
						type="submit"
						className="w-max px-14"
					>
						Submit
					</Button>
				</form>
			</FormProvider>
		</main>
	);
};

export default ContactPageView;
