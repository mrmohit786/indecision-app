import React from "react";
import Modal from "react-modal";
const OptionModal = (props) => {
  return (
    <Modal
      closeTimeoutMS={200}
      onRequestClose={props.resetSelectedOption}
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__title">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.resetSelectedOption}>
        Okey
      </button>
    </Modal>
  );
};

export default OptionModal;
