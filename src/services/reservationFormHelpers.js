const numOfPassOptions = [
    { key: 0, text: '', value: null },
    { key: 1, text: '1', value: 1 },
    { key: 2, text: '2', value: 2 },
    { key: 3, text: '3', value: 3 },
    { key: 4, text: '4', value: 4 }
]

const destinationOptions = [
    { key: 0, text: '', value: null },
    { key: 1, text: 'Ottawa', value: 'Ottawa' },
    { key: 2, text: 'Montreal', value: 'Montreal' }
]

const timeOptions = [
    { key: 0, text: '', value: null },
    { key: 1, text: '2pm', value: '2pm' },
    { key: 2, text: '6pm', value: '6pm' }
]


export const renderNumOfPass = () => {
    const options = numOfPassOptions.map(num => {
        return {
            key: num.key, text: num.text, value: num.value
        }
    })
    return options;
}

export const renderTimeOptions = () => {
    const options = timeOptions.map(time => {
        return {
            key: time.key, text: time.text, value: time.value
        }
    })
    return options;
}

export const renderDestinations = () => {
    const options = destinationOptions.map(city => {
        return {
            key: city.key, text: city.text, value: city.value
        }
    })
    return options;
}