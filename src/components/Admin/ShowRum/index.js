import React from "react";
import "./styles.scss";
import {sortableContainer} from "react-sortable-hoc";
import ShowRumItem from "./ShowRumItem";

class ShowRum extends React.Component {

    deleteShowRum = index => {

        let {showRums} = this.props;

        showRums = [
            ...showRums.slice(0, index), ...showRums.slice(index+1, showRums.length)
        ];

        this.props.saveShowRums(showRums);
    }

    onChange = (index, showRum) => {
        let {showRums} = this.props;
        showRums[index] = showRum;
        this.props.saveShowRums(showRums);
    }

    render() {
        const {showRums} = this.props;
        return <div className="admin-show-rums">
            <SortableContainer onSortEnd={this.props.sortShowRums} useDragHandle>
                {
                    showRums.map((r, index) => (
                       <ShowRumItem index={index} show_rum={r}
                                   onChange={(showRum) => this.onChange(index, showRum)}
                                    deleteShowRum={() => this.deleteShowRum(index)}
                       />
                   ))
                }
            </SortableContainer>
        </div>
    }
}

export default ShowRum;


const SortableContainer = sortableContainer(({children}) => {
    return <div className="show-rum-items-container">{children}</div>;
});
