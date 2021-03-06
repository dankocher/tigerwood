import React from "react";
import "./styles.scss";
import {sortableContainer} from "react-sortable-hoc";
import ReviewItem from "./ReviewItem";

class Reviews extends React.Component {

    deleteReview = index => {

        let {reviews} = this.props;

        reviews = [
            ...reviews.slice(0, index), ...reviews.slice(index+1, reviews.length)
        ];

        this.props.saveReviews(reviews)
    }

    onChange = (index, review) => {
        let {reviews} = this.props;
        reviews[index] = review;
        this.props.saveReviews(reviews);
    }

    render() {
        const {reviews} = this.props;
        return <div className="admin-reviews">
            <SortableContainer onSortEnd={this.props.sortReviews} useDragHandle>
                {
                   reviews.map((r, index) => (
                       <ReviewItem index={index} review={r}
                                   onChange={(review) => this.onChange(index, review)}
                                   deleteReview={() => this.deleteReview(index)}
                       />
                   ))
                }
            </SortableContainer>
        </div>
    }
}

export default Reviews;


const SortableContainer = sortableContainer(({children}) => {
    return <div className="reviews-items-container">{children}</div>;
});
