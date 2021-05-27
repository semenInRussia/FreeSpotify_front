import React from 'react'
import '../assets/text-input.css'

interface TextInputProps {
    onSubmit?: any,
    onChange?: any,
    value: any
}

const TextInput: React.FC<TextInputProps> = ({onSubmit, onChange, value}) => (
    <input type="text" onSubmit={onSubmit} onChange={onChange} value={value}/>
);

export default TextInput;