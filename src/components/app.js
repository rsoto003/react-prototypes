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
        course: 'Learning React',
        grade: 83
    }, 
    {
        name: 'Thelma',
        course: 'Introduction to Being Lame 101',
        grade: 100
    },
    {
        name: 'Kenny',
        course: 'Being Adorable AF',
        grade: 100
    }
];