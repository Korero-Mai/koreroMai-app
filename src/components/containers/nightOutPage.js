const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')

const NightOut = (props) => {
	console.log('props', props);
	return (
		<div>
			<h1>Night Out </h1>

			<div>
				TOTAL FOR NIGHT
			</div><br/>
			<form>
				<table>
					<thead>
						<tr>
							<th>
								Names
							</th>
							<th>
								Person picking up tab
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
					</tbody>
				</table>
			</form>




			<form>
				<table>
					<thead>
						<tr>
							<th>
								Names
							</th>
							<th>
								Person picking up tab
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
