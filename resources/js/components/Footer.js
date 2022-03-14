import React, { Component } from "react";
import '../../css/footer.css';
class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <img className="img-icon" src="assets/bookworm_icon.svg" alt="Image"/>
                <p className="content-footer">
                    <h5>BOOKWORM</h5>
                    Address: 170 7th Avenue South<br></br>Phone: 212-201-7196
                </p>
            </div>
        );
    }
}
export default Footer;