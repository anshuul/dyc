// HashingComponent.jsx
import React from "react";

const HashingComponent = ({ inputString, handleHashClick, hashedResult }) => {
  return (
    <div>
      <label>
        Input String:
        <input type="text" value={inputString} onChange={handleHashClick} />
      </label>
      <button onClick={handleHashClick}>Hash String</button>
      <div>
        <strong>Hashed Result:</strong> {hashedResult}
      </div>
    </div>
  );
};

export default HashingComponent;
