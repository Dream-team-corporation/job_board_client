import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllJobs,addJob,deleteJob} from '../../actions/jobs'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import JobForm from './JobForm'
import Tooltip from 'material-ui/Tooltip'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'

class JobPage extends PureComponent {
  state = {
    edit: false,
    update: false
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  }

  toggleUpdate = () => {
    this.setState({
      update: !this.state.update
    });
  }

  componentWillMount() {
    this.props.fetchAllJobs()
  }

  deleteJob = (jobId) => {
    this.props.deleteJob(jobId)
  }

  addJob = (job) => {
    this.props.addJob(job)
    this.toggleEdit()
  }

  updateJob = (job) => {
    this.props.updateJob(job)
    this.toggleUpdate()
  }

  renderJob = (job) => {
    return (
      <Card key={job.id}>
        <Link to={`/jobs/${job.id}`}>{job.name}</Link>
        <p>{job.contact_email}</p>
        <GridListTileBar title={ job.job_title } subtitle={job.city} />
      </Card>
  )}


  render() {
    const jobs = this.props.jobs || []

		return (
			<div>
        <h2>Jobs</h2>
        {jobs.map(job => this.renderJob(job))}
        <br />
        { this.state.edit && <JobForm onSubmit={this.addJob} />}
        <Tooltip id="tooltip-fab" title="Add Job">
          <Button size="medium" onClick={this.toggleEdit} variant="fab" color="primary" aria-label="add" alt="Add Job">
            +
          </Button>
        </Tooltip>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		jobs: state.jobs
	}
}

export default connect(mapStateToProps, {fetchAllJobs, addJob, deleteJob})(JobPage)
