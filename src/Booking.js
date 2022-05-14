import React from "react";
import bookmyshow from './image/bookmyshow.jpg';
import "./styles/Booking.css";



class Booking extends React.Component {
    state = {
        count: 0,
        total: 0
    }

    componentDidMount() {
        var count = 0;
        var seats = document.getElementsByClassName("seat");
        for (var i = 0; i < seats.length; i++) {
            var item = seats[i];

            item.addEventListener("click", (event) => {
                var price = document.getElementById("movie").value;

                if (!event.target.classList.contains('occupied') && !event.target.classList.contains('selected')) {
                    count++;

                    var total = count * price;
                    event.target.classList.add("selected");
                    this.setState({ count, total });
                }
            })
        }
    }

    render() {
        return (
            <div className="all-body">

                <div>
                    <img className="main-logo" src={bookmyshow} alt="bookmyshow" />
                </div>


                <div className="movie-container">
                    <label className="select-movie">Pick a movie:</label>
                    <select id="movie" className="movieborder">
                        <option value="400">KGF2 (R.s 400)</option>
                        <option value="300">Dharmveer (R.s 300)</option>
                        <option value="300">Dr. Strange: In the Multiverse of madness (R.s 300)</option>
                    </select>
                </div>

                <ul className="showcase">
                    <li>
                        <div id="seat" className="seat"></div>
                        <small className="status">N/A</small>
                    </li>
                    <li>
                        <div id="seat" className="seat selected"></div>
                        <small className="status" >Selected</small>
                    </li>
                    <li>
                        <div id="seat" className="seat occupied"></div>
                        <small className="status">Occupied</small>
                    </li>
                </ul>

                <div className="container">
                    <div className="screen"></div>

                    <div className="row">
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                    </div>
                    <div className="row">
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat occupied"></div>
                        <div id="seat" className="seat occupied"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                    </div>
                    <div className="row">
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat occupied"></div>
                        <div id="seat" className="seat occupied"></div>
                    </div>
                    <div className="row">
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                    </div>
                    <div className="row">
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat occupied"></div>
                        <div id="seat" className="seat occupied"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                    </div>
                    <div className="row">
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat"></div>
                        <div id="seat" className="seat occupied"></div>
                        <div id="seat" className="seat occupied"></div>
                        <div id="seat" className="seat occupied"></div>
                        <div id="seat" className="seat"></div>
                    </div>
                </div>

                <div className="selected-seats">
                    <p className="text">
                        You have selected {this.state.count} seats for a price of R.s{this.state.total}
                    </p>
                </div>


                <a href="/">
                    <button className="btn-home">
                        Home
                    </button>
                </a>



            </div>
        );
    }
}

export default Booking;
