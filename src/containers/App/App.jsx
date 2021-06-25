import React, { useEffect, useState } from "react";
import { faCommentAlt } from "@fortawesome/pro-light-svg-icons";
import {
    CssBaseline,
    Button,
    makeStyles,
    Typography,
    Paper,
} from "@material-ui/core";
import Pane from "../../components/Pane";
import Tray from "../../components/Tray";
import { fetchTasks } from "../../store/thunks/thunks";
import getDeploymentId from "../../store/thunks/getDeploymentId";
import Workflow from "../../components/Workflow/Workflow.container";
import WorkflowInstantiator from "../../components/WorkflowInstantiator/WorkflowInstantiator.container";
import ActionCard from "../../components/ActionCard";
import CallerInfo from "../../components/CallerInfo/Callerinfo";
import TalkTrack from "../../components/TalkTracks/TalkTrack";

const useStyles = makeStyles((theme) => ({
    app: {
        display: "flex",
        height: "100vh",
    },
    tray1: {
        width: "30%",
        backgroundColor: theme.palette.grey[800],
        padding: theme.spacing(8, 3, 6),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "auto",
    },
    tray2: {
        width: "60%",
        overflow: "auto",
    },
    tray3: {
        width: "100%",
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
}));

function App() {
    const talkTrack = [
        {
            identifier: "as345",
            title: "Intro",
            speech:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut est ipsum minus molestiae nesciunt obcaecati quo quos, repudiandae sed tempora voluptatem. Accusantium consequuntur dicta error obcaecati perspiciatis quisquam recusandae?",
            actions: ["Selling", "Buying", "Things", "IoT"],
            onInquirySelected: () => {},
            onSkip: () => {},
            active: true,
        },
        {
            identifier: "56htr4g5",
            title: "Conclude",
            speech:
                "Conclusion, consectetur adipisicing elit. Assumenda aut est ipsum minus molestiae nesciunt obcaecati quo quos, repudiandae sed tempora voluptatem. Accusantium consequuntur dicta error obcaecati perspiciatis quisquam recusandae?",
            actions: [],
            onInquirySelected: () => {},
            onSkip: () => {},
            active: false,
        },
    ];
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <CssBaseline />
            <Pane>
                <Tray className={classes.tray2}>
                    <CallerInfo callerName="John Doe" />
                </Tray>
                <Tray className={classes.tray3}>
                    <TalkTrack talkTrackItems={talkTrack} />
                </Tray>
            </Pane>
        </div>
    );
}

export default App;
