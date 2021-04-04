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


    const check_if_logged = (data) => {
        if (data)
            setlogged(true)
        if (!data)
            setlogged(false)

    }

    return (
        <div>
            <div className="header">
                <Grid container className="header_grid">
                    <Grid item md={1}>
                        <MenuIcon />
                    </Grid>
                    <Grid item md={2}>
                        <img style={{ height: '45px', width: '150px' }} src={logo} />
                    </Grid>
                    <Grid item md={6} />
                    <Grid item md={3} className="flex_row_less_space during_mobile">
                        {logged &&
                            <p>My Account</p>
                        }
                        {
                            !logged &&
                            <p>Not Logged in</p>
                        }
                        {
                            logged &&
                            <div><ShoppingCartIcon />{counter}</div>
                        }
                    </Grid>
                </Grid>
<br/>

            </div>
            {
                <Login pass_data_to_parent={check_if_logged} />
            }
        </div>
    )

}