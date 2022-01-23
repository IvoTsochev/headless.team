import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paginations from "@/components/paginations";
import { BlogData } from "@/data";
import BlogCard from "@/components/blog-card";

const BlogOne = ({ data }) => {


  return (
    <section className="commonSection blogPage hui">
      <Container>

        <Row>
          { data.map((article) => (
            <Col lg={ 4 } sm={ 12 } md={ 6 } key={ article.sys.id }>
              <BlogCard article={ article } />
            </Col>
          )) }


        </Row>

        <Paginations />

      </Container>
    </section>
  );
};





export default BlogOne;
