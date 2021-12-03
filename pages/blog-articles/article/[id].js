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



const BlogSinglePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog Details Page">
          <HeaderOne />
          <PageBanner title="Blog Details" name="Blog" />
          <BlogDetails />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
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
