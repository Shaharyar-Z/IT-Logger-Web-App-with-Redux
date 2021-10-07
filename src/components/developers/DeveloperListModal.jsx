import React, { useEffect } from "react";
import DeveloperItem from "./DeveloperItem";
import { getDevelopers } from "../../actions/developerAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const DeveloperListModal = ({
  developer: { developers, loading },
  getDevelopers,
}) => {
  useEffect(() => {
    getDevelopers();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="modal" id="developer-list-modal">
      <div className="modal-content">
        <h4>Developer List</h4>
        <ul className="collection">
          {!loading &&
            developers.map((developer) => (
              <DeveloperItem developer={developer} key={developer.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

DeveloperListModal.propTypes = {
  developer: PropTypes.object.isRequired,
  getDevelopers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  developer: state.developer,
});

export default connect(mapStateToProps, { getDevelopers })(DeveloperListModal);
