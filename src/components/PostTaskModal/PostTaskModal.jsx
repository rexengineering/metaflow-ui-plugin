import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import PropTypes from "prop-types";
import Workflow from "../Workflow";
import {setIsPostTaskModalDisplayed} from "../../store/actions/talktracks";

function PostTaskModal({ onClose, workflowID, isOpen, dispatch }){
    const handleClose = () => dispatch(setIsPostTaskModalDisplayed(false));

    return (
        <Dialog open={isOpen} fullWidth={true} maxWidth="sm" onClose={onClose}>
            <DialogTitle>Post Task something</DialogTitle>
            <DialogContent>
                <DialogContentText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi dolore, eaque eligendi incidunt inventore labore nemo omnis optio porro praesentium sit soluta tenetur ullam veniam vitae voluptas, voluptate voluptatum.</DialogContentText>
                <Workflow workflowID={workflowID} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

PostTaskModal.defaultProps = {
   onClose: () => {},
}

PostTaskModal.propTypes = {
    onClose: PropTypes.func,
    workflowID: PropTypes.string.isRequired,
}

export default PostTaskModal;