import { FC } from "react";
import "./Loader.css";

interface Props {
    variant: "primary" | "secondary";
    size: number;
    children?: any;
}

const Loader: FC<Props> = ({
    variant,
    size,
    children
}) => {
    return (
        <>
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
        </>
    )
}

export default Loader;
