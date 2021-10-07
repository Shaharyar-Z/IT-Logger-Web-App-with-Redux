import React from "react";
import PropTypes from "prop-types";
import { deleteDeveloper } from "../../actions/developerAction";
import M from "materialize-css/dist/js/materialize.min";
import { connect } from "react-redux";

function DeveloperItem({ developer, deleteDeveloper }) {
  const onDelete = () => {
    deleteDeveloper(developer.id);
    M.toast({ html: "Developer Deleted", classes: "red" });
  };

  return (
    <li className="collection-item" key={developer.id}>
      <div>
        {developer.firstName} {developer.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons red-text">delete</i>
        </a>
      </div>
    </li>
  );
}

DeveloperItem.propTypes = {
  developer: PropTypes.object.isRequired,
  deleteDeveloper: PropTypes.func.isRequired,
};

export default connect(null, { deleteDeveloper })(DeveloperItem);
