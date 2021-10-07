import React from 'react';
import "./Course.css"
import 'react-pro-sidebar/dist/css/styles.css';
import {Link} from "react-router-dom";
import Sidebar from "./Sidebar"
const Course = () => {
    return (
        <div id="CoursePage">
            <div id='Course'>
                <Sidebar/>
            </div>
        </div>
    );
};

export default Course;
