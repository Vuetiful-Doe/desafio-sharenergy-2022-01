import React from "react";

function BulletSpacer({props}) {
  return (
    <span style={{ fontSize: "1em", color: "#999", margin: "0 .5em" }} {...props}>
      &bull;
    </span>
  );
}

export default BulletSpacer;
