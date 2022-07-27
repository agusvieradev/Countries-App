import { 
    GET_COUNTRIES, 
    CREATE_ACTIVITY, 
    GET_ACTIVITIES, 
    GET_COUNTRY, 
    GET_DATA_COUNTRY, 
    CLEAN_DATA_COUNTRY,
    SORTED_COUNTRIES,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY
} from './../Actions/Actions.js';

const initialState = {
    countries: [],
    country: [],
    activities: [],
    activity: [],
    countryData: {},
    filtered: [],
    filteredActivity: []
}
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES: return {
            ...state,
            countries: action.payload,
            country: action.payload
        }

        case CREATE_ACTIVITY: return {
            ...state,
            activity:[...state.activities, action.payload]
        }

        case GET_ACTIVITIES: return {
            ...state,
            activities: action.payload
        }

        case GET_COUNTRY: return {
            ...state,
            countries: [action.payload]
        }

        case GET_DATA_COUNTRY: return {
            ...state,
            countryData: action.payload
        }

        case CLEAN_DATA_COUNTRY: return {
            ...state,
            countryData: action.payload
        }

        case SORTED_COUNTRIES:
            const countries2 = state.country;
            let sortedCountries; 
            if (action.payload !== 'ABC'){
               if(action.payload === "ZYX") {
                    sortedCountries = countries2.sort((a, b) => {
                        if (a.name > b.name) return -1;
                        if (a.name < b.name) return 1;
                        return 0;
                    });
               }
               else {
                    if(action.payload === 'asc') sortedCountries = countries2.sort((a, b)=> a.population -b.population);
                    else {
                        if(action.payload === 'desc') sortedCountries = countries2.sort((a, b)=> b.population - a.population)
                        else sortedCountries = countries2; 
                    }
               }
            }
            else {
                sortedCountries = countries2.sort( (a, b)=> {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0
                })
            }
            return {
                ...state,
                country: sortedCountries
            }
        
        case FILTER_BY_ACTIVITY: 
            const filteredAct = state.filteredActivity[0]? state.filteredActivity: state.country;
            let filterByActivity;
            if(action.payload === 'all' && filteredAct[0]) filterByActivity = filteredAct;
            else filterByActivity = filteredAct.filter( e => e.activities === action.payload);
            return {
                ...state,
                countries: filterByActivity[0]? filterByActivity: [{msg: `No such Country with that activity in this continent`}]
            }

        case FILTER_BY_CONTINENT: 
            const filteredCont = state.filtered[0]? state.filtered: state.country;
            let filterByContinent;
            if(action.payload === 'all' && filteredCont[0]) filterByContinent = filteredCont;
            filterByContinent = filteredCont.filter( e => e.continent === action.payload)
            return {
                ...state,
                countries: filterByContinent,
                filtered: filterByContinent
            }
        default: 
            return state;

    }

};
export default rootReducer;