import { connect } from 'react-redux';
import TalkTrack from "./TalkTrack";

const mapStateToProps = (state) => {
    const { talkTracks } = state;
    return {
        talkTrackItems: talkTracks.talkTracks
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(TalkTrack);