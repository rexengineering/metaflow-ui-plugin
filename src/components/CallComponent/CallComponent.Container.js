import { connect } from 'react-redux';
import CallComponent from "./CallComponent";

const mapStateToProps = (state) => ({
    callState: state['rexflow-plugin'].callComponent.callState,
});

export default connect(mapStateToProps)(CallComponent);
