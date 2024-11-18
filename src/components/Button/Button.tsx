import { FC, CSSProperties } from 'react';
import './ButtonStyles.css';

interface ButtonProps {
    type?: "submit" | "reset" | "button" | undefined;
    title: string;
    styles?: CSSProperties;
    buttonTextStyles?: CSSProperties;
    variant: "primary" | "secondary";
    onClick?: () => void;
}

/**
 * Component that renders the custom button.
 * 
 * @component
 * @param {Props} props - The props required by the component.
 * @param {"submit" | "reset" | "button" | undefined} props.title - The type of the button.
 * @param {"primary" | "secondary"} props.variant - Variant of a button which changes color theme.
 * @param {string} props.type - The title of the button.
 * @param {void} props.onClick - onClick function..
 * @param {CSSProperties | undefined} props.styles - The custom styles of the button.
 * @param {CSSProperties | undefined} props.buttonTextStyles - The custom buttonTextStyles of the button title.
 * @returns {JSX.Element} The rendered component.
 */
export const Button:FC<ButtonProps> = (props) => {

    const {
        type,
        title,
        styles,
        buttonTextStyles,
        variant,
        onClick
    } = props;

    return (
        <button 
            className={variant === "primary" ? "button-container" : "button-container-secondary"}
            style={styles}
            type={type}
            onClick={onClick}
        >
            <p className='button-text' style={buttonTextStyles}>{title}</p>
        </button>
    );

};
 