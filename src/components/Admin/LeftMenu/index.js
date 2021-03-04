import React from "react";
import "./styles.scss";

export default class LeftMenu extends React.Component {

    constructor(props) {
        super(props);

        let sections = Object.keys(props.translates).map(key => ({
            ...props.translates[key], alias: key
        }))


        this.state = {
            sections
        }
    }

    render() {
        const {sections} = this.state;
        const {selected} = this.props;
        return <div className="left-menu-container">
            <div className="section-select">Товары</div>
            <div className="section-select">Обзоры</div>
            <div className="section-select">Шоу-рум</div>
            <hr/>
            {
                sections.map(s => (
                    !s.section_name ? null : <div key={s.alias}
                                                  className={`section-select${selected === s.alias ? " -selected" : ""}`}
                                                  onClick={() => this.props.onChange(s.alias)}>
                        {s.section_name}
                    </div>
                ))
            }
        </div>
    }
}
