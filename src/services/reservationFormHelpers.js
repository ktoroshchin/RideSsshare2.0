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

export const renderDepartures = (drivers, currentDriver) => {
    const itinerariesArr = []
    const foundDriver = drivers.filter(driver => driver.id === currentDriver)
    foundDriver.forEach(key => {
        key.itineraries.map(data => {
            return itinerariesArr.push(data)
        })
    })
    const options = itinerariesArr.map((city => {
        return {
            key: city.created_at.seconds, text: city.departure_from, value: city.departure_from
        }
    }))
    return options;  
}

export const renderDestinations = (drivers, currentDriver, departureCity) => {
    let itinerariesArr = [];
    let options = [];
    const foundDriver = drivers.filter(driver => driver.id === currentDriver)
    foundDriver.forEach(key => {
        key.itineraries.map(data => {
            return itinerariesArr.push(data)
        })
    })
    itinerariesArr.forEach(city => {
        if(city.departure_from === departureCity){
            options = [...options,{key: city.created_at.seconds, text: city.destination, value: city.destination}]
        }
    })
    return options;
}

export const renderTimeOptions = (drivers, currentDriver, departureCity) => {
    let itinerariesArr = [];
    let options = [];
    const foundDriver = drivers.filter(driver => driver.id === currentDriver)
    foundDriver.forEach(key => {
        key.itineraries.map(data => {
            return itinerariesArr = [...itinerariesArr, data]
        })
    })
    itinerariesArr.forEach(city => {
        if(city.departure_from === departureCity){
            city.departure_time.map((time, index) => {
                console.log(time)
                return options = [...options, { key: index, text: time, value: time }]
            })
        }
    })
    console.log(options) 
    return options;
}