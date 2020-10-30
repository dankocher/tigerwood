import React from "react";
import "./styles.scss";
import formatText from "../../utils/formatText";

import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
import Section05 from "./Section05";
import Section06 from "./Section06";
import Section07 from "./Section07";
import Section08 from "./Section08";
import Section09 from "./Section09";
import Section10 from "./Section10";
import Section11 from "./Section11";

import t from "../../translates";
import handleViewport from "react-in-viewport";

const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

class Section extends React.Component {

    state = {
        animated: "test"
    }

    componentDidMount() {
        if (!this.props.animate)  {
            this.setState({animated: "not-animated"})
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { inViewport, enterCount, leaveCount, animateOnlyFirstTime, animateFromBottom, animate, scrollDirection} = this.props;
        if (animate && inViewport !== prevProps.inViewport) {
            if (inViewport) {
                this.setState({animated: "animated"})
            } else if (!animateOnlyFirstTime) {
                if (scrollDirection === "up" || (animateFromBottom && scrollDirection === "down")) {
                    this.setState({animated: ""})
                }
            }
        }
    }
    getTestSection = (amount = 100) => {
        let content = "";
        for (let i = 1; i <= amount; i++) {
            content += t.lorem_ipsum
            if (i < amount) {
                content += "\n"
            }
        }

        return content;
    }

    getSection = i => {
        const {animated} = this.state;
        switch (i) {
            case 1: return <Section01 key={`section-01`} animated={animated} {...this.props}/>
            case 2: return <Section02 key={`section-02`} animated={animated} {...this.props}/>
            case 3: return <Section03 key={`section-03`} animated={animated} {...this.props}/>
            case 4: return <Section04 key={`section-04`} animated={animated} {...this.props}/>
            case 5: return <Section05 key={`section-05`} animated={animated} {...this.props}/>
            case 6: return <Section06 key={`section-06`} animated={animated} {...this.props}/>
            case 7: return <Section07 key={`section-07`} animated={animated} {...this.props}/>
            case 8: return <Section08 key={`section-08`} animated={animated} {...this.props}/>
            case 9: return <Section09 key={`section-09`} animated={animated} {...this.props}/>
            case 10: return <Section10 key={`section-10`} animated={animated} {...this.props}/>
            case 11: return <Section11 key={`section-11`} animated={animated} {...this.props}/>
            default: return formatText(this.getTestSection(100), "section --temporal")
        }
    }

    render() {
        return <>{
            this.getSection(this.props.number)
        }</>;
    }
}

export default handleViewport(Section, { rootMargin: '-100px' });


