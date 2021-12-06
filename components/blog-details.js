import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogSidebar from "@/components/blog-sidebar";
import SinglePostCard from "@/components/single-post-card";

const BlogDetails = ({ title, content, featuredImage, postData }) => {
  return (
    <section className="commonSection blogDetails">
      <Container>
        <Row>
          <Col lg={ 8 }>
            <SinglePostCard postData={ postData } title={ title } content={ content } featuredImage={ featuredImage } />
          </Col>
          <Col lg={ 4 } className="sidebar">
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
