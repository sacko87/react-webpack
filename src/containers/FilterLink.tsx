import { connect, Dispatch } from "react-redux";
import { setVisibilityFilter, VisibilityFilter } from "../actions";
import Link, { LinkProps } from "../components/Link";
import { ApplicationState } from "../reducers";

interface FilterLinkProps {
    filter: VisibilityFilter;
}


const mapStateToProps = (state: ApplicationState, props: FilterLinkProps) : Partial<LinkProps> => {
    return {
        active: props.filter === state.visibilityFilter,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, props: FilterLinkProps) : Partial<LinkProps> => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter({ visibilityFilter: props.filter }));
        },
    };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;