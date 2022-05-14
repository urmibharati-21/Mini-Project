import React from "react";
import './Home.css';
import bookmyshow from "./image/bookmyshow.jpg";
import banner from "./image/bannerbms.jpg";



class Home extends React.Component {

    render() {
        return (
            <div className="bg-div">
                <nav className="navbar navbar-expand-lg navbar-light bg-custom">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={bookmyshow} className="netflix" alt="bookmyshow" />
                        </a>

                        <div>
                            <a href="/" className="home-link">
                                <h4>Home</h4>
                            </a>


                        </div>
                    </div>
                </nav>


                <div className="container-fluid">
                    <img src={banner} className="mx-auto d-block banner" alt="banner" />
                </div>

                <div className="btn-collection d-flex align-items-end">
                    <a href="/booking">

                        <button className="btn btn-custom">

                            Buy Ticket

                        </button>
                    </a>

                    <a href="/playing">
                        <button className="btn btn-custom playingbutton">

                            Now Playing

                        </button>
                    </a>
                </div>







                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
                    integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"
                    crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
                    integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
                    crossorigin="anonymous"></script>
            </div>
        );
    }
}

export default Home;
