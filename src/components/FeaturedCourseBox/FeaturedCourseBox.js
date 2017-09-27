import React from 'react';
import './FeaturedCourseBox.css';

const FeaturedCourseBox = ({
  imageCourse,
  title,
  provider,
  description,
  price,
  ...rest
}) => {
  return (
    <div className="featured-course" {...rest}>
      <div>
        <img src={imageCourse} alt={title} />
      </div>
      <div className="fc-detail">
        <div>
          <p className="fc-title">{title}</p>
          <p className="fc-provider">{provider}</p>
          <p className="fc-description">{description ? description : title}</p>
        </div>
        <hr />
        <button type="submit">{price ? price : '$ 0.00'}</button>
      </div>
    </div>
  );
};

export default FeaturedCourseBox;
