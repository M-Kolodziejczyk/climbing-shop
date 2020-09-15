import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../../../common/components/Spinner";
import Alert from "@material-ui/lab/Alert";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import {
  MenuItem,
  Button,
  Box,
  TextField,
  Grid,
  Typography,
  Container,
  Fab,
  Card,
  CardMedia
} from "@material-ui/core";

const categories = [
  {
    value: "clothes",
    label: "Clothes"
  },
  {
    value: "shoes",
    label: "Shoes"
  },
  {
    value: "backpacks",
    label: "Backpacks"
  },
  {
    value: "climbing",
    label: "Climbing"
  },
  {
    value: "tourist",
    label: "Tourist"
  }
];

function FeatureInput(props) {
  return (
    <Grid container spacing={2} className={props.classes.propertiesContainer}>
      <Grid item xs={10} sm={11} className={props.classes.features}>
        <TextField
          error={
            Object.keys(props.errors).includes("features") &&
            Object.keys(props.errors.features).includes(`${props.id}`)
              ? true
              : false
          }
          helperText={
            Object.keys(props.errors).includes("features") &&
            Object.keys(props.errors.features).includes(`${props.id}`)
              ? props.errors.features[props.id]
              : ""
          }
          autoComplete="fname"
          name="features"
          variant="outlined"
          required
          fullWidth
          label="Features"
          autoFocus
          onChange={props.handleChange}
          value={props.value[props.id]}
          id={`${props.id}`}
        />
      </Grid>
      {props.id > 1 && (
        <Grid item xs={2} sm={1}>
          <Fab
            onClick={() => props.remove(props.id)}
            size="small"
            color="secondary"
            aria-label="add"
            className={props.classes.removeBtn}
          >
            <CloseIcon />
          </Fab>
        </Grid>
      )}
    </Grid>
  );
}
function PropertiesInput(props) {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      className={props.classes.propertiesContainer}
    >
      <Grid item xs={10} sm={11} lg={5} className={props.classes.features}>
        <TextField
          error={
            Object.keys(props.errors).includes("propertiesName") &&
            Object.keys(props.errors.propertiesName).includes(`${props.id}`)
              ? true
              : false
          }
          helperText={
            Object.keys(props.errors).includes("propertiesName") &&
            Object.keys(props.errors.propertiesName).includes(`${props.id}`)
              ? props.errors.propertiesName[props.id]
              : ""
          }
          autoComplete="fname"
          name="propertiesName"
          variant="outlined"
          required
          fullWidth
          label="Properties Name"
          autoFocus
          onChange={props.handleChange}
          value={props.value[props.id].name}
          id={`${props.id}`}
        />
      </Grid>
      <Grid item xs={10} sm={11} lg={6} className={props.classes.features}>
        <TextField
          error={
            Object.keys(props.errors).includes("propertiesValue") &&
            Object.keys(props.errors.propertiesValue).includes(`${props.id}`)
              ? true
              : false
          }
          helperText={
            Object.keys(props.errors).includes("propertiesValue") &&
            Object.keys(props.errors.propertiesValue).includes(`${props.id}`)
              ? props.errors.propertiesValue[props.id]
              : ""
          }
          autoComplete="fname"
          name="propertiesValue"
          variant="outlined"
          required
          fullWidth
          label="Properties Value"
          autoFocus
          onChange={props.handleChange}
          value={props.value[props.id].value}
          id={`${props.id}`}
        />
      </Grid>
      {props.id > 1 && (
        <Grid item xs={2} sm={1}>
          <Fab
            onClick={() => props.remove(props.id)}
            size="small"
            color="secondary"
            aria-label="add"
            className={props.classes.removeBtn}
          >
            <CloseIcon />
          </Fab>
        </Grid>
      )}
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: "30px"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  featuresContainer: {
    margin: "-8px"
  },
  propertiesContainer: {
    padding: "8px"
  },
  features: {
    display: "flex",
    alignItems: "center",
    padding: "8px"
  },
  fabIcon: {
    marginLeft: "10px",
    marginBottom: "4px",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  },
  removeBtn: {
    marginTop: "8px",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  },
  submit: {
    display: "flex",
    margin: "20px auto",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  },
  uploadInput: {
    position: "absolute",
    zIndex: "-1",
    top: "10px",
    left: "8px",
    fontSize: "2px",
    color: "#b8b8b8"
  },
  btnWrap: {
    position: "relative"
  },
  uploadBtn: {
    display: "inline-block",
    padding: "12px 18px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  },
  updateProductBtn: {
    marginBottom: "20px",
    width: "100%",
    marginTop: "20px",
    padding: "0",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    },
    [theme.breakpoints.up("md")]: {
      width: "200px",
      alignSelf: "flex-start"
    }
  },
  updateProductLink: {
    textDecoration: "none",
    padding: "6px 16px",
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    "&:hover": {
      textDecoration: "none",
      color: "#ffffff"
    }
  }
}));

const EditProductPageComponent = props => {
  const classes = useStyles();
  const [isSubmit, setIsSubmit] = useState(false);
  const [features, setFeatures] = useState(
    Object.keys(props.formData.features)
  );
  const [properties, setProperties] = useState(
    Object.keys(props.formData.properties)
  );
  const [readers, setReaders] = useState(null);

  const createFeatureInput = () => {
    props.onChange({
      name: "features",
      value: features[features.length - 1]
    });
    setFeatures(state => [...state, state[state.length - 1] + 1]);
  };

  const removeFeatureInput = e => {
    if (e > 1) {
      setFeatures(features.filter(x => x !== e));
      props.onChange({ name: "featureDelete", value: e });
    }
  };

  const createPropertiesInput = () => {
    props.onChange({
      name: "properties",
      value: properties[properties.length - 1]
    });
    setProperties(state => [...state, state[state.length - 1] + 1]);
  };

  const removePropertiesInput = e => {
    if (e > 1) {
      setProperties(properties.filter(x => x !== e));
      props.onChange({ name: "propertiesDelete", value: e });
    }
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      props.handleImage(file);
      setReaders(URL.createObjectURL(file));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(e);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit === true && Object.keys(props.errors).length === 0) {
      setFeatures([1]);
      setProperties([1]);
      setReaders(null);
      setIsSubmit(false);
    }
  }, [isSubmit, props.errors]);

  return (
    <Container component="main" maxWidth="lg" className="beforeFooterHigh">
      {props.loading && <Spinner />}
      <div className={classes.paper}>
        <Button variant="contained" className={classes.updateProductBtn}>
          <Link
            to={`/products/${props.formData.id}`}
            className={classes.updateProductLink}
          >
            Back to Product
          </Link>
        </Button>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          className={classes.header}
        >
          Update Product
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid
              container
              item
              xs={12}
              lg={6}
              spacing={2}
              alignContent="flex-start"
            >
              <Grid item xs={12}>
                <TextField
                  error={props.errors.productName ? true : false}
                  helperText={"" || props.errors.productName}
                  autoComplete="fname"
                  name="productName"
                  variant="outlined"
                  required
                  fullWidth
                  label="Product Name"
                  autoFocus
                  onChange={props.onChange}
                  value={props.formData.productName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={props.errors.manufacturer ? true : false}
                  helperText={"" || props.errors.manufacturer}
                  autoComplete="fname"
                  name="manufacturer"
                  variant="outlined"
                  required
                  fullWidth
                  label="Manufacturer"
                  autoFocus
                  onChange={props.onChange}
                  value={props.formData.manufacturer}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={props.errors.price ? true : false}
                  helperText={"" || props.errors.price}
                  variant="outlined"
                  required
                  fullWidth
                  label="Price"
                  name="price"
                  autoComplete="lname"
                  onChange={props.onChange}
                  value={props.formData.price}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={props.errors.discount ? true : false}
                  helperText={"" || props.errors.discount}
                  variant="outlined"
                  required
                  fullWidth
                  label="Discount"
                  name="discount"
                  autoComplete="lname"
                  onChange={props.onChange}
                  value={props.formData.discount}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={props.errors.description ? true : false}
                  helperText={"" || props.errors.description}
                  variant="outlined"
                  required
                  fullWidth
                  label="Description"
                  name="description"
                  autoComplete="lname"
                  onChange={props.onChange}
                  value={props.formData.description}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={props.errors.longDescription ? true : false}
                  helperText={"" || props.errors.longDescription}
                  variant="outlined"
                  required
                  fullWidth
                  label="Long Description"
                  name="longDescription"
                  autoComplete="lname"
                  onChange={props.onChange}
                  value={props.formData.longDescription}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={props.errors.quantity ? true : false}
                  helperText={"" || props.errors.quantity}
                  variant="outlined"
                  required
                  fullWidth
                  label="Quantity"
                  name="quantity"
                  autoComplete="lname"
                  onChange={props.onChange}
                  value={props.formData.quantity}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={props.errors.category ? true : false}
                  helperText={"" || props.errors.category}
                  variant="outlined"
                  select
                  defaultValue="clothes"
                  required
                  fullWidth
                  label="Category"
                  name="category"
                  onChange={props.onChange}
                  value={props.formData.category}
                >
                  {categories.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.btnWrap}>
                  <label className={classes.uploadBtn} htmlFor="upload">
                    Upload File
                  </label>
                  <input
                    className={classes.uploadInput}
                    type="file"
                    id="upload"
                    onChange={handleImageChange}
                  />
                </div>
              </Grid>
              {readers && (
                <Grid item xs={6}>
                  <Card>
                    <CardMedia id="hello" component="img" src={readers} />
                  </Card>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} lg={6} className={classes.featuresContainer}>
              {features.length > 0 &&
                features.map(n => (
                  <FeatureInput
                    id={n}
                    key={n}
                    classes={classes}
                    errors={props.errors}
                    handleChange={props.onChange}
                    value={props.formData.features}
                    remove={removeFeatureInput}
                  />
                ))}
              <Fab
                onClick={createFeatureInput}
                size="small"
                color="secondary"
                aria-label="add"
                className={classes.fabIcon}
              >
                <AddIcon />
              </Fab>
              {properties.length > 0 &&
                properties.map(n => (
                  <PropertiesInput
                    id={n}
                    key={n}
                    classes={classes}
                    errors={props.errors}
                    handleChange={props.onChange}
                    value={props.formData.properties}
                    remove={removePropertiesInput}
                  />
                ))}
              <Fab
                onClick={createPropertiesInput}
                size="small"
                color="secondary"
                aria-label="add"
                className={classes.fabIcon}
              >
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Update
          </Button>
          {props.isSuccess && (
            <Box mt={2}>
              <Alert severity="success">Product Created</Alert>
            </Box>
          )}
          {props.productError && (
            <Grid container>
              <Box mt={2}>
                <Typography component="p" variant="subtitle2" color="error">
                  {props.productError.message}
                </Typography>
              </Box>
            </Grid>
          )}
        </form>
      </div>
    </Container>
  );
};

export default EditProductPageComponent;
