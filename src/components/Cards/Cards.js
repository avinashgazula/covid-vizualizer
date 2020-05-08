import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    console.log(lastUpdate);
    
    if (!confirmed) {
        return "Loading..."
    }
    
    return (
        <div className={styles.container}>
            <Grid container justify="center" spacing={3}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={1} separator = ',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toUTCString()}</Typography>
                        <Typography variant="caption">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={1} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toUTCString()}</Typography>
                        <Typography variant="caption">Number of cases recovered from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={1} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toUTCString()}</Typography>
                        <Typography variant="caption">Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
