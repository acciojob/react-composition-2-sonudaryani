import React, {useRef, useState, useEffect} from "react";

const ShowButton = () => {
    let [show, setShow] = useState(false);
    const modalRef = useRef();
  const handleShowClick = () => {
    setShow(true);
    console.log(true);
  }
  const handleCloseClick = () => {
    setShow(false);
  }

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseClick();
      }
    };

    if (show) {
      document.addEventListener('click', handleClickOutsideModal);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideModal);
    };
  }, [show]);

  return (
    <div>
        <button onClick={handleShowClick}>Show Modal</button>
        { show && (
          <div ref={modalRef} className="model-overlay">
            <button onClick={handleCloseClick} className="model-close">Close</button>
            <p className="model-p">This is the content of Modal</p>
          </div>
        )}
    </div>
  )
}

export default ShowButton;