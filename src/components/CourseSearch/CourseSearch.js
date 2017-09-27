import React, { Component } from 'react';

import { FeaturedCourseBox, CourseBox } from '../index';
import './CourseSearch.css';

class CourseSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  getFeaturedCourses() {
    const { featuredCourses } = this.props;

    return featuredCourses.map(featuredCourse => {
      const {
        course: {
          id,
          featuredBanner,
          name: courseName,
          description,
          price,
          provider: { name: providerName }
        }
      } = featuredCourse.coursePublication;

      return (
        <FeaturedCourseBox
          imageCourse={`https://storage.cebroker.com/CEBroker/${featuredBanner}`}
          title={courseName}
          provider={providerName}
          description={description}
          price={price}
          key={id}
        />
      );
    });
  }

  getCourses() {
    const { courses: { items = [] } } = this.props;

    return items.map(course => {
      const {
        price,
        isFree,
        hasPrice,
        course: {
          id,
          name: courseName,
          provider: { name: providerName },
          deliveryMethod: { description }
        }
      } = course;

      return (
        <CourseBox
          title={courseName}
          provider={providerName}
          description={description}
          price={isFree ? 'Free' : hasPrice ? price : '$ 0.00'}
          key={id}
        />
      );
    });
  }

  handleOnChange(event) {
    this.setState({ query: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { searchCourses } = this.props;
    if (searchCourses) searchCourses(this.state.query);
  }
  render() {
    const { courses: { totalItems = 0 }, query } = this.props;
    return (
      <div>
        <div className="banner" />
        <div className="banner-filter" />
        <div className="course-search">
          <form onSubmit={this.handleOnSubmit}>
            <div className="container-search">
              <h1>Course Search</h1>
              <div className="input-button">
                <input
                  type="search"
                  className="input-search"
                  placeholder="Search courses and providers..."
                  onChange={this.handleOnChange}
                  value={query}
                />
                <button className="button-search">
                  <i className="fa fa-search" />
                </button>
              </div>
              <h2>Florida | Registered Nurse Florida</h2>
            </div>
          </form>
        </div>
        <div className="course-search-body">
          <div className="featured-courses-section">
            <h3>Featured Courses</h3>
            <div className="fc-list">{this.getFeaturedCourses()}</div>
          </div>
          <div className="courses-section">
            <h3>
              <span>{totalItems}</span> Results
            </h3>
            <div className="c-list">{this.getCourses()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseSearch;
