import { connect } from 'react-redux';
import App from "./App";

const mapStateToProps = (state) => {
    const { rexFlow, talkTracks: talkTracksState } = state;
    const { deployments, activeWorkflows } = rexFlow;
    const { talkTracks } = talkTracksState;
    return {
        deployments,
        activeWorkflows,
        talkTracks,
    }
};

export default connect(mapStateToProps)(App);