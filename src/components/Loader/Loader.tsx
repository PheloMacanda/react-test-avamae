import { FC } from "react";
import "./Loader.css";

interface Props {
    variant: "primary" | "secondary";
    size: number;
    children?: any;
    loaderText?: string;
}

const Loader: FC<Props> = ({
    variant,
    size,
    children,
    loaderText
}) => {
    return (
        <div className="loader-container">
            {
            variant === "primary" ?
                (
                    <div className="loader-primary" style={{
                        width: `${size}px`,
                        height: `${size}px`
                    }}>
                        {children}
                    </div>
                ) :
                (
                    <div className="loader-secondary" style={{
                        width: `${size}px`,
                        height: `${size}px`
                    }}>
                        {children}
                    </div>
                )
            }
            {loaderText && <p className="loader-text">{loaderText}</p>}
        </div>
    )
}

export default Loader;
