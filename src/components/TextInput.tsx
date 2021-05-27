import React, {ChangeEventHandler, FormEventHandler} from 'react'
import '../assets/text-input.css'

interface TextInputProps {
    onSubmit?: FormEventHandler<HTMLInputElement>,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    value: string
}

const TextInput: React.FC<TextInputProps> = ({onSubmit, onChange, value}) => (
    <input type="text" onSubmit={onSubmit} onChange={onChange} value={value}/>
);

export default TextInput;