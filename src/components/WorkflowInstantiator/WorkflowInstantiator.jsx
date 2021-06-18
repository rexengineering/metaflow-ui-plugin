import PropTypes from "prop-types";
import React from "react";
import { initWorkflow } from "../../store/thunks/thunks";
import ActionButton from "../ActionButton";
import { selectIsWorkflowBeingInitialized } from "../../store/selectors";

function WorkflowInstantiator({ deploymentID, dispatch, isWorkflowBeingInitialized}) {
  const isWorkflowBeingInitializedFlag = selectIsWorkflowBeingInitialized(deploymentID, isWorkflowBeingInitialized)
  const handleStartWorkflow = () => dispatch(initWorkflow(deploymentID));

  return (
    <ActionButton
      onClick={handleStartWorkflow}
      isLoading={Boolean(isWorkflowBeingInitializedFlag || !deploymentID)}
    >
      Start workflow
    </ActionButton>
  );
}

WorkflowInstantiator.propTypes = {
  deploymentID: PropTypes.string.isRequired,
};

export default WorkflowInstantiator;
