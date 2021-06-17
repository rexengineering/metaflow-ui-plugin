import React from "react";

function CallComponent({callState, updateCallState}){
  return (
      <div style={{
          height: "100vh"
      }}>
          <p>This is a custom plugin</p>
          <p>Call state: {callState}</p>
          <button type="button" onClick={() => updateCallState("State updates")}>
              Press
          </button>
      </div>
  )
}

export default CallComponent;