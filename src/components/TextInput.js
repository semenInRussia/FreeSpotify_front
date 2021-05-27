import React from 'react'
import '../assets/text-input.css'

const TextInput = ({onSubmit, onChange, value}) => (
    <input type="text" onSubmit={onSubmit} onChange={onChange} value={value}/>
);

export default TextInput;