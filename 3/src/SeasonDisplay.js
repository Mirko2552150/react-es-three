import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets to the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, mounth) => { // creo la func per calcolare la stagione
    // console.log(mounth);
    if (mounth > 2 && mounth < 9) {
        return lat > 0 ? 'summer' : 'winter'; //operatore ternario
    } else {
        return lat > 0 ? 'winter' : 'summer'; //operatore ternario
    }
}

const SeasonDisplay = (props) => {
    // console.log(props.lat);

    const season = getSeason(props.lat, new Date().getMonth()); // assegno a SEASON la func getSeason inserendogli i parametri in ingresso
    // console.log(season);
    const {text, iconName} = seasonConfig[season]; // la func seasonConfig ci restituisce l'oggetto con i dati per compore il component da stampare / usiamo le quadre perchè SeasonConfig è un oggetto bidimnsionale non una func
   
    
    return ( // creo una classe comune e una diffenziata con la variabile, winter o summer
        <div className={`season-display ${season}` }> 
            <i className={`icon-left ${iconName} icon massive` } />
            <h1>{text}</h1>
            <i className={`icon-right  ${iconName} icon massive` }/>
        </div>
    );
};

export default SeasonDisplay;