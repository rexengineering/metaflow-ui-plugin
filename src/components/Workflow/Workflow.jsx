import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import Task from "../Task/Task.container";
import { selectTask } from "../../store/selectors";

function Workflow({ workflowID, className, tasks }) {
  const task = selectTask(workflowID, tasks);
  const { data } = task;
  return (
    <section>
      {Array.isArray(data) && data.length && (
        <Typography variant="h6">{workflowID}</Typography>
      )}
      <Task className={className} task={task} />
    </section>
  );
}

Workflow.propTypes = {
  className: PropTypes.string.isRequired,
  workflowID: PropTypes.string.isRequired,
};

export default Workflow;
