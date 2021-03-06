import {
    TOGGLE_PAYMENT,
    CHANGE_MAP_CENTER,
    CHANGE_CURRENT_LOCATION,
    CHANGE_TARGET_LOCATION,
    UPDATE_SECOND_TRIP,
    NEXT_STEP,
    SWITCH_TRIP,
    TOGGLE_DIRECTION,
    CHANGE_DAY1,
    CHANGE_DAY2,
    CHANGE_TIME1,
    CHANGE_TIME2,
    TOGGLE_MAP_CLICK
} from "./strings";

import strings from '../../localisation';

const initialState = {
    selectedPaymentOption: "Child",
    selectedDirection: "Roundtrip",
    center: {
        lat: 58.5953,
        lng: 25.0136
    },
    from: {
        lat: 58.5953,
        lng: 25.0136,
        address: strings.estonia
    },
    target: {},
    secondTrip: {
        from: {},
        target: {}
    },
    step: 1,
    chosenDay1: "",
    chosenDay2: "",
    chosenTime1: "",
    chosenTime2: "",
    chosenLocationInput: "FROM",
    selectedTrip: 1
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PAYMENT:
            return {
                ...state,
                selectedPaymentOption: action.payload
            }
        case TOGGLE_DIRECTION:
            return {
                ...state,
                selectedDirection: action.payload
            }
        case CHANGE_MAP_CENTER:
            return {
                ...state,
                center: action.payload
            }
        case CHANGE_CURRENT_LOCATION:
            return {
                ...state,
                from: action.payload
            }
        case CHANGE_TARGET_LOCATION:
            return {
                ...state,
                target: action.payload
            }
        case UPDATE_SECOND_TRIP:
            return {
                ...state,
                secondTrip: action.payload
            }
        case SWITCH_TRIP:
            return {
                ...state,
                selectedTrip: action.payload
            }
        case NEXT_STEP:
            return {
                ...state,
                step: action.payload
            }
        case CHANGE_DAY1:
            return {
                ...state,
                chosenDay1: action.payload
            }
        case CHANGE_DAY2:
            return {
                ...state,
                chosenDay2: action.payload
            }
        case CHANGE_TIME1:
            return {
                ...state,
                chosenTime1: action.payload
            }
        case CHANGE_TIME2:
            return {
                ...state,
                chosenTime2: action.payload
            }
        case TOGGLE_MAP_CLICK:
            return {
                ...state,
                chosenLocationInput: action.payload
            }
        default:
            return state;
    }
}