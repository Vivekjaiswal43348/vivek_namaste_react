import { useState } from "react";
import "./About.css";

const AboutFuncCard = (props) =>{
    const [count, setCount] = useState(0);

    return (
        <div className="abount-card">
            count: {count}
            <p>Name: {props.name}</p>
            <p>Location: Vivek Jaiswal</p>
            <p>Email: Vivek@gmail.com</p>
        </div>
    );
}

export default AboutFuncCard;