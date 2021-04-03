import { Grid } from '@material-ui/core';
import { React, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../Assets/logo.png';
import '../CSS/all_pages_css.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Login from './Login';

export default function Header() {
    let [counter, setcounter] = useState(0);
    let [logged, setlogged] = useState(false);

    return (
        <div>
            <div className="header">
                <Grid container className="header_grid">
                    <Grid item md={2}>
                        <MenuIcon />
                    </Grid>
                    <Grid item md={3}>
                        <img style={{ height: '45px', width: '150px' }} src={logo} />
                    </Grid>
                    <Grid item md={4} />
                    <Grid item md={3}>
                        {logged &&
                            <p>My Account</p>
                        }
                        {
                            !logged &&
                            <p>Login</p>
                        }
                        {
                            localStorage.getItem("check_if_logged") == "yes" &&
                            <div><ShoppingCartIcon />{counter}</div>
                        }
                    </Grid>
                </Grid>

            </div>
            {
                <Login />
            }
        </div>
    )

}