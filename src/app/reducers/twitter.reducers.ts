import { Twitter } from './../models/twitter.model';
import { Action } from '@ngrx/store';
import * as TwitterActions from './../actions/twitter.actions'
import { TwitterListService } from '../services/twitter-list.service';

// Section 1
const initialState: Twitter = {
    actualChannel: 'null',
    channel: 'dsdsd',
    message: {},
    publisher: '',
    subscribedChannel: '',
    subscription: null,
    timetoken: ''
}

// Section 2
export function reducer(state: Twitter[] = [initialState], action: TwitterActions.Actions) {
    // Section 3
    switch (action.type) {
        case TwitterActions.ADD_TWITTER:
            return [...state, action.payload];
        // Add this case:
        case TwitterActions.REMOVE_TWITTER:
            const index = action.payload;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        // state.splice(action.payload, 1)
        // return state;
        default:
            return state;
    }
}