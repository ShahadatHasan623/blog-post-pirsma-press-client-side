import { getByPublicNews } from "../../_actions/getByPublicNews";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Eye, User } from "lucide-react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const NewsById = async ({ params }: Props) => {
  const { id } = await params;

  const post = await getByPublicNews(id);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold">News not found</h1>
        <p className="mt-2 text-muted-foreground">
          The news you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Card className="overflow-hidden">
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            unoptimized
            className="object-cover"
          />

          {post.isPremium && (
            <Badge className="absolute right-4 top-4">
              Premium
            </Badge>
          )}
        </div>

        <CardHeader className="space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {post.title}
          </h1>

          {/* Author + Date */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{post.views} views</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Full Content */}
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <p className="whitespace-pre-line leading-8">
              {post.content}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsById;