import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAllJobs} from '../../actions/jobs'

class HomePage extends PureComponent {

  componentWillMount = () => {
    this.props.fetchAllJobs()
  }

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

export default connect(mapStateToProps, {fetchAllJobs})(HomePage)
