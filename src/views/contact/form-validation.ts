import * as yup from "yup";

export const ContactUsFormSchema = yup.object().shape({
	name: yup.string().required("Name is required"),
	phone: yup.string().required("Phone is required"),
	email: yup
		.string()
		.required("Email is required")
		.email("Enter a valid email address"),
	message: yup.string().required("Message is required"),
});

export type ContactUsFormData = yup.InferType<typeof ContactUsFormSchema>;

export const ContactUsFormInitialValues: ContactUsFormData = {
	name: "",
	phone: "",
	email: "",
	message: "",
};
