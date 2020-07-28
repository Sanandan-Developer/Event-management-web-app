import React, { Component } from 'react'
import NavBar1 from '../components/NavBar1'


export default function EventDes(props) {
   const value=props.location.state;
   const value1=value['value'];
   console.log(value1);
    return (
        <div className="EventMain">
            <NavBar1></NavBar1>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "40%", height: "400px" }} className="descEvent">

                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "70%", height: "400px", margin: "30px" }}>
                    <h1 style={{ fontSize: "36px", fontWeight: "normal", color: "purple" }}>Event Name</h1>

                    <h1 style={{ fontSize: "36px", fontWeight: "normal", color: "purple", paddingTop: "13px" }}>Registartion fees:{value1['fees']}</h1>
                    <p style={{ paddingRight: "400px", paddingLeft: "0px" }}>{value1['description']}</p>
                    <br></br>

                    <form method="get" action="/register">
                        <button type="submit" className="btn5">Register</button>
                    </form>

                </div>

            </div>
        </div>
    )
}
