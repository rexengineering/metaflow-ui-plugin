import React from "react";
import PropTypes from "prop-types";
import Task from "../Task/Task.container";
import { selectTask } from "../../store/selectors/rexflow";

function Workflow({ workflowID, className, tasks }) {
  const task = selectTask(workflowID, tasks);
  return (
    <section>
      <Task className={className} task={task} />
    </section>
  );
}

Workflow.propTypes = {
  className: PropTypes.string.isRequired,
  workflowID: PropTypes.string.isRequired,
};

export default Workflow;
