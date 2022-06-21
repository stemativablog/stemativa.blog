import React from 'react'

export default function SectionHero() {
  return (
    <div className="sm:py-19 hero mb-12 py-10 dark:bg-transparent sm:space-y-5">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className=" text-5xl font-bold tracking-tight text-brandTitle dark:text-gray-100 sm:text-4xl sm:leading-8 md:text-6xl">
            lorem ipsum dolor sit amet <span className="font-bold text-primary-500">deleniti</span>{' '}
            adipiscing elit <span className="waving-hand">👋🏻</span>
          </h1>
          <p className="mx-auto max-w-2xl py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In eaque aut repudiandae et a id nisi.
          </p>
          <a role="button" className="btn btn-primary mt-5 normal-case">
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}
