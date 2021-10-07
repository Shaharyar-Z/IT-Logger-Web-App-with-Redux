import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDeveloper } from "../../actions/developerAction";

const AddDeveloperModal = ({ addDeveloper }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({
        html: "Please provide values for message and developer",
        classes: "red",
      });
    } else {
      const newDeveloper = {
        firstName,
        lastName,
      };

      addDeveloper(newDeveloper);
      M.toast({
        html: "Developer Added",
        classes: "green",
      });

      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="developer-modal" className="modal">
      <div className="modal-content">
        <h4>New Developer</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-blue btn-flat"
            onClick={onSubmit}
          >
            Submit
          </a>
        </div>
      </div>
    </div>
  );
};
AddDeveloperModal.propTypes = {
  addDeveloper: PropTypes.func.isRequired,
};

export default connect(null, { addDeveloper })(AddDeveloperModal);
