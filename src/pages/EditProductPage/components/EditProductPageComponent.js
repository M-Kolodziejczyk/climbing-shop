import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../../../common/components/Spinner";
import useForm from "../../../customHooks/useForm";
import {
  Button,
  Box,
  TextField,
  Grid,
  Typography,
  Container
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  header: {
    margin: "50px 0"
  }
}));

const EditProductPageComponent = props => {
  const { product, validate, calback } = props;

  const initialState = {
    id: product.id || "",
    productName: product.productName || "",
    manufacturer: product.manufacturer || "",
    price: product.price || "",
    discount: product.discount || "",
    description: product.description || "",
    quantity: product.quantity || "",
    properties: product.properties || ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initialState,
    validate,
    calback
  );

  const classes = useStyles();
  return (
    <Container>
      {props.loading && <Spinner />}
      <Typography
        className={classes.header}
        variant="h2"
        component="h1"
        align="center"
      >
        Edit Product
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          Hello
        </Grid>
        <Grid item xs={6}>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={errors.productName ? true : false}
                  helperText={"" || errors.productName}
                  autoComplete="fname"
                  name="productName"
                  variant="outlined"
                  required
                  fullWidth
                  label="Product Name"
                  autoFocus
                  onChange={handleChange}
                  value={values.productName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.manufacturer ? true : false}
                  helperText={"" || errors.manufacturer}
                  autoComplete="fname"
                  name="manufacturer"
                  variant="outlined"
                  required
                  fullWidth
                  label="Manufacturer"
                  autoFocus
                  onChange={handleChange}
                  value={values.manufacturer}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.price ? true : false}
                  helperText={"" || errors.price}
                  variant="outlined"
                  required
                  fullWidth
                  label="Price"
                  name="price"
                  autoComplete="lname"
                  onChange={props.onChange}
                  value={values.price}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.discount ? true : false}
                  helperText={"" || errors.discount}
                  variant="outlined"
                  required
                  fullWidth
                  label="Discount"
                  name="discount"
                  autoComplete="lname"
                  onChange={props.onChange}
                  value={values.discount}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.description ? true : false}
                  helperText={"" || errors.description}
                  variant="outlined"
                  required
                  fullWidth
                  label="Description"
                  name="description"
                  autoComplete="lname"
                  onChange={props.onChange}
                  value={values.description}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.quantity ? true : false}
                  helperText={"" || errors.quantity}
                  variant="outlined"
                  required
                  fullWidth
                  label="Quantity"
                  name="quantity"
                  autoComplete="lname"
                  onChange={props.onChange}
                  value={values.quantity}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.properties ? true : false}
                  helperText={"" || errors.properties}
                  variant="outlined"
                  required
                  fullWidth
                  label="Properties"
                  name="properties"
                  autoComplete="lname"
                  onChange={props.onChange}
                  value={values.properties}
                />
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditProductPageComponent;
