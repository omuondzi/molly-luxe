import { Select, SelectItem, SelectProps } from "@nextui-org/react";

import { Controller, useFormContext } from "react-hook-form";

interface ISelectData {
	name: string;
	id: string;
}

interface SelectInputFieldProps extends Omit<SelectProps, "children"> {
	name: string;
	selectData: ISelectData[];
}

const SelectInputField = (passedProps: SelectInputFieldProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={passedProps.name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Select
					{...field}
					classNames={{
						mainWrapper: "border-3 bg-white border-black",
						label: "text-lg lg:text-xl font-semibold ",
						popoverContent: "rounded-none",
					}}
					labelPlacement={
						passedProps.labelPlacement
							? passedProps.labelPlacement
							: "inside"
					}
					{...passedProps}
					className="mb-3"
					radius={passedProps.radius ?? "none"}
					defaultSelectedKeys={[field.value]}
					errorMessage={error?.message}
					isInvalid={error ? true : false}
					items={passedProps.selectData}
					size={passedProps.size ? passedProps.size : "lg"}
				>
					{(data) => (
						<SelectItem key={data.id} value={data.id}>
							{data.name}
						</SelectItem>
					)}
				</Select>
			)}
		/>
	);
};

export default SelectInputField;
