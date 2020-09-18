import React, { useRef } from "react";
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

const PasswordComponent = props => {
  const classes = useStyles();
  const inputEl = useRef(null);
  const inputEl2 = useRef(null);
  const userEl = useRef(null);
  const saveBtn = useRef(null);
  const editBtn = useRef(null);

  const { handleChange, handleSubmit, values, errors } = useForm(
    { oldPassword: "", password: "" },
    props.validate,
    props.callback
  );

  const handleFormClick = e => {
    userEl.current.setAttribute("hidden", true);
    editBtn.current.setAttribute("hidden", true);
    inputEl.current.removeAttribute("hidden");
    saveBtn.current.removeAttribute("hidden");
    inputEl2.current.removeAttribute("hidden");
  };

  const handleForm = e => {
    handleSubmit(e);
    if (!errors) {
      userEl.current.removeAttribute("hidden");
      editBtn.current.removeAttribute("hidden");
      inputEl.current.setAttribute("hidden", true);
      inputEl2.current.setAttribute("hidden", true);
      saveBtn.current.setAttribute("hidden", true);
    }
  };

  return (
    <ListItem divider>
      <Grid item container>
        <Grid item xs={12} md={2}>
          <ListItemText>Password</ListItemText>
        </Grid>
        <Grid item xs={12} md={8} ref={userEl}>
          <ListItemText>**********</ListItemText>
        </Grid>
        <form
          className={classes.formPassword}
          noValidate
          autoComplete="off"
          onSubmit={handleForm}
        >
          <Grid container>
            <Grid item xs={12} sm={5}>
              <TextField
                name={"oldPassword"}
                className="input inputPassword"
                error={errors.oldPassword ? true : false}
                helperText={"" || errors.oldPassword}
                value={values.oldPassword}
                onChange={handleChange}
                ref={inputEl}
                hidden={true}
                autoFocus
                placeholder="Old Password"
                type="password"
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                name={"password"}
                className="input"
                error={errors.password ? true : false}
                helperText={"" || errors.password}
                value={values.password}
                onChange={handleChange}
                ref={inputEl2}
                hidden={true}
                autoFocus
                placeholder="New Password"
                type="password"
              />
            </Grid>
          </Grid>

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
      </Grid>
    </ListItem>
  );
};

export default PasswordComponent;
