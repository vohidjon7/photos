import React, {Component} from "react";
import '../css/footer.css'

class Footer extends Component{

    render(){
        return(
            <div className="footer">
                <footer className="page-footer">
                    <div className="container">
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            ©{new Date().getFullYear()} Copyright Text
                            <a className="grey-text text-lighten-4 right" href="@nsrv_1">More Links</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;