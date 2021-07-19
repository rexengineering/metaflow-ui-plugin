import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import Workflow from "../Workflow";
import {calculateWorkFlowNameFromDeploymentID} from "../../utils/tasks";
import {selectWorkflowID} from "../../store/selectors/rexflow";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.grey["800"],
        padding: theme.spacing(7, 2, 2),
        height: "100%",
    },
    title: {
        color: theme.palette.grey["300"],
        margin: theme.spacing(4, 0),
    },
    subtitle: {
        color: theme.palette.grey["400"],
    },
    divider: {
        backgroundColor: theme.palette.grey["400"],
        marginBottom: theme.spacing(3),
    },
}));

function CallerInfo({ callerName, deploymentID, activeWorkflows }) {
    const classes = useStyles();
    const [workflowName, setWorkflowName] = useState(null);
    const workflowID = selectWorkflowID(workflowName, activeWorkflows);

    useEffect(() => {
        if (!deploymentID) return;
        setWorkflowName(calculateWorkFlowNameFromDeploymentID(deploymentID));
    }, [deploymentID, setWorkflowName]);

    return (
        <Box className={classes.container}>
            <Typography className={classes.subtitle} variant="body2">
                You are speaking with:
            </Typography>
            <Typography className={classes.title} variant="h3">
                {callerName}
            </Typography>
            <Divider className={classes.divider} />
            <Workflow workflowID={workflowID} />
        </Box>
    );
}

CallerInfo.propTypes = {
    callerName: PropTypes.string.isRequired,
    deploymentID: PropTypes.string.isRequired,
};

export default CallerInfo;
