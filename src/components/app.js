import React from 'react';
import Table from './table';

export default () => {
    return (
        <div className="container"> 
            <h1>Student Grade Table </h1>
            <Table data={students}/>
        </div>
    )
}

const students = [
    {
        name: 'Ryan',
        course: 'React Intro',
        grade: 83
    }, 
    {
        name: 'Thelma',
        course: 'Being Lame',
        grade: 100
    },
    {
        name: 'Kenny',
        course: 'Being Adorable AF',
        grade: 100
    }
];