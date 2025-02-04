import React, { ChangeEvent, FC } from 'react';

import styles from './Input.module.css';
interface InputProps {
    placeholder?: string;
    value?: string | number;
    name?: string;
    disabled?: boolean;
    paddingLeft?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ placeholder, value, name, paddingLeft, disabled = false, onChange }) => {
    return (
        <input
            onChange={onChange}
            name={name}
            className={styles.inputContainer}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            style={{ paddingLeft }}
        ></input>
    );
};
export default Input;
