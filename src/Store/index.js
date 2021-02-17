import { createStore } from '@reduxjs/toolkit';

const initialState = {

    DARK_THEME: true,
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case 'DARK_THEME': {
            
            const newState = {...state}
            newState.DARK_THEME = action.payload;
            return newState};

        default : return state;
    }
};

const store = createStore(reducer);

export default store;