import React, { Component } from "react";
import {nextTransform,prevTransform} from './carousel';
class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                {/*Sidebar menu*/}
                <div className="sidebar">
                <h2 className="sidebar-header">Products</h2>
                <div href="" className="components-dropdown-hover">
                    <a className="components-button" href="">Various Components   <i id="arrow" className="fa fa-caret-right"></i></a>
                    
                    <div className="components-dropdown-content">
                    <a href="" className="components">Resistors</a>
                    <a href="" className="components">Capacitors</a>
                    <a href="" className="components">Inductors/Coils</a>
                    <a href="" className="components">Diodes</a>
                    <a href="" className="components">LEDs</a>
                    <a href="" className="components">Power Supply</a>
                    <a href="" className="components">Microphones</a>
                    <a href="" className="components">Switches</a>
                    <a href="" className="components">Relays</a>
                    
                    </div>
                </div>
                <a href="" className="sideP" id="ics">ICs</a>
                <a href="" className="sideP" id="pbpcb">Prebuilt Circuits</a>
                <a href="" className="sideP" id="conn">Connectors</a>
                <a href="" className="sideP" id="tools">Tools</a>
                <a href="" className="sideP" id="other">Other</a>
                </div>
                {/*Sidebar menu ends*/}
    
                {/*content portion*/}
                <section className="page-content">
                <div className="content-header">
                    <h2>
                    Popular Items &#128293; 
                    </h2>
                </div>
                <div className="carousel-container">
                    <div className="track-container">
                    <div className="track">
                        <div className="card-container">
                        <div className="card">
                        1
                        </div>
                        </div>
                        <div className="card-container">
                        <div className="card">
                        2
                        </div>
                        </div>
                        <div className="card-container">
                        <div className="card">
                        3
                        </div>
                        </div>
                        <div className="card-container">
                        <div className="card">
                        4
                        </div>
                        </div>
                        <div className="card-container">
                        <div className="card">
                        5
                        </div>
                        </div>
                        <div className="card-container">
                        <div className="card">
                        6
                        </div>
                        </div>
                        <div className="card-container">
                        <div className="card">
                        7
                        </div>
                        </div>
                        <div className="card-container">
                        <div className="card">
                        8
                        </div>
                        </div>
                        <div className="card-container">
                        <div className="card">
                        9
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="carousel-navigation">
                        <button className="prev" onClick={prevTransform} >
                        <span className="material-icons">chevron_left</span>
                        </button>
                        <button className="next" onClick={nextTransform}>
                        <span className="material-icons">chevron_right</span>
                        </button>
                    </div>
                </div>
                </section>
                {/*content portion end*/}
          </div>
        )
    }
}

const returnHome = () => {
    
};

export default Home;