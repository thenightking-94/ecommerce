import { React, useState, useEffect, useRef } from 'react';
import Header from './Header';
import $ from "jquery";
import timer1 from '../Assets/timer1.png';
import timer2 from '../Assets/timer2.jpg';
import timer3 from '../Assets/timer3.jpg';

export default function Home() {
    const myTimer = useRef(0);
    const [current_index, setIndex] = useState(0);
    const array_images = [timer1, timer2, timer3];

    useEffect(() => {
        render_diff_images(array_images, current_index);
    })

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


    return (
        <div>
            <Header />
            <div className="autoswiper_block">

            </div>
        </div>
    )
}