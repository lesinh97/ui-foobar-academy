import * as types from '../constants/action-types';

const initialState = {
  courses: [],
  bestCourses: [],
  instructors: [],
  bestInstructors: []
};
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOAD_COURSES:
      return {...state, 
        courses: [...action.payload]
      }
    case types.LOAD_BEST_COURSES:
      return {...state,
        bestCourses: [...action.payload]
      }
    case types.LOAD_INSTRUCTORS:
      return {...state, 
        instructors: [...action.payload]
      }
    case types.LOAD_BEST_INSTRUCTORS:
      return {...state, 
        bestInstructors: [...action.payload]
      }
    default:
      return {...state}
  }
};
export default rootReducer;
