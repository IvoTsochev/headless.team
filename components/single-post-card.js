import React, { Fragment } from "react";
import AuthorCard from "@/components/author-card";
import Comments from "@/components/comments";
import blogDetailsImage from "@/images/blog/7.jpg";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const SinglePostCard = ({ article }) => {

  console.log(article);

  const {
    articleTitle,
    articleFeaturedImage,
    articleTags,
    articleContent
  } = article.fields;

  const { createdAt } = article.sys;


  console.log(articleTags);

  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_thumb">
          {/* <img src={ blogDetailsImage } alt="" /> */ }
          <Image
            src={ 'https:' + articleFeaturedImage.fields.file.url }
            width={ articleFeaturedImage.fields.file.details.image.width }
            height={ articleFeaturedImage.fields.file.details.image.height }
          />
        </div>
        <div className="blog_headings">
          <span className="blog_date">{ createdAt.split("T")[0] }</span>
          <h2>{ articleTitle }</h2>
          <p className="blog_metas">
            <a href="#">By layerdrops</a>-<a href="#">30 Likes</a>-
            <a href="#">2 Comments</a>
          </p>
        </div>
        <div className="blog_details">


          { documentToReactComponents(articleContent) }



        </div>
        <div className="blog_tagitems">
          <span>Tags:</span>
          {
            articleTags.map(tag => {
              return (
                <a href="#">
                  ${ tag }
                </a>
              )
            })
          }

        </div>
        <AuthorCard />
        <Comments />
      </div>
    </Fragment>
  );
};

export default SinglePostCard;
