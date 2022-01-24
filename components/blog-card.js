import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const BlogCard = ({ article }) => {


  if (!article) return null;

  const { articleTitle, articleSlug, articleThumbnail } = article.fields;

  return (

    <div className="latestBlogItem">
      <div className="lbi_thumb">
        <Image
          src={ 'https:' + articleThumbnail.fields.file.url }
          alt={ articleTitle }
          width={ articleThumbnail.fields.file.details.image.width }
          height={ articleThumbnail.fields.file.details.image.height }
        />
      </div>
      <div className="lbi_details">
        <h2>
          <Link href={ '/blog/' + articleSlug }>
            <a>{ articleTitle }</a>
          </Link>
        </h2>
        <Link href={ '/blog/' + articleSlug }>
          <a className="learnM">Learn More</a>
        </Link>
      </div>
    </div>
  );



};

export default BlogCard;
