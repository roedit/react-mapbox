import { fromJS } from 'immutable';

const initialState = fromJS({})

export default function(state = initialState, action) {
    let stateJS = state.toJS()

    switch (action.type) {
        case 'COORDINATES_UPDATED': {
            console.log(action.payload);
            return fromJS(stateJS);
        }

        default: 
        return fromJS(stateJS);
    }
    
}