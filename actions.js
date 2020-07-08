const axios = require('axios');

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require('./types');

/* YOUR CODE GOES HERE */

const gotDesserts = (arr) => {
    return {
        type: GOT_DESSERTS_DATA,
        desserts: arr
    }
}

const addDessert = (arr) => {
    return {
        type: NEW_DESSERT_DATA,
        newDessert: arr
    }
}

const fetchDesserts = () => {
    return (dispatch) => {
        return new Promise((res, rej) => {
            axios.get('/api/desserts')
                .then(res => dispatch(gotDesserts(res.data.desserts)))
                .then(() => res())
                .catch(e => rej(e))
        })
    }
}

const postDessert = () => {
    return (dispatch) => {
        return new Promise((res, rej) => {
            axios.post('/api/desserts')
                .then(res => dispatch(addDessert(res.data.newDessert)))
                .then(() => res())
                .catch(e => rej(e))

        })
    }
}

module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };
