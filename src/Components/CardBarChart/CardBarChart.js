import React, { Component, useState } from "react";
import Chart from 'chart.js/auto'


class CardBarChart extends Component {

    chartRef = React.createRef();

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            count: 0,
            maker: "honda",
            year: "2010"
        }
    }
    
    componentDidMount() {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/"+this.state.maker+"/modelyear/"+this.state.year+"?format=json")
          .then(res => res.json())
          .then(parsedJSON => parsedJSON.Results.map(data => (
            {
              make: `${data.Model_Name}`,
            }
          )))
          .then(items => this.setState({
            items,
            count: items.length,
            isLoaded: false
          }))
          .catch(error => console.log('parsing failed', error))

          const ctx = this.chartRef.current.getContext("2d");
		
          new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Honda", "Daihatsu", "Toyota", "BMW", "Mitsubishi", "Datsun", "Volkswagen", "Hyundai", "Isuzu", "Suzuki"],
                datasets: [{
                    data: [],
                    label: "Total",
                    borderColor: "#d71900",
                    backgroundColor: "#d71900",
                    fill: false,
                }, 
                ]
            },
        });
      }
  
      render() {
        const {items} = this.state;
        const { count, axes } = this.state;
          return (
            <div class="mt-16 px-6 py-4 rounded-md drop-shadow-md bg-white">
              {
                items.length > 0 ? items.map(item => {
                const {make} = item;
                }) : null
              }
              <div>
				<canvas
				id="myChart"
				ref={this.chartRef}
				/>
			  </div>
            </div>
          );
      }
  }

  export default CardBarChart;
