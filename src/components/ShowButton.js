import React, {useState} from "react";

const ShowButton = () => {
    let [show, setShow] = useState(false);
  const handleShowClick = () => {
    setShow(true);
    console.log(true);
  }
  const handleCloseClick = () => {
    setShow(false);
  }

  return (
    <div>
        <button onClick={handleShowClick}>Show Model</button>
        { show && (
          <div className="model-overlay">
            <button onClick={handleCloseClick} className="model-close">Close</button>
            <p className="model-p">This is the content of Model</p>
          </div>
        )}
    </div>
  )
}

export default ShowButton;