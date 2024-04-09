import { Link } from "react-router-dom";

const featuredPost = {
  id: 1,
  title: "We’re incredibly proud to announce we have secured $75m in Series B",
  href: "#",
  description:
    "Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  author: {
    name: "Michael Foster",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};
const posts = [
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 5,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Resources() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
          <time
            dateTime={featuredPost.datetime}
            className="block text-sm leading-6 text-gray-300"
          >
            {featuredPost.date}
          </time>
          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {featuredPost.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            {featuredPost.description}
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <Link
                to={featuredPost.href}
                className="text-sm font-semibold leading-6 text-indigo-600"
                aria-describedby="featured-post"
              >
                Continue reading <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="flex lg:border-t lg:border-white lg:pt-8">
              <Link
                to={featuredPost.author.href}
                className="flex gap-x-2.5 text-sm font-semibold leading-6 text-white"
              >
                <img
                  src={featuredPost.author.imageUrl}
                  alt=""
                  className="h-6 w-6 flex-none rounded-full bg-gray-50"
                />
                {featuredPost.author.name}
              </Link>
            </div>
          </div>
        </article>
        <div className="mx-auto w-full max-w-2xl border-t border-white pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-white">
            {posts.map((post) => (
              <article key={post.id} className="py-12">
                <div className="group relative max-w-xl">
                  <time
                    dateTime={post.datetime}
                    className="block text-sm leading-6 text-gray-300"
                  >
                    {post.date}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold text-white group-hover:text-gray-300">
                    <Link to={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {post.description}
                  </p>
                </div>
                <div className="mt-4 flex">
                  <Link
                    to={post.author.href}
                    className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-white"
                  >
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-gray-50"
                    />
                    {post.author.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
