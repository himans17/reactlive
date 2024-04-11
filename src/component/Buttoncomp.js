import React from "react";
import "../App.css";
function Buttoncomp({ buttons, isSelected, setIsSelected }) {
  return (
    <div className="container">
      <div className="row my-3 button-grp">
        <div className="col-md-12 col-12 grp-back">
          {buttons.map((text, index) => {
            return (
              <div
                className={
                  isSelected === index
                    ? "btn btn-success  col-md-6 col-3 m-2"
                    : "btn btn-outline-success col-md-6 col-3 m-2"
                }
                onClick={() => setIsSelected(index)}
              >
                {text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Buttoncomp;
