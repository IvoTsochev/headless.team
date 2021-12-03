import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAuthor, getFeaturedImage } from '../lib/utils';
import parse from 'html-react-parser';

const BlogCard = ({ data }) => {
  const [postImgAndAuthor, setPostImgAndAuthor] = useState({ featImgUrl: '', author: '' });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const author = getAuthor(data.author);
      const featuredImg = getFeaturedImage(data.featured_media);
      Promise.all([author, featuredImg]).then((res) => {
        setPostImgAndAuthor({
          author: res[0],
          featImgUrl: res[1],
        });
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="latestBlogItem">
      <div className="lbi_thumb">
        <img src={ postImgAndAuthor ? postImgAndAuthor.featImgUrl : '' } alt={ data.title.rendered } />
      </div>
      <div className="lbi_details">
        <Link href={ `/blog-articles/article/${data.id}` }>
          <a className="lbid_date">{ new Date(data.date).toDateString() }</a>
        </Link>
        <h2>
          <Link href={ `/blog-articles/article/${data.id}` }>
            <a>{ data.title.rendered }</a>
          </Link>
        </h2>
        <Link href={ `/blog-articles/article/${data.id}` }>
          <a className="learnM">Learn More</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
