import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import {getPost} from '../service';
import { FeaturedPost} from '@/sections';


// export const revalidate = 60*5;

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog Post</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <FeaturedPost/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const posts = (await getPost()) || [];
return{
  props:{posts},
  revalidate = 60*5
}

}
