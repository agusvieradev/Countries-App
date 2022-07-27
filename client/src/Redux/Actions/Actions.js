import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_DATA_COUNTRY = 'GET_DATA_COUNTRY';
export const CLEAN_DATA_COUNTRY = 'CLEAN_DATA_COUNTRY';
export const SORTED_COUNTRIES = 'SORTED_POKEMONS';
export const FILTER_BY_CONTINENT= 'FILTER_BY_CONTINENT';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';

export const getCountries = () => {
    return async (dispatch) => {
        return await axios.get('http://localhost:3001/countries')
        .then( response => dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        }))
        .catch(error => console.log(error))
    }
}

export const createActivity = () => {
    return (dispatch) => {
        return axios.post('http://localhost:3001/activities')
        .then( response => dispatch({
            type: CREATE_ACTIVITY,
            payload: response.data
        }))
        .catch(error => console.log(error))
    }
}


export const getActivities = () => {
    return async (dispatch) => {
        return axios.get('http://localhost:3001/activities')
        .then( response => dispatch({
            type: GET_ACTIVITIES,
            payload: response.data
        }))
    }
}

export const getCountry = (name) => {
    return async (dispatch) => {
        return await axios.get(`http://localhost:3001/countries?name=${name}`)
        .then(response => dispatch({
            type: GET_COUNTRY,
            payload: response.data
        }))
        .catch(error => {
            console.log(error)
            return dispatch({
                type: GET_COUNTRY,
                payload: {msg: `${name} doesn't exist`}
            })
        })
    }
}

export const getDataCountry = (id) => {
    return async (dispatch) => {
        return axios.get(`http://localhost:3001/countries/${id}`)
        .then(response => dispatch({
            type: GET_DATA_COUNTRY,
            payload: response.data
        }))
        .catch(error => console.log(error))
    }
}

export const cleanDataCountry = () => {
    return {
        type: CLEAN_DATA_COUNTRY,
        payload: {}
    }
}

export const sortedCountries = (payload) => {
    return {
        type: SORTED_COUNTRIES,
        payload: payload
    }
}

export const filterByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: payload
    }
}

export const filterByActivity = (payload) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload: payload
    }
}