import React from 'react'
import { getByPublicNews } from '../../_actions/getByPublicNews';
type Props = {
  params: Promise<{
    id: string;
  }>;
};
const NewsById = async({params}:Props) => {
   const {id} =await params
   const post =await getByPublicNews(id)
   if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold">
          News not found
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold">
        {post.title}
      </h1>

      <p className="mt-4 text-muted-foreground">
        {post.content}
      </p>

      <p className="mt-6">
        Author: {post.author.name}
      </p>
    </div>
  );
};

export default NewsById;