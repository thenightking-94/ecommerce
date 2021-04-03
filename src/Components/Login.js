import { React, useState, useEffect } from 'react';
import '../CSS/all_pages_css.css';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    let user_json_obj = useSelector(state => state.user_login_obj);
    let dispatch = useDispatch();


    
    useEffect(() => {
        const my_promise = fetch("./user_login.json", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        my_promise.then(res => res.json()).then(json => {
            dispatch({ type: 'GOT_USER_LOGIN_JSON', user_login_obj: json });
        })
    }, [])



    useEffect(() => {
        console.log(user_json_obj)
        localStorage.setItem("user_data", JSON.stringify(user_json_obj));
    }, [user_json_obj])


    return (
        <div style={{ textAlign: 'center' }}>
            <Grid id="login_grid" container style={{ width: '100%' }}>
                <Grid item md={4} />
                <Grid item md={4} xs={12}>
                    <div className="login_div">
                        <br />
                        <div />
                        <div className="input_pad">
                            <div className="flex_row"> <p>Name </p>&nbsp;&nbsp;<input type="text" placeholder="...." /></div>
                            <br />
                            <div className="flex_row"> <p>Password </p>&nbsp;&nbsp;<input type="password" placeholder="..." /></div>
                        </div>
                        <br />
                        <br />
                        <div className="login_button" >
                            Please Login to continue
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} />
            </Grid>
        </div>
    )
}