import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux"
import * as actions from "../ducks/actions";
import {
    HR
} from "react-stylux";
import Header from "./Header";
import Landing from "./Landing";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div >
                <BrowserRouter>
                    <div>
                        <Header />
                        <HR />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App)