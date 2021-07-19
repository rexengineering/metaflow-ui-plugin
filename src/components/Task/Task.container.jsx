import { connect } from 'react-redux';
import Task from "./Task";

const mapStateToProps = (state) => {
    const { rexFlow } = state;
    const { tasksState } = rexFlow;
    return {
        tasksState
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);