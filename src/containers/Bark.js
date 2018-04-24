import * as React from 'react';
import {Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import { calculateDogsRequest } from '../state/actions/calculate';
import PropTypes from 'prop-types';


class Bark extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        dogs: PropTypes.number,
        calcDogs: PropTypes.func
    }

    handleChange(event) {
        this.setState(Object.assign({}, this.state, {
            input: event.target.value
        }));
    }

    handleSubmit() {
        this.props.calcDogs(this.state.input);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" onChange={this.handleChange}></input>
                    <input type="submit" onClick={this.handleSubmit} ></input>
                </div>
                <div>
                    Dogs needed: {this.props.dogs}
                </div>
            </div>
        );
    }
}

export { Bark as UnboundBark };

const mapDispatchToProps = dispatch => {
    return {
        calcDogs: barkString => dispatch(calculateDogsRequest(barkString))
    };
  };

const mapStateToProps = state => ({
   
  dogs: state.dogs
});

export default connect(mapStateToProps, mapDispatchToProps)(Bark);


