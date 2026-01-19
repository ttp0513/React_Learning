import { useState } from "react";

export const ShowHideText = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
    {isShow ? 
    <p className="text-white">Toggle Button to hide this text.</p> 
    : <p className="text-white">Hidden Text</p> }
    
      <button onClick={toggleShow}>{isShow ? "Hide Text" : "Show Text"}</button>
    </div>
  );
};
