const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')
import {Line} from 'react-chartjs-2'
const _ = require('lodash')


class PlayersTrend extends React.Component {

  componentDidMount(){
      const playerToken = this.props.params.id
      const dispatch = this.props.dispatch

      request.get('api/v1/players/player')
      .query(`token=${playerToken}`)
      .end((err,res) => {
        if (err) return console.log('error!')
        getScoreData(res.body[0].id_player)
      })

      function getScoreData(id){
        request.get('api/v1/players/score-data')
          .query(`playerId=${id}`)
          .end((err,res) => {
            if (err) return console.log('error!')
            dispatch({type:'UPDATE_SCORE_DATA', payload:res.body})
          })
      }
  }

  render(){
    const scoreData = this.props.scoreData
    const playerToken = this.props.params.id

    const labels = _.map(scoreData, (scoreItem) => {
      return scoreItem.id_game
    })
    const SoundsScores = _.map(scoreData, (scoreItem) => {
      return scoreItem.prac_sounds_wrong
    })
    const WordsScores = _.map(scoreData, (scoreItem) => {
      return scoreItem.prac_words_wrong
    })

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Practice sounds mistakes',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,1)',
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
          data: SoundsScores,
        },
        {
          label: 'Practice words mistakes',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(151, 12, 12, 1)',
          borderColor: 'rgba(151, 12, 12, 1)',
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
          data: WordsScores,
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
