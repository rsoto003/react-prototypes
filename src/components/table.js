import React from 'react';

export default () => {
    return (
        <table class="table">
            <thead class="thead-inverse">
                <tr>
                    <h1> Name </h1>
                    <h1> Course </h1>
                    <h1> Grade </h1>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>Kobe</td>
                    <td>Intro to Advanced Shooting</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Shaq</td>
                    <td>Intro to Free Throw Shooting</td>
                    <td>43</td>
                </tr>
                <tr>
                    <td>Kevin Durant</td>
                    <td>Intro to Snakes</td>
                    <td>100</td>
                </tr>
            </tbody>
        </table>
    )
}