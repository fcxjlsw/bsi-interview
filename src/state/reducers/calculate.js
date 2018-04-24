import objectAssign from 'object-assign';
import initialState from './initial-state';
import {
  CALCULATE_DOGS
} from '../constants/action-types';

export default function calculateDogsReducer(state = initialState, action) {
    switch(action.type) {
      case CALCULATE_DOGS: {
        let numOfDogs = getNumDogs(action.input);
        return objectAssign({}, state, {
          dogs: numOfDogs,
          history: state.history.concat({"input":action.input, "number": numOfDogs, "timeStamp":Date.now()})
        });
      };
      default:
      return state;
    }
}

function getNumDogs(barkString) {
    let numOfB = 0;
    let numOfA = 0;
    let numOfR = 0;
    let res = 0;
    let tmp = 0;
    for(let i=0;i<barkString.length;i++) {
        switch (barkString.charAt(i)) {
            case 'b':
                tmp++;
                numOfB++;
                res = Math.max(res, tmp);
                break;
            case 'a':
                if(numOfB==0) return Number.MAX_VALUE;
                numOfB--;
                numOfA++;
                break;
            case 'r':
                if(numOfA==0) return Number.MAX_VALUE;
                numOfA--;
                numOfR++;
                break;
            case 'k':
                if(numOfR==0) return Number.MAX_VALUE;
                numOfR--;
                tmp--;
                break;
            default:
                return Number.MAX_VALUE;
        }
    }
    if(numOfB==0 && numOfA==0 && numOfR==0) return res;
    return Number.MAX_VALUE;
}
