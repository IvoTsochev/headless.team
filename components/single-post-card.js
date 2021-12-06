import React, { Fragment } from "react";
import AuthorCard from "@/components/author-card";
import Comments from "@/components/comments";
import blogDetailsImage from "@/images/blog/7.jpg";

const SinglePostCard = ({ title, content, featuredImage, postData }) => {



  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_thumb">
          {/* <img src={ blogDetailsImage } alt="" /> */ }
          <img src={ featuredImage } alt="" />
        </div>
        <div className="blog_headings">
          <span className="blog_date">{ postData.date.split("T")[0] }</span>
          <h2>{ title }</h2>
          <p className="blog_metas">
            <a href="#">By IvoTsochev</a>
            {/* -<a href="#">30 Likes</a> */ }
            {/* -<a href="#">2 Comments</a> */ }
          </p>
        </div>
        <div className="blog_details" dangerouslySetInnerHTML={ { __html: content } }>
          {/* TODO tuka trqbva da ima content */ }

        </div>
        <div className="blog_tagitems">
          <span>Tags:</span>
          <a href="#">Business</a>, <a href="#">Agency</a>,{ " " }
          <a href="#">Digital</a>, <a href="#">Technology</a>
        </div>
        <AuthorCard />
        <Comments />
      </div>
    </Fragment>
  );
};

export default SinglePostCard;
