import * as React from 'react';
import {Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class History extends Component {
    constructor(props) {
        super(props);
        this.compareBy.bind(this);
        this.sortBy.bind(this);
        this.state = {
            data: this.props.history,
            dec : false
        }
    }

    static propTypes = {
        history: PropTypes.array
    }

    compareBy(key, dec) {
        if(!dec) {
            return function (a, b) {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            };
        } else {
            return function (a, b) {
                if (a[key] < b[key]) return 1;
                if (a[key] > b[key]) return -1;
                return 0;
            };
        }
      }
     
      sortBy(key) {
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key, this.state.dec));
        this.setState({data: arrayCopy, dec: !this.state.dec});
      }

    render() {
        const Row = ({input, number, timeStamp}) => (
            <div className="row">
              <div>{input}</div>
              <div>{number}</div>
              <div>{timeStamp}</div> 
            </div>
          );
        const rows = this.state.data.map( (rowData) => <Row {...rowData} />);
        return (
            <div className="table">
          <div className="header">
            <div >Input</div>
            <div onClick={() => this.sortBy('number')}>Dogs</div>
            <div onClick={() => this.sortBy('timeStamp')}>timeStamp</div>
          </div>
          <div className="body">
            {rows}
          </div>
        </div>
        );
    }
}

export { History as UnboundHistory };

const mapStateToProps = state => ({
   
  history: state.history
});

export default connect(mapStateToProps)(History);


