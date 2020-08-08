import React from "react";
import "./styles.scss"
import formatText from "../../utils/formatText";

import t from "../../translates";

class Sections extends React.Component {

    state = {
        content: "test"
    }

    componentDidMount() {
        let content = "";
        for (let i = 0; i < 100; i++) {
            content += t.lorem_ipsum + "\n"
        }

        this.setState({content})
    }

    render() {
        return (
            <div className={`sections`}>
                <div className="content">
                    {formatText(this.state.content, "temporal-div")}
                </div>
            </div>
        );
    }
}

export default Sections;
