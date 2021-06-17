import { connect } from 'react-redux';
import CallComponent from "./CallComponent";
import {Actions} from "../../states/PluginState";

const mapStateToProps = (state) => ({
    callState: state['rexflow-plugin'].callComponent.callState,
});

const mapDispatchToProps = (dispatch) => ({
    updateCallState: (newState) => dispatch(Actions.updateCallState(newState))
});

export default connect(mapStateToProps, mapDispatchToProps)(CallComponent);