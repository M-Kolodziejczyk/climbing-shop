import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import useForm from "../../../customHooks/useForm";
import {
  TextField,
  Button,
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  editBtn: {
    marginRight: "15px"
  },
  input: {
    "&:before": {
      display: "none"
    }
  }
}));

const UserPageDetails = props => {
  const classes = useStyles();
  const [userData, setUserData] = useState(null);
  const [label, setLabel] = useState(null);
  const inputEl = useRef(null);
  const userEl = useRef(null);
  const saveBtn = useRef(null);
  const editBtn = useRef(null);

  useEffect(() => {
    setUserData(props.userData);
    setLabel(props.labelName);
  }, [props]);

  const { handleChange, handleSubmit, values, errors } = useForm(
    { [props.attributeName]: props.userData },
    props.validate,
    props.callback
  );

  const handleFormClick = e => {
    userEl.current.setAttribute("hidden", true);
    editBtn.current.setAttribute("hidden", true);
    inputEl.current.removeAttribute("hidden");
    saveBtn.current.removeAttribute("hidden");
  };

  const handleForm = e => {
    handleSubmit(e);
    if (!errors) {
      userEl.current.removeAttribute("hidden");
      editBtn.current.removeAttribute("hidden");
      inputEl.current.setAttribute("hidden", true);
      saveBtn.current.setAttribute("hidden", true);
    }
  };

  return (
    <ListItem divider>
      <Grid item container>
        <Grid item xs={12} md={2}>
          <ListItemText>{label && label}</ListItemText>
        </Grid>
        <Grid item xs={12} md={8} ref={userEl}>
          <ListItemText>{userData && userData}</ListItemText>
        </Grid>
        {props.edit && !props.passwordForm && (
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleForm}
          >
            <TextField
              name={props.attributeName}
              className="input"
              error={errors[props.attributeName] ? true : false}
              helperText={"" || errors[props.attributeName]}
              value={values[props.attributeName]}
              onChange={handleChange}
              ref={inputEl}
              hidden={true}
              autoFocus
            />
            <Grid item xs={2}>
              <ListItemSecondaryAction>
                <Button onClick={handleFormClick} ref={editBtn}>
                  <EditIcon className={classes.editBtn} />
                  <ListItemText>Edit</ListItemText>
                </Button>
                <Button type="submit" ref={saveBtn} hidden={true}>
                  <ListItemText>Save</ListItemText>
                </Button>
              </ListItemSecondaryAction>
            </Grid>
          </form>
        )}
      </Grid>
    </ListItem>
  );
};

export default UserPageDetails;
