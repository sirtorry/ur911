const reducer = (state = {
    number: "000-000-0000", // maybe develop regex algo to determine country of origin??
    numberOfContacts: 1,
    location: "silicon valley",
    call: "yes",
    contacts: []
}, action) => {
    if (action.type === 'SETNUMBER') {
        state = {
            ...state,
            number: action.payload,
        }
    }
    else if (action.type === 'SETCONTACTS') {
        state = {
            ...state,
            contacts: action.payload,
        }
    }
    else if (action.type === 'SETNUMBEROFCONTACTS') {
        state = {
            ...state,
            numberOfContacts: action.payload,
        }
    }
    else if (action.type === 'SETLOCATION') {
        state = {
            ...state,
            location: action.payload,
        }
    }
    return state;
};

export default reducer;