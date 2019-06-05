import React from "react";
import API from "../../utils/API";
const mongoose = require("mongoose");



class ProfileForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    bio: "",
    status: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    neighborhood: ""
  };

  componentDidMount() {
    console.log('did mount?')
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onChange(e) {
    const offerings = this.state.offerings;
    let index;
    if (e.target.checked) {
      offerings.push(e.target.value);
    } else {
      index = offerings.indexOf(+e.target.value);
      offerings.splice(index, 1);
    }
    this.setState({ offerings: offerings });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.firstName);
    // const userName = this.props.auth.user.name;
    // var email = this.props.auth.user.email;
    var myid = mongoose.Types.ObjectId();
    console.log(myid.toString());

    API.saveUserProfile({
      _id: myid,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      neighborhood: this.state.neighborhood
    }).then(this.props.history.push("profile/" + myid));
    console.log("check");
  };

  render() {
    return (
      <div>
        <div className="container new-market-container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="card gardenCard">
                <div className="card-header gardenCardHeader">
                  <h2 className="gardenHeader">USER PROFILE</h2>
                </div>
                <div className="card-body gardenCardBody">
                  <form>
                    <fieldset>
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="Johnny"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Appleseed"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="1234 Main St"
                            value={this.state.address}
                            onChange={this.handleInputChange}
                          />

                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-8">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            value={this.state.city}
                            onChange={this.handleInputChange}
                          />

                        </div>
                        <div className="form-group col-md-2">
                          <label>State</label>
                          <select
                            name="state"
                            className="form-control"
                            value={this.state.state}
                            onChange={this.handleInputChange}
                          >
                            <option>Choose...</option>
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="ME">ME</option>
                            <option value="MD">MD</option>
                            <option value="MA">MA</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MS">MS</option>
                            <option value="MO">MO</option>
                            <option value="MT">MT</option>
                            <option value="NE">NE</option>
                            <option value="NV">NV</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NY">NY</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WV">WV</option>
                            <option value="WI">WI</option>
                            <option value="WY">WY</option>
                          </select>

                        </div>
                        <div className="form-group col-md-2">
                          <label>Zip</label>
                          <input
                            type="text"
                            className="form-control"
                            name="zip"
                            value={this.state.zip}
                            onChange={this.handleInputChange}
                          />

                        </div>
                      </div>
                    </fieldset>

                    <fieldset>
                      <button
                        type="submit"
                        className="btn btn-dark newMarketBtn"
                        onClick={this.handleFormSubmit}
                      >
                        Submit
                      </button>
                    </fieldset>
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileForm;