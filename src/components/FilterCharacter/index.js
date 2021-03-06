import React from 'react';

import './style.css';

export default () => {
    return (
        <div className="Filter__Wrapper">
            <h2 className="Filter__Wrapper_Title">Search characters</h2>
            <form action="" className="Form__Wrapper_container" onSubmit={submitFilterHandler}>
                <div className="Input__Wrapper">
                    <label htmlFor="search_name" className="Label__InputText">Name:</label>
                    <input id="search_name" type="text" className="Input__SearchText" placeholder="Enter name of character"/>
                </div>
                <div className="Input__Wrapper">
                    <label className="Label__InputText">Male
                        <input type="radio" className="Input__Radio_select" name="gender"/>
                    </label>
                    <label className="Label__InputText">Female
                        <input type="radio" className="Input__Radio_select" name="gender"/>
                    </label>
                    <label className="Label__InputText">Genderless
                        <input type="radio" className="Input__Radio_select" name="gender"/>
                    </label>
                    <label className="Label__InputText">Unknown
                        <input type="radio" className="Input__Radio_select" name="gender"/>
                    </label>
                </div>
                <button className="Btn_Filter_data">Filter</button>
            </form>
        </div>
    );
}

const submitFilterHandler = (e) => {
    console.log("submitFilterHandler");
    e.perentDefault()

    console.log(e.target[0]);
}