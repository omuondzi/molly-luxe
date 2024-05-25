import { H6, Subtitle2 } from "@components/typography";
import { InputProps } from "@nextui-org/react";

import { Controller, useFormContext } from "react-hook-form";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface PhoneFieldProps extends InputProps {
	name: string;
}

const PhoneField = (passedProps: PhoneFieldProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={passedProps.name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<section className="mb-3 w-full">
					{passedProps.label && (
						<H6 className="text-sm font-semibold mb-2 text-start">
							{passedProps.label}
						</H6>
					)}
					<PhoneInput
						placeholder="********"
						{...field}
						disabled={passedProps.disabled}
						international
						defaultCountry="KE"
						error={
							error
								? isValidPhoneNumber(field.value)
									? undefined
									: "Invalid phone number"
								: "Phone number required"
						}
						className="border-3 border-black mt-1  p-[0.6rem] "
					/>
					{!!error && (
						<Subtitle2 className="text-red-500 !text-sm">
							{error.message}
						</Subtitle2>
					)}
				</section>
			)}
		/>
	);
};

export default PhoneField;
