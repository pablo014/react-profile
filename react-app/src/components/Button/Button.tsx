import {MouseEventHandler} from "react";
import './Button.css';
interface Props {
    text?: String,
    onClick: MouseEventHandler
}
function Button(props: Props) {
    return <div className="container">
        <div className="btn btn-two" onClick={props.onClick}>
            <span>{ props.text ? props.text : 'Button' }</span>
        </div>
    </div>
}

export default Button