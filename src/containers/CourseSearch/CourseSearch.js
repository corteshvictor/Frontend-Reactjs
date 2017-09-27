import React, { Component } from 'react';
import axios from 'axios';

import { CourseSearch as CourseSearchComponent } from '../../components';

class CourseSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredCourses: [],
      courses: {},
      query: ''
    };

    this.searchCourses = this.searchCourses.bind(this);
  }

  componentDidMount() {
    this.getFeaturedCourses();
    this.getCourses();
  }

  getFeaturedCourses() {
    axios
      .get(
        `https://api.cebroker.com/v2/featuredCoursesProfession?profession=36`
      )
      .then(result => {
        this.setState({
          featuredCourses: result.data
        });
      })
      .catch(err => {
        this.setState({
          featuredCourses: []
        });
      });
  }

  getCourses() {
    axios
      .get(
        `https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${this
          .state.query}`
      )
      .then(result => {
        this.setState({
          courses: result.data
        });
      })
      .catch(err => {
        this.setState({
          courses: {}
        });
      });
  }

  searchCourses(query) {
    this.setState({ query }, this.getCourses);
  }
  render() {
    const { featuredCourses, courses } = this.state;
    return (
      <CourseSearchComponent
        featuredCourses={featuredCourses}
        courses={courses}
        searchCourses={this.searchCourses}
      />
    );
  }
}

export default CourseSearch;
