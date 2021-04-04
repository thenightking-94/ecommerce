import { React, useState, useEffect } from 'react';
import Header from './Header';
import $ from "jquery";
import timer1 from '../Assets/timer1.png';
import timer2 from '../Assets/timer2.jpg';
import timer3 from '../Assets/timer3.jpg';
import { Grid, Typography } from '@material-ui/core';
import men from '../Assets/men.jpg';
import women from '../Assets/women.jpg';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';



export default function Home() {
    const [current_index, setIndex] = useState(0);
    const product_obj = useSelector(state => state.product_data);
    const received_response = useSelector(state => state.got_data_product);
    const dispatch = useDispatch();
    const array_images = [timer1, timer2, timer3];

    useEffect(() => {
        render_diff_images(array_images, current_index);
        const my_promise = fetch("./product_data.json", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        my_promise.then(res => res.json()).then(json => {
            dispatch({ type: 'GOT_PRODUCT_DATA', product_data: json, got_data_product: true });
        })
    }, [])

    function render_diff_images(data, index = current_index) {
        let html = "";
        html += "<img src='" + data[index] + "' />";
        $('.autoswiper_block').html(html);
    }

    useEffect(() => {
        setTimeout(() => {
            if (current_index == 2)
                setIndex(0)
            if (current_index < 2)
                setIndex(current_index => current_index + 1);
            render_diff_images(array_images, current_index);
        }, 3000)

    }, [current_index])


    useEffect(() => {
        console.log(product_obj)
    }, [received_response])



    const change_view = () => {

    }




    return (
        <div>
            <Header />
            <div className="autoswiper_block" />
            <br />
            <br />
            <div className="categories_block">
                <Grid container className="cat_grid">
                    <Grid onClick={change_view} item sm={5} md={5} xs={12}>
                        <img src={men} />
                        <br />
                        <br />
                        <p>
                            Men Sports Accessories
                        </p>
                    </Grid>
                    <Grid item sm={2} md={2} />

                    <Grid onClick={change_view} item sm={5} md={5} xs={12}>
                        <img src={women} />
                        <br />
                        <br />
                        <p>
                            Women Sports Accessories
                        </p>
                    </Grid>
                </Grid>
                <br />
                <Footer />
            </div>
        </div>
    )
}