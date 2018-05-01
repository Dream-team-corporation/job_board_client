import {FETCH_JOB,ADD_JOB,UPDATE_JOB,DELETE_JOB} from '../actions/jobs'

export default function (state = {}, {type, payload}) {
	switch (type) {
		case FETCH_JOB:
			return payload
    case ADD_JOB:
      return payload
    case UPDATE_JOB:
      return payload
    case DELETE_JOB:
      return payload
		default:
      return state
	}
}
