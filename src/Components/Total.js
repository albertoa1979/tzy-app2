import React from "react";
import accounting from "accounting";
import { Button, makeStyles } from "@material-ui/core";


const UseStyles = makeStyles((theme)=>({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh"        
    },
    
    button: {
        marginTop: "2rem"
    }
}))

const Total = () => {
    const classes = UseStyles()
    return (
        <div className={classes.root}>
            <h5>Artículos totales: 2</h5>
            <h5> {accounting.formatMoney(345,)} </h5>
            <Button className={classes.button} variant="contained" color="secondary"> Pagar </Button>
        </div>
    )
}

export default Total