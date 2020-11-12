import React from "react";
import "./styles.scss"

class Test extends React.Component {

    state = {
        open: false
    }

    onClick = () => {
        const {open} = this.state;
        this.setState({open: !open})
    }

    render() {
        const {open} = this.state;
        return (
            <div className="--test">
                <div className={`menu${open ? " menu-abierto" : ""}`}>
                    <a className="burger-icon" href="#" onClick={this.onClick}><i className="fa fa-bars"></i></a>

                    <div className={`lista-menu${open ? " lista-abierta" : ""}`}>
                        <ul>
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default Test
