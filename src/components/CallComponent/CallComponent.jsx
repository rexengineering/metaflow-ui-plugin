import React from "react";

function CallComponent({callState}){
  return (
      <div>
          <p>This is a custom plugin</p>
          <p>Call state: {callState}</p>
      </div>
  )
}

export default CallComponent;