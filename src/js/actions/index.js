import * as types from '../constants/action-types';

export const loadCourses = payload => {
  return { type: types.LOAD_COURSES, payload }
}

export const loadSingleCourse = payload => {
  return { type: types.LOAD_SINGLE_COURSE, payload }
}

export const loadBestCourses = payload => {
  return { type: types.LOAD_BEST_COURSES, payload }
}

export const loadInstructors = payload => {
  return { type: types.LOAD_INSTRUCTORS, payload}
}

export const loadBestInstructors = payload => {
  return { type: types.LOAD_BEST_INSTRUCTORS, payload}
}
