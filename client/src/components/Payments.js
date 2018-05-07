import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from "react-redux";
import * as actions from "../ducks/actions";
import {
    P
} from "react-stylux"

class Payments extends React.Component {
    render() {
        return (
            <StripeCheckout
                name="Survey Emailer"
                description="$5 for 5 email credits"
                amount={500}
                token={token =>this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <P>Add Credits</P>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments)