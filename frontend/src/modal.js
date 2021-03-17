import React, { useState } from "react";

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  paddingTop: "20px",
  paddingBottom: "20px",
  zIndex: 2,
};

const outterStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 2,
};

function Modal({ open, onClose, rememberName }) {
  const [name, setName] = useState("");
  return open ? (
    <>
      <div style={outterStyles}></div>
      <div style={modalStyles}>
        <div class="row">
          <div class="col s1">
            <i class="material-icons prefix" onClick={onClose}>
              close
            </i>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s8 offset-s1">
            <i class="material-icons prefix">account_circle</i>
            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              id="icon_prefix"
              type="text"
              class="validate"
            />
            <label for="icon_prefix">name</label>
          </div>
        </div>
        <div class="row">
          <div class="col offset-s1">
            <button
              onClick={() => {
                rememberName(name);
              }}
              class="waves-effect waves-light btn"
            >
              Remember Name
            </button>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default Modal;
