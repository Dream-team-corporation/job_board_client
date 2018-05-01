import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class HomePage extends PureComponent {

	render() {
		return (
			<div>
        <h1>Hello</h1>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(HomePage)
