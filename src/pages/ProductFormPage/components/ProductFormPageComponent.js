import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../../../common/components/Spinner";
import {
  MenuItem,
  Button,
  Box,
  TextField,
  Grid,
  Typography,
  Container
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
  }
}));

const ProductFormPageComponent = props => {
  const handleChange = e => {
    props.onChange(e);
  };
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      {props.loading && <Spinner />}
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Product
        </Typography>
        <form className={classes.form} noValidate onSubmit={props.onSubmit}>
          <Grid container spacing={2}>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                error={props.errors.properties ? true : false}
                helperText={"" || props.errors.properties}
                variant="outlined"
                required
                fullWidth
                label="Properties"
                name="properties"
                autoComplete="lname"
                onChange={props.onChange}
                value={props.formData.properties}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={props.errors.categories ? true : false}
                helperText={"" || props.errors.categories}
                variant="outlined"
                select
                // id="outlined-select-currency"
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
