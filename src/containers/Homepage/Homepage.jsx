import React, {Component} from 'react';
import {
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';

// dinamically create app routes
import appRoutes from '../../routes/Homepage.jsx';

import asyncComponent from '../HOC/asyncComponent';

const AsyncHomePage = asyncComponent(() => {
    return import('../../views/Homepage/Homepage');
});
const AsyncCoursePage = asyncComponent(() => {
  return import('../../views/Homepage/CoursesPage/CoursesPage');
});
const AsyncTeacherPage = asyncComponent(() => {
  return import('../../views/Homepage/InstructorsPage/InstructorsPage');
});
const AsyncBlogPage = asyncComponent(() => {
    return import('../../views/Homepage/BlogPage/BlogPage');
});
const AsyncCourseDetailPage = asyncComponent(() => {
    return import('../../views/Homepage/CoursesPage/CourseDetail/CourseDetail');
});
class Homepage extends Component{
    constructor(props) {
      super(props);
    }
    switchRoutes = () => {
        let route = (
            <Switch>
                <Route path="/homepage" component={AsyncHomePage} />
                <Route path="/courses" component={AsyncCoursePage} />
                <Route path="/instructors" component={AsyncTeacherPage} />
                <Route path="/blogs" component={AsyncBlogPage} />
                <Route path="/course_detail" component={AsyncCourseDetailPage} />
                <Redirect exact from="/" to="/homepage" />
            </Switch>
        )
        return route;
    }
    render(){
        return this.switchRoutes();
    }
}
export default Homepage;
