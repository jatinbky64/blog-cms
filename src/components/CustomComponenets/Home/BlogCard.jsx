import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {ArrowUpIcon} from '@heroicons/react/solid'
import { Link } from "react-router-dom";
import { removeTimeFromCreatedAt } from "@/utils/removeTimeFromCreatedAt";
const BlogCard = ({ img, author, createdAt, category, title, description, blogUrl }) => {
  return (
    <Card className="w-full max-w-md overflow-hidden rounded-none">
      {/* Image with gradient overlay */}
      <div className="relative">
        <div style={{ width: '100%', height: '240px' }}>
          <head>
            <link rel="preload" href={img || 'noImage.webp'} as="image" />
          </head>
          <img
            src={img || 'noImage.webp'}
            alt="Card background"
            loading="eager"
            decoding="async"
            width="800"
            height="240"
            className="h-60 w-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 backdrop-blur-sm bg-[#ffffff7b] border-t border-gray-100">
          <div className="flex justify-between items-center text-white text-sm">
            <div>
              <p className="font-semibold">{author && author}</p>
              <p className="text-xs">{createdAt && removeTimeFromCreatedAt(createdAt)}</p>
            </div>
            <p className="text-xs font-semibold">{category && category}</p>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <CardContent className="p-4">
        <Link
          to={`blog/${blogUrl}`}
          className="text-lg font-semibold text-gray-900 hover:underline"
        >
          {title && title}
        </Link>
        <p className="mt-2 text-sm text-gray-600 line-clamp-4">
          {description && description}
        </p>

        {/* Read Post */}
        <div className="mt-4">
          <Link
            to={`blog/${blogUrl}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
          >
            <span>Read post</span>
            <span><ArrowUpIcon /></span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
export default BlogCard;
