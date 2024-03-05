import React from "react";

class Banner extends React.Component {
    render(){
        return (
            <div id="banner">
              <div className="banner-content">
                <h1 className="banner-h1">WELCOME TO VELERA</h1>
                <p className="banner-p">We are team of talented designers making websites with Bootstrap</p>
                <input type="button" value="Get Started" className="banner-btn" />
              </div>
            </div>
          );
    }
}


export default Banner;