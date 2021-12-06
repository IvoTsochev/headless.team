// Utils
import React from "react";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import { POSTS_API_URL } from "lib/constants";
// Components
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogDetails from "@/components/blog-details";
import HeaderOne from "@/components/header-one";



const BlogSinglePage = (props) => {

  let singlePost = props.data;
  console.log(singlePost);

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog Details Page">
          <HeaderOne />
          <PageBanner title={ singlePost.title.rendered } name="Blog" />
          <BlogDetails postData={ singlePost } title={ singlePost.title.rendered } content={ singlePost.content.rendered } featuredImage={ singlePost.featured_media_src_url } />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

// fetch single post data from Wordpress API
BlogSinglePage.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${POSTS_API_URL}/${id}`);
  const data = await res.json();
  return {
    data: data,
  };
};



// export async function getStaticProps ({ params }) {
//   const res = await axios.get(`${POSTS_API_URL}/${params.id}`);
//   const post = await res.data;
//   const featuredImg = await getFeaturedImage(post.featured_media);
//   const author = await getAuthor(post.author);
//   return {
//     props: { title: post.title.rendered, content: post.content.rendered, featuredImg, author, date: post.date },
//   };
// }



export default BlogSinglePage;
