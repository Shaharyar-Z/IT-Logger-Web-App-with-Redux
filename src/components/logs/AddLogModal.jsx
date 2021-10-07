import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";
import { getDevelopers } from "../../actions/developerAction";

const AddLogModal = ({ addLog, developer: { developers }, getDevelopers }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState("");
  const [developer, setDeveloper] = useState("");

  useEffect(() => {
    getDevelopers();
    //eslint-disable-next-line
  }, []);

  const onSubmit = () => {
    if (message === "" || developer === "") {
      M.toast({
        html: "Please provide values for message and developer",
        classes: "red",
      });
    } else {
      const newLog = {
        message,
        attention,
        date: new Date(),
        developer,
      };

      addLog(newLog);
      M.toast({
        html: "Log Added",
        classes: "green",
      });

      setMessage("");
      setAttention(false);
      setDeveloper("");
    }
  };

  return (
    <div id="add-log-modal" className="modal">
      <div className="modal-content">
        <h4>Enter Developer Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Developer Log
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="developer"
              value={developer}
              className="browser-default"
              onChange={(e) => setDeveloper(e.target.value)}
            >
              <option value="" disabled>
                Select Developer
              </option>
              {developers.map((developer) => (
                <option
                  value={developer.firstName}
                >{`${developer.firstName} ${developer.lastName}`}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Need Attention</span>
              </label>
            </p>
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
//eslint-disable-next-line
AddLogModal.propsType = {
  addLog: PropTypes.func.isRequired,
  getDevelopers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  developer: state.developer,
});

export default connect(mapStateToProps, { addLog, getDevelopers })(AddLogModal);
