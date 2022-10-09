import React, { Component, useState } from "react";
import Chart from 'chart.js/auto'


class CardBarChart extends Component {

    chartRef = React.createRef();

    constructor(props) {
        super(props)
        this.state = {
            countHonda: 0, 
            itemsHonda: [],
            maker: "honda",
            year: "2010"
        }
    }
    
    graph = () => {
      const ctx = this.chartRef.current.getContext("2d");
		
          new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Honda", "Daihatsu", "Toyota", "BMW", "Mitsubishi", "Datsun", "Volkswagen", "Hyundai", "Isuzu", "Suzuki"],
                datasets: [{
                    data: [this.state.countHonda,0,0,0,0,0,0,0,0,0],
                    label: "Total",
                    borderColor: "#d71900",
                    backgroundColor: "#d71900",
                    fill: false,
                }, 
                ]
            },
        });
    }
  
    fetching = () => {
      fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/honda/modelyear/"+this.state.year+"?format=json")
          .then(res => res.json())
          .then(parsedJSON => parsedJSON.Results.map(data => (
            {
              model: `${data.Model_Name}`,
            }
          )))
          .then(itemsHonda => this.setState({
            itemsHonda,
            countHonda: itemsHonda.length,
            isLoaded: false
          })
          )
          .catch(error => console.log('parsing failed', error))     
    }

    componentDidMount() {
      this.fetching();
    }

    componentDidUpdate(){
      this.graph();
    }
  
      render() {
          return (
            <div class="mt-16 px-6 py-4 rounded-md drop-shadow-md bg-white">
              <div>
                <h1 class="font-semibold text-[20px] grey-light">CAR MODEL AMOUNT</h1>
                <h3 class="text-[14px]">From 10 Car Maker</h3>
              </div>
              <div>
                <canvas id="myChart" ref={this.chartRef}/>
              </div>
            </div>
          );
      }
  }

  export default CardBarChart;
