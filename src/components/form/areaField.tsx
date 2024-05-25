/* eslint-disable no-mixed-spaces-and-tabs */
import { TextAreaProps, Textarea } from "@nextui-org/react";

import { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TextAreaFieldProps extends TextAreaProps {
	name: string;
	secured?: boolean;
	confirmPasswordHandler?: (ev: ChangeEvent<HTMLInputElement>) => void;
}

const TextAreaInputField = (passedProps: TextAreaFieldProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={passedProps.name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Textarea
					{...field}
					onChange={(val) => {
						field.onChange(val);
						passedProps.confirmPasswordHandler &&
							passedProps.confirmPasswordHandler(val);
					}}
					classNames={{
						inputWrapper:
							"bg-transparent border-black shadow-none  border-3",
						label: "text-lg lg:text-xl font-semibold ",
						errorMessage: "text-start",
						input: "font-medium",
					}}
					className="mb-3"
					{...passedProps}
					radius={passedProps.radius ?? "none"}
					labelPlacement={
						passedProps.labelPlacement
							? passedProps.labelPlacement
							: "inside"
					}
					size={passedProps.size ? passedProps.size : "lg"}
					errorMessage={error?.message}
					isInvalid={error ? true : false}
				/>
			)}
		/>
	);
};

export default TextAreaInputField;
