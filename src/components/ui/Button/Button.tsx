import React, { FC } from 'react';
import styles from './Button.module.css';
interface ButtonProps {
    title: string;
    color?: string;
    marginLeft?: string;
    type?: 'reset' | 'button' | 'submit';
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ title, marginLeft, color = 'white', type = 'button' ,onClick}) => {
    return (
        <button type={type} className={styles.buttonContainer} style={{ backgroundColor: color, marginLeft }} onClick={onClick}>
            {title}
        </button>
    );
};
export default Button;
