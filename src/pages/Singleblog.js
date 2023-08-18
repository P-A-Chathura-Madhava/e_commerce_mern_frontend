import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from '../images/blog-1.jpg';
import Container from "../components/Container";

const Singleblog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      {/* <div className="blog-wrapper home-wrapper-2 py-5"> */}
      <Container clas1="blog-wrapper home-wrapper-2 py-5">
        {/* <div className="container-xxl"> */}
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go Back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src={blog}
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Module not found: Error: Cannot find file: 'Singleblog.js'
                  does not match the corresponding name on disk:
                  '.\src\pages\SingleBlo g.js'
                </p>
              </div>
            </div>
          </div>
        {/* </div> */}
        </Container>
      {/* </div> */}
    </>
  );
};

export default Singleblog;
