import { FC, InputHTMLAttributes } from 'react';
import { FormInputLabel, Input, Group } from  './index.styles';


type FormInputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => (
    <Group>
        <Input {...otherProps} />
        {label && (
            <FormInputLabel shrink={Boolean(
                otherProps.value &&
                typeof otherProps.value === 'string'
                && otherProps.value.length)}>
            {label}
            </FormInputLabel>
        )}
    </Group>
);

export default FormInput;