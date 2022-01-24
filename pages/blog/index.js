import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogOne from "@/components/blog-one";
import SearchContextProvider from "context/search-context";
import MenuContextProvider from "context/menu-context";
import HeaderOne from "@/components/header-one";
// import HeaderTwo from "@/components/header-two";
// Utils
import { createClient } from "contentful";

const BlogPage = ({ articles }) => {

  console.log(articles);

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog 01 Page">

          <HeaderOne />

          <PageBanner title="Blog 01яяяяяяяяяяяяя" name="Blog" />
          <BlogOne data={ articles } />

          <Footer />

        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};



export async function getStaticProps () {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "blog"
  });

  return {
    props: {
      articles: res.items
    }
  }
}


export default BlogPage;
