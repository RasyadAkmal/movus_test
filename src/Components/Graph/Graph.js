import React, { Component } from "react";
import NavSide from "../../Components/navSide/NavSide";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.Results.map(data => (
          {
            make: `${data.Make_Name}`,
          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const {items} = this.state;
        return (
          <div className="boxWhite">
            <h2>Random User</h2>
            {
              items.length > 0 ? items.map(item => {
              const {make} = item;
                return (
                <div className="ctr">
                    {make}<br/>
                </div>
                );
              }) : null
            }
          </div>
        );

    }
}
export default Home;