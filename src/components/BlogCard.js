import React from "react";
import { Link } from "react-router-dom";

const BlogCart = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          The href attribute requires a valid value to be accessible. Provide a
          v alid, navigable address as the href value.
        </p>
        <Link to="" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCart;
