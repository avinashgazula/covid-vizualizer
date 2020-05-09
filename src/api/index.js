import axios from 'axios'

const Url = 'https://covid19.mathdro.id/api'

export const fetchData = async (countryName) => {
    let modifiedUrl = Url

    if (countryName) {
        modifiedUrl = (`${Url}/countries/${countryName}`)
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(modifiedUrl);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifiedData;
    } catch (err) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${Url}/daily`)

        const modifiedData = data.map((item) => ({
            date: item.reportDate,
            confirmed: item.confirmed.total,
            deaths: item.deaths.total
        }));

        return modifiedData;
        
    } catch (error) {
        
    }   
}


export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${Url}/countries`)
        const listCountries = countries.map(country => country.name)
        return listCountries;
    } catch (error) {
        
    }
    
}