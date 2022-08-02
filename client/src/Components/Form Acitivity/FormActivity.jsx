import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, createActivity } from "../../Redux/Actions/Actions.js";

const FormActivity = () => {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    let countriesList = countries.map(c => {
        return({    
            name: c.name,
            id: c.id
        })
    });
    
    const [input, setInput] = useState({
        name: '',
        difficulty: 1,
        duration: 5,
        season: 'select',
        countries: []
    });

    const [errors, setErrors] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: '',
    });

    const validator = () => {
        let errors = {};
        if(input.countries.length === 0) errors.countries = 'Select one countrie at least';
        if(input.name.length < 3) errors.name = 'Name too short, 3 characters at least';
        if(input.duration < 5) errors.duration = 'Must be greater than 5 and less than 460';
        if(input.season === 'select') errors.season = 'Choose a Season';
        return errors;
    }
    

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        if(errors.name || errors.difficulty || errors.duration){
            setErrors(validator({
                ...input,
                [e.target.name]: e.target.value
            }));
        };
    };

    const handleSeasons = (e) => {
        if(e.target.value !== 'select' && !input.season.includes(e.target.value)){
            setInput({
                ...input,
                season: e.target.value
            });
            if(errors.season){
                setErrors(validator({
                ...input,
                season: e.target.value
                }))
            }
        }
    }

    const handleCountries = (e) => {
        console.log('aca', e.target.value)
        if(e.target.value !== 'select' && !input.countries.includes(e.target.value)){
            setInput({
                ...input,
                countries: [...input.countries, e.target.value],
            })
            if(errors.countries){
            setErrors(validator({
                ...input,
                countries: [...input.countries, e.target.value]
            }))
            }
            
        }
    }

    const deleteCountry = (e) => {
        setInput({
            ...input,
            countries: input.countries.filter(c => c !== e.target.value)
        })
        if(errors.countries){
            setErrors(validator({
                ...input,
                countries: input.countries.filter(c => c !== e.target.value)
            }))
        }
    };

    const handleOnErrors = (e) => {
        e.preventDefault();
        setErrors(validator({
            ...input,
            [e.target.name]: e.target.value,
            countries: [...input.countries, e.target.value]
        }))
        handleOnSubmit(e)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (input.name && input.difficulty && input.duration && input.season && input.countries.length > 0) {
        dispatch(createActivity(input));
        alert('Activity correctly created');
        setInput({
            name: '',
            difficulty: 1,
            duration: 5,
            season: 'select',
            countries: []
        });
        }

        else{
            alert('The form must be completed')
        }
    }
    return(
        <div className = 'activity'>
            <Link to = '/home'>
               <button>Home</button>
            </Link>
            <div>
                <h1>Add an Activity</h1>
                <form className='formActivity' onSubmit={e => handleOnSubmit(e)}>
                    <div>
                        <div className = 'info'>
                            <label>Name</label>
                            <input
                                type = 'text'
                                name = 'name'
                                value = {input.name}
                                onChange = {e => handleOnChange(e)}
                            />
                        </div>
                        {errors.name ? (<p>{errors.name}</p>) : null}
                        <div className = 'info'>                        
                            <label>Difficulty (1 - 5)</label>
                            <select
                                name = 'difficulty'
                                value = {input.difficulty}
                                onChange = {e => handleOnChange(e)}
                            >
                                <option value = '1'>1</option>
                                <option value = '2'>2</option>
                                <option value = '3'>3</option>
                                <option value = '4'>4</option>
                                <option value = '5'>5</option>
                            </select>
                        </div>
                        <div className = 'info'>
                            <label>Duration (5 - 460 minutes)</label>
                            <input
                                type = 'number'
                                name = 'duration'
                                min = '5' 
                                max = '460' 
                                value = {input.duration}
                                onChange = {e => handleOnChange(e)}
                            />
                        </div>
                        {errors.duration ? (<p>{errors.duration}</p>) : null}
                    </div>  
                    <div>
                        <div className = 'info'>
                            <label>Season</label>
                            <select  value = {input.season} onChange = {e => handleSeasons(e)}>
                                <option value = 'select' >Select</option>
                                <option value = 'Spring'>Spring</option>
                                <option value = 'Summer'>Summer</option>
                                <option value = 'Fall'>Fall</option>
                                <option value = 'Winter'>Winter</option>
                            </select>
                        </div>
                        {errors.season && (<p>{errors.season}</p>)}
                    </div>
                    <div className = 'info'>
                        <label>Countries</label>
                        <select value = {input.countries} onChange={(e) => handleCountries(e)}>
                            <option>Select</option>
                            {countriesList?.map(c => {
                                return(
                                    <option value = {c.name} >
                                        {c.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                        {errors.countries? (<p>{errors.countries}</p>) : null}
                    <div className = "displayCountries">
                        {input.countries.map(c => {
                            return(
                                <div className="eachCountry" key = {c}>
                                    <p className="countryName">{c}</p>
                                    <button className="closeButton" onClick={(e) => deleteCountry(e)} value={c}>X</button>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                    {errors.name || 
                    errors.activity || 
                    errors.duration || 
                    errors.season || 
                    errors.countries ?
                    <button disabled>Add Activity</button>
                    :<button onClick={(e) => handleOnErrors(e)}>Add Activity</button>}
                    </div>
                </form>
            </div>
        </div>
    )
};

export default FormActivity