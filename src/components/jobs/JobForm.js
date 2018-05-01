import React, {PureComponent} from 'react'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'

export default class JobForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		const initialValues = this.props.initialValues || {}

		return (
			<form onSubmit={this.handleSubmit}>
        <TextField
          id="name"
          label="Company name"
          value={this.state.name || initialValues.name || ''}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          id="jobtitle"
          label="Jobtitle"
          value={this.state.jobtitle || initialValues.jobtitle || ''}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          id="email"
          label="Contact email"
          value={this.state.email || initialValues.email || ''}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          id="phone"
          label="Contact phone"
          value={this.state.phone || initialValues.phone || ''}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          id="city"
          label="City"
          value={this.state.city || initialValues.city || ''}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          id="link"
          label="Link"
          value={this.state.link || initialValues.link || ''}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          id="address"
          label="Address"
          multiline
          rows="2"
          value={this.state.address || initialValues.address || ''}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          id="zipcode"
          label="Zipcode"
          value={this.state.zipcode || initialValues.zipcode || ''}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          id="preferences"
          label="Preference"
          value={this.state.preferences || initialValues.preferences || ''}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
				<button type="submit">Save</button>
			</form>
		)
	}
}
