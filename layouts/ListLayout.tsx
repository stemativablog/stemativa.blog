import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { ComponentProps, useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { PostFrontMatter } from 'types/PostFrontMatter'
import Image from 'next/image'
interface Props {
  posts: PostFrontMatter[]
  title: string
  initialDisplayPosts?: PostFrontMatter[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-brandTitle dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Pesquisar"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Pesquisar"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {!filteredBlogPosts.length && 'Nenhum post encontrado :('}

          {displayPosts.map((frontMatter) => {
            const { slug, date, title, draft, summary, tags, images } = frontMatter

            const postStatus = draft

            if (!postStatus) {
              return (
                <div
                  key={slug}
                  className="bg-day dark:bg-night group w-full bg-opacity-50 dark:bg-opacity-50"
                >
                  <Link
                    className="c-card block transform overflow-hidden rounded-lg bg-transparent transition duration-500 group-hover:scale-105"
                    href={`/blog/${slug}`}
                  >
                    <div className="relative max-h-4 overflow-hidden rounded-lg pb-60">
                      <figure>
                        <Image
                          alt={title}
                          layout="fill"
                          placeholder="blur"
                          blurDataURL={`${images}`}
                          src={`${images}`}
                          className="absolute inset-0 h-full w-full transform object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100 dark:opacity-70"
                        />
                      </figure>
                    </div>
                    <div className="py-4">
                      <span className="inline-flex w-full items-center justify-between">
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <time
                          className="text-sm font-semibold text-brandSubTitle dark:text-gray-300"
                          dateTime={date}
                        >
                          {formatDate(date)}
                        </time>
                      </span>
                      <h2 className="mt-2 mb-2 font-bold text-brandTitle dark:text-white md:text-xl">
                        {title}
                      </h2>
                      <p className="text-sm tracking-wider text-brandSubTitle dark:text-gray-300">
                        {summary}
                      </p>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </div>
        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!filteredBlogPosts.length && 'Nenhum post encontrado :('}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, images, status } = frontMatter

            const postActive = status

            if (postActive) {
              return (
                <>
                  <Link href={`/blog/${slug}`}>
                    <li key={slug} className="py-5">
                      <article className="gap-4 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <div className="mt-2 grid-flow-row">
                          <figure>
                            <img className="rounded-lg" alt={title} src={`${images}`} />
                          </figure>
                        </div>
                        <div className="space-y-3 xl:col-span-3">
                          <div>
                            <h3 className="text-brand text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-brandTitle dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h3>
                            <time
                              className="text-sm font-semibold text-brandSubTitle dark:text-gray-300"
                              dateTime={date}
                            >
                              {formatDate(date)}
                            </time>
                            <div className="flex flex-wrap pt-2">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </article>
                    </li>
                  </Link>
                </>
              )
            }
          })}
        </ul> */}
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
