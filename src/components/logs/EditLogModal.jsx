import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";
import { getDevelopers } from "../../actions/developerAction";

const EditLogModal = ({ current, updateLog, developer: { developers } }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState("");
  const [developer, setDeveloper] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setDeveloper(current.developer);
    }
    getDevelopers();
  }, [current]);

  const onSubmit = () => {
    if (message === "" || developer === "") {
      M.toast({
        html: "Please provide values for message and developer",
        classes: "red",
      });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        developer,
        date: new Date(),
      };

      updateLog(updatedLog);
      M.toast({
        html: "Log Updated",
        classes: "green",
      });

      setMessage("");
      setAttention(false);
      setDeveloper("");
    }
  };

  return (
    <div id="edit-log-modal" className="modal">
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
            {/* <label htmlFor="message" className="active">
              Developer Log
            </label> */}
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

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
  getDevelopers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
  developer: state.developer,
});

export default connect(mapStateToProps, { updateLog, getDevelopers })(
  EditLogModal
);
