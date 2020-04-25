import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReduxLogo from '../../ressources/images/redux-logo.svg'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    clic = (status) => {
        const action = { type: "CLICK", value: status }
        this.props.dispatch(action)
    }

    render() {
        return (
            <div className="example__component">
                <div className="example__component__title">
                    <h1>React&Redux Skeleton App</h1>
                    <span>By Jellfedora</span>
                </div>
                <div className="example__component__change-state">
                    {!this.props.isStart ? (
                        <div className="example__component__change-state__content" onClick={() => this.clic(true)}>
                            <button>
                                <FontAwesomeIcon icon={['fab', 'react']} />
                                <span>React</span>
                            </button>
                            <button>
                                <FontAwesomeIcon icon={['fab', 'font-awesome-flag']} />
                                <span>fontawesome</span>
                            </button>
                            <button>
                                <img src={ReduxLogo} alt="" />
                                <span>Redux</span>
                            </button>
                        </div>

                    ) : (
                            <span onClick={() => this.clic(false)}>Start Fast And Easily !</span>
                        )}


                </div>


            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        isStart: state.home.isStart,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

