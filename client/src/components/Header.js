import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import {
    Container,
    Holder,
    Navbar1,
    Brand,
} from "react-stylux";

import Payments from "./Payments";

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <Navbar1><a href="/auth/google">Login With Google</a></Navbar1>
            default:
                return (
                    <Navbar1 totalWidth="300px">
                         <Payments />
                         <a href="/api/logout">Logout</a>
                    </Navbar1>
                )
        }
    }

    render() {
        return (
            <Container>
                <Holder
                    block1="0.5">
                    <Link to={this.props.auth ? "/surveys" : "/"} ><Brand></Brand></Link>
                    {this.renderContent()}
                </Holder>
            </Container>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}
export default connect(mapStateToProps)(Header)