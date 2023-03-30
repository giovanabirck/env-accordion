import { useState } from "react";

export default function Accordion({
    term, code, title, credits, description
}) {

    const [isActive, serIsActive] = useState(false);

    return(
        <>
            Term: {term}
            <div onClick={() => setIsActive(!isActive)}>
                {code}
                {title}

            </div>
        </>
    )
}