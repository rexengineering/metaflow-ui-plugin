import React, { useEffect, useState } from "react";
import {
    CssBaseline,
    makeStyles,
    Typography,
} from "@material-ui/core";
import Pane from "../../components/Pane";
import Tray from "../../components/Tray";
import {
    fetchActiveTalkTracks,
    fetchTasks,
    initTalkTrack,
    initWorkflow,
    setTalkTrackActive
} from "../../store/thunks/thunks";
import getDeploymentId from "../../store/thunks/getDeploymentId";
import TalkTrack from "../../components/TalkTracks/TalkTrack";
import {mapTalkTracks, getActiveTalkTrackID, getActiveTalkTrackWorkflow} from "../../utils/talkTracks";
import Notes from "../../components/Notes";
import CallerInfo from "../../components/CallerInfo/CallerInfo.container";
import InformationForm from "../../components/InformationToCollect/InformationForm";

const useStyles = makeStyles((theme) => ({
    app: {
        display: "flex",
        height: "100vh",
    },
    tray1: {
        width: "50%",
        backgroundColor: theme.palette.grey[800],
        padding: theme.spacing(8, 3, 6),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "auto",
    },
    tray2: {
        padding: theme.spacing(3, 1.5, 3, 3),
        overflow: "auto",
    },
    tray3: {
        width: "50%",
        padding: theme.spacing(3, 3, 3, 1.5),
        overflow: "auto",
    },
    workflow: {
        marginTop: theme.spacing(1),
        background: theme.palette.background.paper,
        padding: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
        display: "block",
    },
    paper: {
        padding: theme.spacing(2.5),
    },
    paperHeading: {
        marginBottom: theme.spacing(1.5),
        "&:last-child": {
            marginBottom: 0,
        },
    },
    deployment: {
        marginBottom: theme.spacing(2),
    },
    deploymentTitle: {
        marginBottom: theme.spacing(1),
    },
    talkTracks: {
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(5),
    },
}));

function App({deployments, activeWorkflows, talkTracks, dispatch}) {
    const mappedTalkTracks = mapTalkTracks(talkTracks);
    const [activeTalkTrackID, setActiveTalkTrackID] = useState(getActiveTalkTrackID(mappedTalkTracks));
    const classes = useStyles();
    const areDeploymentsUnavailable =
        Array.isArray(deployments) && !deployments.length;
    const isAutomaticState = true;
    const handleTalkTrackSkip = (talkTrackID) => {
        console.log(talkTrackID);
    };
    const currentTalkTrackWorkflow = getActiveTalkTrackWorkflow(mappedTalkTracks, activeTalkTrackID);
    const handleTabChange = (talkTrackUUID) => dispatch(setTalkTrackActive(talkTrackUUID));
    const handleTalkTrackAction = (talkTrackID) => {
        const talkTrack = mappedTalkTracks.find(({ talktrack_id }) => talktrack_id === talkTrackID);
        if (talkTrack)
            return;
        dispatch(initTalkTrack(talkTrackID))
    };
    const rootTalkTrack = "intro-123";
    const deploymentID = "callworkflow-2f8501bf";
    const [shouldDispatchRootTalkTrack, setShouldDispatchRootTalkTrack] = useState(true);

    useEffect(() => dispatch(getDeploymentId()), []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if ( Array.isArray(mappedTalkTracks) && !mappedTalkTracks.length && shouldDispatchRootTalkTrack){
            dispatch(initTalkTrack(rootTalkTrack));
            setShouldDispatchRootTalkTrack(false);
        }
    }, [mappedTalkTracks, setShouldDispatchRootTalkTrack, dispatch, shouldDispatchRootTalkTrack]);

    useEffect(() => {
        setActiveTalkTrackID(getActiveTalkTrackID(mappedTalkTracks));
    }, [mappedTalkTracks, setActiveTalkTrackID]);

    useEffect(() => dispatch(fetchActiveTalkTracks()), []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (isAutomaticState) {
            const interval = setInterval(() => dispatch(fetchTasks()), 500);
            return () => clearInterval(interval);
        }
        return () => {};
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!dispatch || !deploymentID || !Array.isArray(activeWorkflows)) return;
        const workflow = activeWorkflows.find((workflowItem) => workflowItem.includes(deploymentID));
        if (workflow) return;
        dispatch(initWorkflow(deploymentID));
    }, [deploymentID, dispatch, activeWorkflows]);

    if (areDeploymentsUnavailable)
        return <Typography>There are no deployments available</Typography>;

    return (
        <div className={classes.app}>
            <CssBaseline />
            <Pane>
                <Tray className={classes.tray1}>
                    <CallerInfo callerName="John Doe" deploymentID={deploymentID} />
                </Tray>
                <Tray className={classes.tray2}>
                    <TalkTrack onTabChange={handleTabChange}
                               onActionSelected={handleTalkTrackAction}
                               onSkip={handleTalkTrackSkip}
                               activeTalkTrackID={activeTalkTrackID}
                               className={classes.talkTracks}
                               talkTrackItems={mappedTalkTracks} />
                </Tray>
                <Tray className={classes.tray3}>
                    <Notes />
                    <InformationForm workflowID={currentTalkTrackWorkflow} />
                </Tray>
            </Pane>
        </div>
    );
}

export default App;