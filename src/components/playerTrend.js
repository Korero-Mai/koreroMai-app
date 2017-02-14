const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')
import {Line} from 'react-chartjs-2'


class PlayersTrend extends React.Component {

  componentDidMount(){
      //fetch player by token
      const playerToken = this.props.params.id

      request.get('api/v1/players/player')
      .query(`token=${playerToken}`)
      .end((err,res) => {
        if (err) return console.log("error!")
        getScoreData(res.body[0].id_player)
      })

      function getScoreData(id){
        request.get('api/v1/players/score-data')
          .query(`playerId=${id}`)
          .end((err,res) => {
            if (err) return console.log("error!")
            return res.body
          })
      }

      // put it into the state as an Object
      //run a dispatch to add the graph data to the state
      // pull it out in the const data
  }

  render(){
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Player trend',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }

    return (
      <div>
        <Line data={data} />
      </div>
    )
  }
}

module.exports = connect((state) => state)(PlayersTrend)
