export const buildTaskIdentifier = ({ iid, tid }) => {
  if (!iid || !tid) {
    return "";
  }
  return `${iid}-${tid}`;
};

export const selectIsWorkflowBeingInitialized = (deploymentID, isWorkflowBeingInitialized= {}) => isWorkflowBeingInitialized[deploymentID] ?? false;
export const selectIsTaskBeingProcessed = (task, tasksState = {}) => tasksState[buildTaskIdentifier(task)]?.isLoading ?? false;
export const selectIsTaskCompleted = (task, tasksState= {}) => tasksState[buildTaskIdentifier(task)]?.isTaskCompleted ?? false;
export const selectTask = (workflowID, tasks= {}) => {
  if (!tasks) return {};
  return tasks[workflowID] ?? {};
};
export const selectValidationErrors = (task, tasksState= {}) => tasksState[buildTaskIdentifier(task)]?.errors ?? null;
export const selectExceptionError = (task, tasksState= {}) => tasksState[buildTaskIdentifier(task)]?.exceptionError ?? null;
export const selectWorkflowID = (workflowName, activeWorkflows) => {
      if (!Array.isArray(activeWorkflows)) return "";
      return activeWorkflows.find((activeWorkflow) => activeWorkflow.includes(workflowName));
};