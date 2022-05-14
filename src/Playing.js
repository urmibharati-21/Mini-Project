import React from "react";
import kgf from "./image/kgf2.jpg";
import strange from "./image/drstrange.jpg";
import dharmveer from "./image/dharmveer.jpeg";
import bookmyshow from './image/bookmyshow.jpg';
import "./Playing.css";



class Playing extends React.Component{

  render(){
    return (
        <div className="bg-div">
        <nav className="navbar navbar-expand-lg navbar-light bg-custom">
            <div className="container">
              <a className="navbar-brand" href="/">
                  <img src={bookmyshow} className="netflix" alt="bookmyshow"/>
              </a>
               
              <div>
                <a href="/" className = "home-link">
                <h4>Home</h4>
                </a>
             
      
            </div>
            </div>
        </nav>
    
        <div>
            <h4 className="text-center my-4 headingstyle">Now Playing</h4>
        </div>
        <div className="btn-collection-playing my-4">
            
            
            
            <a href="/booking">
      
              <button className="btn btn-custom">
                   
                      Buy Ticket
                   
              </button>
          </a>
      
          
          </div>
        
        <div className="container">
            <div className="row justify-content-around align-items-center imagecontainer">
                <img src={dharmveer} className="img-card col-lg-4 col-md-6 col-sm-12 col-12 imagestyle" alt="dharmveer"/>
        
                <img src={strange} className="img-card col-lg-4 col-md-6 col-sm-12 col-12 imagestyle" alt="strange"/>
        
                <img src={kgf} className="img-card col-lg-4 col-md-6 col-sm-12 col-12 imagestyle" alt="kgf"/>
        
            </div>
        </div>
    
    
        
    
         
    
    
    
    
    
    
    
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
    </div>
    );
  }  
}

export default Playing;
