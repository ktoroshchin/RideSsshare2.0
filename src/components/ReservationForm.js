import React, { Component } from 'react'

class ReservationForm extends Component {
    state = {
        driver_id:'',
        name:'',
        email: '',
        phone_number: '',
        destination: '',
        departure_from: '',
        departure_time: '',
        number_of_passengers: '',
        comments: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        console.log(this.state)
    }


  render() {
    return (
      <div>
            <form onSubmit={this.handleSubmit} className="ui form">
                <div className="field">
                    <label>Choose driver</label>
                    <input onChange={this.handleInputChange} value={this.state.driver_id} name="driver_id" placeholder="driver"/>
                </div>
                <div className="field">
                    <label>Name</label>
                    <input onChange={this.handleInputChange}  value={this.state.name} name="name" placeholder="Name"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input onChange={this.handleInputChange}  value={this.state.email} name="email" placeholder="email"/>
                </div>
                <div className="field">
                    <label>Phone number</label>
                    <input onChange={this.handleInputChange}  value={this.state.phone_number} name="phone_number" placeholder="phone number"/>
                </div>
                <div className="field">
                    <label>Destination</label>
                    <input onChange={this.handleInputChange}  value={this.state.destination} name="destination" placeholder="destination"/>
                </div>
                <div className="field">
                    <label>Departure from</label>
                    <input onChange={this.handleInputChange}  value={this.state.departure_from} name="departure_from" placeholder="departure from"/>
                </div>
                <div className="field">
                    <label>Departure time</label>
                    <input onChange={this.handleInputChange}  value={this.state.departure_time} name="departure_time" placeholder="departure time"/>
                </div>
                <div className="field">
                    <label>Number of passenger</label>
                    <input onChange={this.handleInputChange}  value={this.state.number_of_passengers} name="number_of_passengers" placeholder="number of passengers"/>
                </div>
                <div className="field">
                    <label>Comments</label>
                    <input onChange={this.handleInputChange}  value={this.state.comments} name="comments" placeholder="comments"/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
      </div>
    )
  }
}
export default ReservationForm;
