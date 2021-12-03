import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "@/components/blog-card";
import Paginations from "@/components/paginations";
import { BlogTwoData } from "@/data";
import { getAllPostsFromServer } from '../lib/utils';


const BlogTwo = () => {

  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      setPosts(postsFromServer);
    }
    return () => (mounted = false);
  }, []);


  return (
    <section className="commonSection blogPage">
      <Container>
        <Row>
          {/* { BlogTwoData.map((post, index) => {
            return 0 === index || 0 === index % 5 ? (
              <Col lg={ 8 } md={ 6 } sm={ 12 } key={ index }>
                <BlogCard data={ post } />
              </Col>
            ) : (
              <Col lg={ 4 } md={ 6 } sm={ 12 } key={ index }>
                <BlogCard data={ post } />
              </Col>
            );
          }) } */}
          {
            posts && posts.map((post, index) => {
              return 0 === index || 0 === index % 5 ? (
                <Col lg={ 8 } md={ 6 } sm={ 12 } key={ index }>
                  <BlogCard data={ post } />
                </Col>
              ) : (
                <Col lg={ 4 } md={ 6 } sm={ 12 } key={ index }>
                  <BlogCard data={ post } />
                </Col>
              )
            }

            ) }

        </Row>
        <Paginations />
      </Container>
    </section>
  );
};

export default BlogTwo;
