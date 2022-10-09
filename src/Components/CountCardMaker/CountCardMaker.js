import React, { Component } from "react";

class CountCardMaker extends Component {

  state = {
    items: [],
    count: 0
  };

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
                    <a class="text-[14px] whitespace text-gray-600">Total Makers</a>
                    <a class="text-[28px] font-bold text-gray-600">{count}</a>
                </div>
                <div class="grid justify-items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d71900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
            </div>
          </div>
        );
    }
}
export default CountCardMaker;