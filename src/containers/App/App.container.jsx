import { connect } from 'react-redux';
import App from "./App";

const mapStateToProps = (state) => {
    const { rexFlow, talkTracks } = state;
    const { deployments, activeWorkflows } = rexFlow;
    return {
        deployments,
        activeWorkflows,
        talkTracks: talkTracks.talkTracks,
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);