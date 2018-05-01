import * as request from 'superagent'
import {baseUrl} from '../constants'

export const FETCH_JOB = 'FETCH_JOB'
export const FETCH_ALL_JOBS = 'FETCH_ALL_JOBS'
export const ADD_JOB = 'ADD_JOB'
export const UPDATE_JOB = 'UPDATE_JOB'
export const DELETE_JOB = 'DELETE_JOB'

export const fetchJob = (jobId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/jobs/${jobId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: FETCH_JOB,
        payload: result.body
      })
    })
}

export const fetchAllJobs = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/jobs`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: FETCH_ALL_JOBS,
        payload: result.body
      })
    })
}

export const addJob = (job) => (dispatch, getState) => {
const state = getState()
const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/jobs`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({job})
    .then(result => {
      dispatch({
        type: ADD_JOB,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const updateJob = (job) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/jobs/${job.id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({job})
    .then(result => {
      dispatch({
        type: UPDATE_JOB,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const deleteJob = (jobId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .delete(`${baseUrl}/jobs/${jobId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: DELETE_JOB,
        payload: result.body
      })
    })
}
