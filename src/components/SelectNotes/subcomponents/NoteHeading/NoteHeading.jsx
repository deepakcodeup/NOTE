
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import PropTypes from 'prop-types';
import styles from "../../selectednotes.module.css";
import AppContext from "../../../../context/AppContext";

function NoteHeading({ noteHeading }) {
  const { isMobile, setHide, setCurrentGroup } = useContext(AppContext);

  const { letters } = noteHeading;

  const handleClick = () => {
    setCurrentGroup(noteHeading);
    if (isMobile) {
      setHide(true);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.groupName} `}
      
      key={noteHeading?.name}
    >
      <div
        className={styles.icon}
       
        style={{ backgroundColor: noteHeading?.color }}
      >
        {noteHeading.name && letters}
      </div>
      <div>{noteHeading.name}</div>
    </div>
  );
}

NoteHeading.propTypes = {
    noteHeading: PropTypes.object.isRequired,
  };

export default NoteHeading;