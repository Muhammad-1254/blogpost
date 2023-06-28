import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '@/service';
import Image from 'next/image';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPost(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPost(result));
    }
  }, [slug]);

  console.log(relatedPosts);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3
        className="text-xl mb-8 font-semibold border-b pb-4
        
        "
      >
        {slug ? 'Related Posts' : 'Recent Post'}
      </h3>

      {relatedPosts.map((post) => (
        <div
          key={post.title}
          className="flex items-center w-full 
          mb-4"
        >
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height={60}
              width={60}
              className="align-middle rounded-md"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-xs">
              {moment(post.createdAt).format('DD MMM, YY')}
            </p>
            <Link
              key={post.title}
              href={`/post/${post.slug}`}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
