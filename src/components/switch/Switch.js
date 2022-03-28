import React from "react";
import "./Switch.css";

const Switch = (props) => {
  return (
    <div className="react-switch-wrapper ">
      <p className="react-switch-text">{props.text}</p>

      <label
        style={{ background: props.isOn && props.onColor }}
        className="react-switch-label"
        // htmlFor={"react-switch-new"}
      >
        <input
          checked={props.isOn}
          onChange={props.handleToggle}
          type="checkbox"
          // id={"react-switch-new"}
          className="react-switch-checkbox"
        />
        <span
          style={{ background: props.pointColor }}
          className={"react-switch-button"}
        />
      </label>
    </div>
  );
};

export default Switch;
