import * as React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

    return (
        <ul>
            <li><Link to="/bark">Bark</Link></li>
            <li><Link to="/history">History</Link></li>
        </ul>
    );
};

export default Main;