import React, { useEffect } from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogDetails from "@/components/blog-details";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";
// Utils
import { createClient } from 'contentful';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});



export async function getStaticPaths () {
  const res = await client.getEntries({
    content_type: "blog"
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.articleSlug }
    }
  })

  return {
    paths,
    fallback: false
  }
}



export async function getStaticProps ({ params }) {
  const { items } = await client.getEntries({
    content_type: "blog",
    'fields.slug': params.articleSlug

  });

  return {
    props: { article: items[0] }
  }
}




const BlogSinglePage = ({ article }) => {

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle={ article.fields.articleTitle }>
          <HeaderOne />
          <PageBanner title={ article.fields.articleTitle } name="Blog" />
          <BlogDetails article={ article } />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogSinglePage;