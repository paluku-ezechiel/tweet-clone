import React from "react";

function Profile({src}) {
  return (
    <>
      <div className="timeline">
        <div className="imagetime">
          <img src={src} />
        </div>
        
      </div>
      <div className="trends"></div>
    </>
  );
}

export default Profile;
