import { Post } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, CalendarDays, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


type PublicNewsListProps = {
  posts: Post[];
};

export function PublicNewsList({ posts }: PublicNewsListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={`/news/${post.id}`} >
          <Card

            className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.thumbnail}
                alt={post.title}
                unoptimized
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Premium Badge */}
              {post.isPremium && (
                <Badge className="absolute right-3 top-3">
                  Premium
                </Badge>
              )}
            </div>

            <CardHeader className="space-y-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h2 className="line-clamp-2 text-xl font-semibold transition-colors group-hover:text-primary">
                {post.title}
              </h2>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Content */}
              <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                {post.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />

                <span className="font-medium">
                  {post.author.name}
                </span>
              </div>

              {/* Meta Information */}
              <div className="flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{post.views} views</span>
                </div>

                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />

                  <span>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}