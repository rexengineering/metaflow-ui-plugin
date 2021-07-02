import { connect } from 'react-redux';
import CallerInfo from "./CallerInfo";

const mapStateToProps = (state) => {
    const { rexFlow } = state;
    const { activeWorkflows } = rexFlow;
    return {
        activeWorkflows
    }
};

export default connect(mapStateToProps)(CallerInfo);