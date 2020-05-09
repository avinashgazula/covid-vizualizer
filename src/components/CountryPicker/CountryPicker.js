import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({ onCountryChange }) => {
    const [listCountries, setListCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            setListCountries(await fetchCountries())
        }
        getCountries();
        
        
    }, [setListCountries])


    // console.log(listCountries);

    return (
        <div>
            <FormControl className={styles.container}>
                <NativeSelect defaultValue='' onChange={(event) => onCountryChange(event.target.value)}>
                    <option value="global">Global</option>
                    {listCountries.map((country, i) => 
                        <option key={i} value={country}>{country}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker; 

