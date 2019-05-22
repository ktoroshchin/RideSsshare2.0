import axios from 'axios';

export const onConfirm = (reservId,email,departure_from, departure_date, departure_time, destination, name, driverName, driver_phoneNumber) => {
    axios.post(`https://us-central1-sociallogin-33a1d.cloudfunctions.net/app/confirmation-email/${reservId}/${email}`, {email,departure_from, departure_date, departure_time, destination, name, driverName, driver_phoneNumber})
        .then(response => console.log(`${response.data} Status code: ${response.status}`))
        .catch((err) => console.log(err))
}
