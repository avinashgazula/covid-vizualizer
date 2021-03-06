import React, { Component } from 'react'
import { Cards, CountryPicker, Chart } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import logo from './images/logo.png'

export default class App extends Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({ data: fetchedData });
        
    }

    onCountryChange = async (countryName) => {
        const fetchedData = await fetchData(countryName);
        this.setState({ data: fetchedData, country: countryName })
        
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={logo} alt="COVID-19"/>
                <Cards data={ data }/>
                <CountryPicker onCountryChange={this.onCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
