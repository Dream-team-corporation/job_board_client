import {FETCH_ALL_JOBS} from '../actions/jobs'

const jobs = [
  {
    id: 1,
    name: 'Hallo Company',
    contact_email: 'luca@donato.com',
  },
  {
    id: 2,
    name: 'Goodby Company',
    contact_email: 'billy@schrammen.com',
  }
]

export default function (state = jobs, {type, payload}) {
	switch (type) {
		case FETCH_ALL_JOBS:
			return payload
		default:
      return state
	}
}
