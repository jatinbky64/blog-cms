import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import BlogCard from "./BlogCard"
export function BlogTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="w-full flex items-end justify-start gap-10 bg-transparent border-b rounded-none p-0 mb-14">
        <TabsTrigger
          value="account"
          className='disabled:pointer-events-auto disabled:opacity-100 data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none shadow-none p-0 py-1 border-b-2 border-transparent data-[state=active]:border-black font-semibold rounded-none'>View all</TabsTrigger>
        <TabsTrigger
          value="password"
          className='disabled:pointer-events-auto disabled:opacity-100 data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none p-0 py-1 border-b-2 border-transparent data-[state=active]:border-black  font-semibold rounded-none'
        >Design</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
          <BlogCard
            img={'https://plus.unsplash.com/premium_photo-1664544228357-06ce9e98080e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'}
            author={'Allec gomes'}
            createdAt={'10/02/2022'}
            category={'Nature'}
            title={'A plan that is in the middle of a yellow sky'}
            description={'Amidst the golden hues of an endless yellow sky, a plan begins to take shape—a vision born of ambition and mystery. Hovering between the surreal and the inevitable, it waits in the quiet calm, where time feels suspended. Is it a dream, a destiny, or the calm before the storm? In this peculiar setting, possibilities unfold, and a single decision could change everything. The sky holds its breath, and so do you.'}
            blogUrl={'https://unsplash.com/'}
          />
          <BlogCard
            img={'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            author={'Florian klauer'}
            createdAt={'20/11/2024'}
            category={'Ecommerce'}
            title={'Black fayorit typewriter with printer paper'}
            description={'The black favorite typewriter, with its vintage charm and rhythmic keystrokes, sits gracefully atop a desk, accompanied by a fresh stack of printer paper. Its sleek black frame contrasts perfectly with the crisp white sheets, ready to be transformed into words, ideas, and stories. Each press of the key evokes a sense of nostalgia, bringing back the timeless art of writing by hand. A symbol of creativity and craftsmanship, this typewriter bridges the gap between old-world elegance and modern-day practicality, inviting inspiration to flow freely.'}
            blogUrl={'https://unsplash.com/'}
          />
          <BlogCard
            img={'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            author={'Artem sapegin'}
            createdAt={'28/06/2012'}
            category={'Technology'}
            title={'Mastering State Management in React with Redux Toolkit: A Comprehensive Guide'}
            description={"State management is a crucial aspect of building scalable and maintainable React applications. In this blog, we dive deep into using Redux Toolkit, a powerful and simplified toolset for managing state in your React apps. We’ll explore the core concepts of Redux, how Redux Toolkit streamlines the setup process, and practical examples of state management, including creating slices, dispatching actions, and handling asynchronous logic. Whether you're a React beginner or looking to enhance your state management skills, this guide will help you harness the full potential of Redux Toolkit for cleaner and more efficient code."}
            blogUrl={'https://unsplash.com/'}
          />
        </div>
      </TabsContent>
      <TabsContent value="password">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
          <BlogCard
            img={'https://plus.unsplash.com/premium_photo-1661679290109-770a3e282fa9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            author={'Getty images'}
            createdAt={'20/12/2012'}
            category={'Design'}
            title={'UIUX design with paper model'}
            description={'UI/UX design with a paper model brings a tangible and creative approach to user interface and experience design. By using physical paper prototypes, designers can sketch, cut, and arrange elements to visualize the flow and layout of a digital product. This hands-on method helps in the early stages of design to iterate quickly, gather feedback, and test ideas before moving on to digital wireframes or mockups. It fosters collaboration, creativity, and a deeper understanding of user interactions, ensuring the final product is both intuitive and visually appealing.'}
            blogUrl={'https://unsplash.com/'}
          />
          <BlogCard
            img={'https://plus.unsplash.com/premium_photo-1681488119350-181e2e143a33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D'}
            author={'Florian klauer'}
            createdAt={'18/09/2018'}
            category={'Design'}
            title={'Unlocking Creativity: The Art of Design'}
            description={"Design is more than just aesthetics; it’s about solving problems, communicating ideas, and creating memorable experiences. In this blog, we dive into the world of design, exploring the principles, trends, and tools that shape the industry. Whether you're a seasoned designer or just starting out, we’ll cover topics ranging from UI/UX design to branding, typography, color theory, and much more. Discover practical tips, inspiring projects, and insights to fuel your creativity and improve your design skills. Join us on a journey to understand the art of design and how it impacts the world around us"}
            blogUrl={'https://unsplash.com/'}
          />
          <BlogCard
            img={'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            author={'Spaker'}
            createdAt={'02/01/2016'}
            category={'Design'}
            title={'Transforming Spaces: The Art of Interior Design'}
            description={"Interior design goes beyond decorating a space – it's about creating environments that reflect personality, functionality, and beauty. In this blog, we explore the essential elements of interior design, from space planning and color palettes to furniture selection and lighting design. Whether you’re redesigning a single room or an entire home, we’ll provide expert tips, design trends, and practical advice to help you bring your vision to life. Discover how thoughtful design choices can transform any space into a place that’s both stylish and functional, making your home a true reflection of you."}
            blogUrl={'https://unsplash.com/'}
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}
