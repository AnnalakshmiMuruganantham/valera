import React from "react";
import { Container } from "react-bootstrap";

class CallToAction extends React.Component {
    render(){
        return(
            <div id="CallToAction">
                <Container className="CallToAction-main">
                    <h2 className="text-center CallToAction-h2">Call To Action</h2>
                    <p className="text-center CallToAction-p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <input type="button" value="Call To Action" className="text-center CallToAction-btn" />
                </Container>
            </div>
        );
    }
}
export default CallToAction;