import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../../../common/components/Spinner";
import AddIcon from "@material-ui/icons/Add";
import {
  MenuItem,
  Button,
  Box,
  TextField,
  Grid,
  Typography,
  Container,
  Fab
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
    <Grid item xs={12} className={props.classes.features}>
      <TextField
        error={props.errors.features ? true : false}
        helperText={"" || props.errors.features}
        autoComplete="fname"
        name="features"
        variant="outlined"
        required
        fullWidth
        label="Features"
        autoFocus
        onChange={props.handleChange}
        value={props.value.id}
        id={`${props.id}`}
      />
    </Grid>
  );
}
function PropertiesInput(props) {
  return (
    <Grid container spacing={2} className={props.classes.propertiesContainer}>
      <Grid item xs={6} className={props.classes.features}>
        <TextField
          error={props.errors.properties ? true : false}
          helperText={"" || props.errors.properties}
          autoComplete="fname"
          name="propertiesName"
          variant="outlined"
          required
          fullWidth
          label="Properties Name"
          autoFocus
          onChange={props.handleChange}
          value={props.value.id}
          id={`${props.id}`}
        />
      </Grid>
      <Grid item xs={6} className={props.classes.features}>
        <TextField
          error={props.errors.properties ? true : false}
          helperText={"" || props.errors.properties}
          autoComplete="fname"
          name="propertiesValue"
          variant="outlined"
          required
          fullWidth
          label="Properties Value"
          autoFocus
          onChange={props.handleChange}
          value={props.value.id}
          id={`${props.id}`}
        />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
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
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  featuresContainer: {
    margin: "-8px"
  },
  propertiesContainer: {
    padding: "8px"
  },
  features: {
    padding: "8px"
  },
  fabIcon: {
    marginLeft: "10px"
  }
}));

const ProductFormPageComponent = props => {
  const classes = useStyles();
  const [features, setFeatures] = useState([1]);
  const [propertiesCounter, setPropertiesCounter] = useState([1]);

  const createFeatureInput = () => {
    setFeatures(state => [...state, state.length + 1]);
  };

  const createPropertiesInput = () => {
    setPropertiesCounter(state => [...state, state.length + 1]);
  };

  return (
    <Container component="main" maxWidth="lg">
      {props.loading && <Spinner />}
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Product
        </Typography>
        <form className={classes.form} noValidate onSubmit={props.onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6} className={classes.featuresContainer}>
              {features.length > 0 &&
                features.map(n => (
                  <FeatureInput
                    id={n}
                    key={n}
                    classes={classes}
                    errors={props.errors}
                    handleChange={props.onChange}
                    value={props.formData.features}
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
              {propertiesCounter.length > 0 &&
                propertiesCounter.map(n => (
                  <PropertiesInput
                    id={n}
                    key={n}
                    classes={classes}
                    errors={props.errors}
                    handleChange={props.onChange}
                    value={props.formData.properties}
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
            <Grid container item xs={6} spacing={2}>
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
                  error={props.errors.categories ? true : false}
                  helperText={"" || props.errors.categories}
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
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add
          </Button>
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

export default ProductFormPageComponent;
