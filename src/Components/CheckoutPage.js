import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core";
import { Typography } from "@material-ui/core/styles/createTypography";
import CheckoutCard from './CheckoutCard'; 
import products from '../product-data';
import Product from './Product';

const UseStyles = makeStyles ((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
    },
}));

const CheckoutPage =() => {
    const classes = UseStyles();
   
    function FormRow () {
        return (
            <React.Fragment>
                {products.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Product key = {item.id} product={item} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center" gutterBottom variant="h4">
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
               <Grid item sx={12} sm={4} md={3}>
                    <Typography align="center" gutterBottom variant="h4">
                            Total
                    </Typography>
                </Grid> 
            </Grid>
        </div>
    );
};

export default CheckoutPage;