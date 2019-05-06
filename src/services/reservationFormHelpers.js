import _ from 'lodash';

const numOfPassOptions = [
    { key: 0, text: '', value: null },
    { key: 1, text: '1', value: 1 },
    { key: 2, text: '2', value: 2 },
    { key: 3, text: '3', value: 3 },
    { key: 4, text: '4', value: 4 }
]

const daysOfOperation = [
    { key: 0, text: '', value: null },
    { key: 1, text: 'Mon', value: 'Mon' },
    { key: 2, text: 'Tue', value: 'Tue' },
    { key: 3, text: 'Wed', value: 'Wed' },
    { key: 4, text: 'Thu', value: 'Thu' },
    { key: 5, text: 'Fri', value: 'Fri' },
    { key: 6, text: 'Sat', value: 'Sat' },
    { key: 7, text: 'Sun', value: 'Sun' }
]


export const renderDepartures = (users) => {
    let options = [];
    let departureCities = [];
    users.forEach(driver => {
        driver.itineraries.forEach(city => {
            departureCities = [...departureCities, city.departure_from]
        })
    })
    let uniqDepartureCities = _.uniq(departureCities);
    uniqDepartureCities.forEach((city, index) => {
        options = [...options, {key: index, text: city, value: city}]
    })
    return options;
}

export const renderDestinations = (users, departureCity) => {
    let options = [];
    let destinationCities = [];
    users.forEach(driver => {
        driver.itineraries.forEach((city, index) => {
            if(city.departure_from === departureCity){
                destinationCities = [...destinationCities, city.destination]
            }
        })
    })
    let uniqDestinations = _.uniqBy(destinationCities);
    uniqDestinations.forEach((city, index) => {
        options = [...options, {key: index, text: city, value: city}]
    })
    return options;
}


export const renderTimeOptions = (users, departureCity, destination) => {
    let departureTimeArr = [];
    let options = [];
    users.forEach(driver => {
        driver.itineraries.forEach((city, index) => {
            if(city.departure_from === departureCity && city.destination === destination){
                city.departure_time.forEach((time, index) => {
                    departureTimeArr = [...departureTimeArr, time]
                })
            }
        })
    })
    _.unionBy(departureTimeArr).forEach((time, index) => {
        options = [...options, {key: index, text: time, value: time}]
    })
    return options;
}

export const renderDrivers = (users, departureCity, destination, departureTime) => {
    let options = [];
    let matchCities = [];
    let availDrivers = [];
    users.forEach(driver => {
        driver.itineraries.forEach((city, index) => {
            if(city.departure_from === departureCity && city.destination === destination){
                matchCities = [...matchCities, { ...city,'id': driver.id, 'firstName': driver.firstName, 'lastName': driver.lastName }]
            }
        })
    })
    matchCities.forEach((city, index) => {
        city.departure_time.forEach(time => {
            if (time === departureTime){
                availDrivers = [...availDrivers, city]
            }
        })
    })
    _.unionBy(availDrivers, (driver) => {return driver.id})
    .forEach((driver, index) => {
        options = [...options, {key: index, text: driver.firstName + ' ' + driver.lastName, value: driver.id}]
    }) 
    return options;
}


export const renderNumOfPass = () => {
    const options = numOfPassOptions.map(num => {
        return {
            key: num.key, text: num.text, value: num.value
        }
    })
    return options;
}

export const renderDaysOfOperation = () => {
    const options = daysOfOperation.map(day => {
        return {
            key: day.key, text: day.text, value: day.value
        }
    })
    return options;
}



