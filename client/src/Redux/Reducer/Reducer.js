import { 
    GET_COUNTRIES, 
    CREATE_ACTIVITY, 
    GET_ACTIVITIES, 
    GET_COUNTRY, 
    GET_DATA_COUNTRY, 
    CLEAN_DATA_COUNTRY,
    SORT_BY_POPULATION,
    SORT_BY_NAME,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
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
            countries: action.payload
        }

        case GET_DATA_COUNTRY: return {
            ...state,
            countryData: action.payload
        }

        case CLEAN_DATA_COUNTRY: return {
            ...state,
            countryData: action.payload
        }
        
        case FILTER_BY_CONTINENT: 
            state.countries = state.country
            return {
                ...state,
                countries:  action.payload !== 'all' ? state.countries.filter(e => e.continent === action.payload) : state.country
            }
        
        case FILTER_BY_ACTIVITY: 
            state.countries = state.country
            return {
                ...state,
                countries: action.payload !== 'all' ? state.countries.filter(el => el.activities.find(e => (e.name).toLowerCase() === (action.payload).toLowerCase())) : state.country
            }

        case SORT_BY_NAME: 
            let alphabetic = state.countries;
            let sortedByName;
            if (action.payload === "ABC") {
                sortedByName = alphabetic.sort((a, b) => {
                    if (a.name > b.name) {
                      return 1;
                    }
                    else if (b.name > a.name) {
                      return -1;
                    }
                    return 0;
                })
                if (action.payload === 'None'){
                    sortedByName = state.country
                }
            }
            else {
                sortedByName = alphabetic.sort((a, b) =>{
                    if (a.name > b.name) {
                      return -1;
                    }
                    if (b.name > a.name) {
                      return 1;
                    }
                    return 0;
                });
                if(action.payload === 'None'){
                    sortedByName = state.country
                }
            }
          return {
            ...state,
            countries: sortedByName,
          };




        case SORT_BY_POPULATION:
            let pupulation = state.countries
            let sortedByPopulation = action.payload === 'asc'?
                pupulation.sort((a, b)=> b.population - a.population):
                pupulation.sort((a, b)=> a.population -b.population)
            return {
                ...state,
                countries: sortedByPopulation
            }
        default: 
            return state
    }
    
};
export default rootReducer;