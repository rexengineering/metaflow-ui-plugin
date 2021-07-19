import { connect } from 'react-redux';
import Workflow from "./Workflow";

const mapStateToProps = (state) => {
    const { rexFlow } = state;
    const { tasks } = rexFlow;
    return {
        tasks
    }
};

export default connect(mapStateToProps)(Workflow);