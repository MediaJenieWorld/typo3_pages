import { Fragment, useState } from "react";
import styles from "./Center.module.scss";
import PropTypes from "prop-types";

const Custom_Centered_DynamicDialog = ({
  modelHeight,
  modelWidth,
  setModelState,
  state,
  children,
  mainStyle,
}) => {
  modelHeight = modelHeight || "max-content";
  modelWidth = modelWidth || "max-content";


  const toggleMenu = () => {
    setModelState((pre) => !pre);
  };

  return (
    <Fragment>
      <div
        className={`${styles.Insight_dialog} ${state ? styles.active : styles.close
          }`}
        style={mainStyle}
      >

        <label
          onClick={toggleMenu}
          className={`${styles.closeLayer} ${styles.label}`}
        ></label>
        <div
          className={styles.menuBox}
          style={{
            "--pop-up-menu-height": modelHeight,
            "--pop-up-menu-width": modelWidth,
          }}
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
};

Custom_Centered_DynamicDialog.props = {
  unqiueKey: PropTypes.string.isRequired,
  modelHeight: PropTypes.string.isRequired,
  modelWidth: PropTypes.string.isRequired,
};
export default Custom_Centered_DynamicDialog;
