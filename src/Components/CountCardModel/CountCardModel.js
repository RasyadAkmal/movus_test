import React, { Component } from "react";

class CountCardModel extends Component {

  state = {
    items: [],
    count: 0
  };

  componentDidMount() {
      fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/a?format=json")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.Results.map(data => (
          {
            model: `${data.Model_Name}`,
          }
        )))
        .then(items => this.setState({
          items,
          count: items.length,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const {count} = this.state;
        return (
          <div class="mt-10">
            <div class="flex flex-col bg-white px-6 py-4 rounded-md drop-shadow-md">
                <div class="text-left flex flex-col justify-items-start">
                    <a class="text-[14px] whitespace text-gray-600">Total Models</a>
                    <a class="text-[28px] font-bold text-gray-600">{count}</a>
                </div>
                <div class="grid justify-items-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d71900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                </div>
            </div>
          </div>
        );
    }
}
export default CountCardModel;