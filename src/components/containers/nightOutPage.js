const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')

const NightOut = (props) => {
	return (
		<div className='welcome'>
			<h1>Night Out </h1>

			<div>
				TOTAL FOR NIGHT
			</div><br />
			<form >
				<table className='nightOutUsers'>
					<thead>
						<tr>
							<th>
								Names
							</th>
							<th>
								Who Paid?
							</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>
								PersonA
							</td>
							<td>

								<input type="radio" name="payer" />

							</td>
						</tr>
						<tr>
							<td>
								PersonB
							</td>
							<td>

								<input type="radio" name="payer" />

							</td>
						</tr>
					</tbody>

				</table>
			</form><br/>
			<div>
				ADD ANOTHER PERSON
			</div>
		</div>

	)
}

//module.exports = connect((state) => state)(NightOut)
module.exports = NightOut
