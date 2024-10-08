/* eslint-disable no-undef */
import * as React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import TextInsertion from "./TextInsertion";
import { makeStyles } from "@fluentui/react-components";
import { insertText } from "../taskpane";
import process from "process";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = (props) => {
  const { title } = props;
  const styles = useStyles();

  console.log(process.env.REACT_APP_ENV);

  return (
    <div className={styles.root}>
      <Header logo="assets/logo-filled.png" title={title} message="Welcome" />
      <TextInsertion insertText={insertText} />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
