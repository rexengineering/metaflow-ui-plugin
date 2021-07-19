import { connect } from 'react-redux';
import WorkflowInstantiator from "./WorkflowInstantiator";

const mapStateToProps = (state) => {
    const { rexFlow } = state;
    const { isWorkflowBeingInitialized } = rexFlow;
    return {
        isWorkflowBeingInitialized
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkflowInstantiator);