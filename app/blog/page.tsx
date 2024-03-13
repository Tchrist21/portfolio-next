
import { posts } from '@/velite';
import { PostItem } from '@/components/post-item';
import { sortPosts } from '@/lib/utils';
import "@/styles/mdx.css"
import { QueryPagination } from '@/components/query.pagination';

const POSTs_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default async function BlogPage({searchParams}: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  const totalPages = Math.ceil(sortedPosts.length / POSTs_PER_PAGE)

  const displayPosts = sortedPosts.slice(
    POSTs_PER_PAGE * (currentPage -1),
    POSTs_PER_PAGE * currentPage
  )

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between ">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground ">
            My take on the latest lesbian books.
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, date, title, description } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>nothing to see here yet</p>
      )}
      <QueryPagination totalPages={totalPages} className="justify-end mt-4" />
    </div>
  );
}
