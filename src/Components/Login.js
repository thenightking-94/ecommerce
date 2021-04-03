import { React, useState, useEffect } from 'react';
import '../CSS/all_pages_css.css';
import { Grid } from '@material-ui/core';

export default function Login() {

    useEffect(() => {
        console.log("fetch login json")
    }, [])




    return (
        <div style={{ textAlign: 'center' }}>
            <Grid id="login_grid" container style={{ width: '100%' }}>
                <Grid item md={4} />
                <Grid item md={4} xs={12}>
                    <div className="login_div">
                        <div style={{ borderRadius: '5px', backgroundColor: 'white', color: 'black', padding: '10px', fontSize: '15px' }}>
                            Please Login to continue
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} />
            </Grid>
        </div>
    )
}