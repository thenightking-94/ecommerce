import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';


export default function ViewCart(props) {
    const items_picked = useSelector(state => state.items_picked)

    useEffect(() => {
        console.log(items_picked)
    }, [])


    return (
        <div>
            <Header counter_cart={props.match.params.counter} loggedIn={true} />
            <br />
            <br />
            <br />

        </div>
    )
}