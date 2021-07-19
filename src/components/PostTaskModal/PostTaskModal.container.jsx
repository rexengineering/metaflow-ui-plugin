import { connect } from 'react-redux';
import PostTaskModal from "./PostTaskModal";

const mapStateToProps = (state) => {
    const { talkTracks } = state;
    const { isPostTaskModalDisplayed } = talkTracks;
    debugger
    return {
        isOpen: isPostTaskModalDisplayed,
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostTaskModal);