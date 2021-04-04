import { Grid } from '@material-ui/core';
import { React, useEffect, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../Assets/logo.png';
import '../CSS/all_pages_css.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Login from './Login';
import AlertComponent from './AlertComponent';

export default function Header(props) {
    let [logged, setlogged] = useState(false);
    let [goCart, setCart] = useState(false)

    const check_if_logged = (data) => {
        if (data)
            setlogged(true)
        if (!data)
            setlogged(false)

    }

    useEffect(() => {
        if (goCart) {
            setTimeout(() => {
                setCart(false)
                window.location.href = "/"
            }, 4000)
        }
    }, [goCart])

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
                    <Grid item md={5} />
                    <Grid item md={4} className="flex_row_less_space during_mobile">
                        {logged &&
                            <p>My Account</p>
                        }
                        {
                            !logged &&
                            <p>Not Logged in</p>
                        }
                        {
                            logged &&
                            <div style={{ fontSize: '25px' }}><ShoppingCartIcon />{props.counter_cart}</div>
                        }
                         &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        {
                            logged && props.price > 0 && <div style={{ fontSize: '22px' }}>Price: &nbsp;&nbsp; {props.price}</div>
                        }
                         &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                       {
                            logged && props.counter_cart > 0 &&
                            <div onClick={() => {
                                setCart(true);
                            }} style={{ fontSize: '20px', cursor: "pointer" }}>Proceed To Checkout</div>
                        }
                    </Grid>
                </Grid>
                <br />

            </div>
            {
                <Login pass_data_to_parent={check_if_logged} />
            }
            {
                goCart &&
                <AlertComponent text={"Please wait while we process your transaction !!"} delay={4000} />
            }
        </div >
    )

}