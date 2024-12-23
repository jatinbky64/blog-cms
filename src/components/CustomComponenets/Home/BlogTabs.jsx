import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import BlogCard from "./BlogCard";
import useFetch from "@/hooks/useFetch";
import SkeltonLoading from "../SkeltonLoding";
import { Skeleton } from "@/components/ui/skeleton";

export function BlogTabs() {
  // Fetch blogs
  const { data: blogsData, loading: blogsLoading, error: blogsError } = useFetch(
    "https://pretty-splendor-eb24c6e22f.strapiapp.com/api/blogs?populate=*"
  );

  // Fetch Categories
  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch("https://pretty-splendor-eb24c6e22f.strapiapp.com/api/categories?populate=*");

  return (
    <Tabs defaultValue="View all" className="w-full">
      <TabsList className="w-full flex items-end justify-start gap-10 bg-transparent border-b rounded-none p-0 mb-14">
        {categoriesLoading && (
          <div className="flex gap-10 mb-2">
            <Skeleton className="h-8 w-40 rounded-lg" />
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-8 w-40" />
          </div>
        )}

        {/* View all tabs */}
        <TabsTrigger
          value="View all"
          className="disabled:opacity-100 data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none shadow-none p-0 py-1 border-b-2 border-transparent data-[state=active]:border-black font-semibold rounded-none"
        >
          <span className="cursor-pointer w-full h-full capitalize">View all</span>
        </TabsTrigger>

        {categoriesData &&
          categoriesData.data.map((category) => (
            <TabsTrigger
              key={category?.id}
              value={category?.category_name}
              className="disabled:opacity-100 data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none shadow-none p-0 py-1 border-b-2 border-transparent data-[state=active]:border-black font-semibold rounded-none capitalize"
            >
              <span className="w-full h-full cursor-pointer">{category?.category_name}</span>
            </TabsTrigger>
          ))}
      </TabsList>

      {/* View all tabs content */}
      <TabsContent value="View all">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {blogsLoading && (
            <>
              <SkeltonLoading />
              <SkeltonLoading />
              <SkeltonLoading />
            </>
          )}

          {blogsError && (
            <p className="col-span-full text-center text-red-500">
              Failed to load blogs. Please try again later.
            </p>
          )}

          {blogsData && blogsData.data.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No blogs available at the moment.
            </p>
          )}

          {blogsData &&
            blogsData.data.map((res) => (
              <BlogCard
                key={res.id}
                img={res?.featuredimage?.url}
                author={res?.blogauthor}
                createdAt={res?.createdAt}
                category={res?.categories[0]?.category_name}
                title={res?.blogtitle}
                description={res?.blogcontent[0]?.children[0]?.text}
                blogUrl={res.id}
              />
            ))}
        </div>
      </TabsContent>

      {/* Tab content specific to categories */}
      {categoriesData &&
        categoriesData.data.map((category) => (
          <TabsContent key={category?.id} value={category?.category_name}>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {blogsLoading && (
                <>
                  <SkeltonLoading />
                  <SkeltonLoading />
                  <SkeltonLoading />
                </>
              )}

              {blogsError && (
                <p className="col-span-full text-center text-red-500">
                  Failed to load blogs. Please try again later.
                </p>
              )}

              {blogsData &&
                blogsData.data.filter((res) =>
                  res?.categories.some(
                    (cat) => cat.category_name === category?.category_name
                  )
                ).length === 0 && (
                  <p className="col-span-full text-center text-2xl font-medium text-primary opacity-50">
                    No blogs available for {category?.category_name}.
                  </p>
                )}

              {blogsData &&
                blogsData.data
                  .filter((res) =>
                    res?.categories.some(
                      (cat) => cat.category_name === category?.category_name
                    )
                  )
                  .map((res) => (
                    <BlogCard
                      key={res.id}
                      img={res?.featuredimage?.url}
                      author={res?.blogauthor}
                      createdAt={res?.createdAt}
                      category={res?.categories[0]?.category_name}
                      title={res?.blogtitle}
                      description={res?.blogcontent[0]?.children[0]?.text}
                      blogUrl={res.id}
                    />
                  ))}
            </div>
          </TabsContent>
        ))}
    </Tabs>
  );
}
