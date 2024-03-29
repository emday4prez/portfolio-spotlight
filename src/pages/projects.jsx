import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoMic from '@/images/logos/icon-microphone.svg'
import logoPhone from '@/images/logos/icon-phone-ring.svg'
import logoHeadphones from '@/images/logos/icon-headphones.svg'
import logoWifi from '@/images/logos/icon-wifi.svg'
import logoStore from '@/images/logos/icon-store.svg'
import logoBank from '@/images/logos/icon-library.svg'
import logoGithub from '@/images/logos/github.svg'
import logoCalendar from '../images/logos/icon-calendar-add.svg'

const projects = [
  {
    name: 'TypeScript Node Package Template',
    description:
      'A quickstart-friendly TypeScript template with comprehensive formatting, linting, releases, testing, and other great tooling built-in.',
    link: {
      href: 'https://github.com/JoshuaKGoldberg/template-typescript-node-package',
      label: 'template-typescript-node-package',
    },
    logo: logoGithub,
  },
  {
    name: "This One's On Us",
    description:
      'A modern, accessible, and responsive podcast website. Created using the RSS feed with Next.js and Tailwind.',
    link: {
      href: 'http://thisonesonus.vercel.app',
      label: "this-one's-on-us-podcast",
    },
    logo: logoMic,
  },
  {
    name: 'Restaurant Ordering',
    description:
      'A full stack web application for ordering food. Complete with authentication, content management, and Stripe checkout.',
    link: {
      href: 'https://emerson-day-restaurants-app.vercel.app/',
      label: 'restaurants-app',
    },
    logo: logoStore,
  },

  {
    name: 'Playlist Generator',
    description:
      'Generate Spotify playlists by entering a year and genre. Created with OAuth, Firebase and React.',
    link: {
      href: 'https://github.com/Scott-Coates-Org/solo-project-spotify-playlist-maker-emday4prez',
      label: 'spotify-playlist-maker',
    },
    logo: logoHeadphones,
  },
  {
    name: 'HomeSmart Landing Page',
    description: 'A Tailwind landing page for a Smart Home phone application.',
    link: {
      href: 'https://smart-home-site-landing-page.netlify.app/',
      label: 'smart-home-site-landing-page',
    },
    logo: logoWifi,
  },
  {
    name: 'TeleFrieden',
    description:
      'A telecommunications blog created with Gatsby, GraphQL, and styled-components.',
    link: {
      href: 'https://telefrieden.netlify.app/',
      label: 'telefrieden.netlify.app',
    },
    logo: logoPhone,
  },
  {
    name: 'FeBanc',
    description:
      'Frontend banking application. Implemented using React, Bootstrap, Context, and hosted on AWS.',
    link: {
      href: 'http://emerson-day-bankingapp.s3-website-us-west-1.amazonaws.com/',
      label: 'frontend-bank',
    },
    logo: logoBank,
  },
  {
    name: 'Full Stack To Do List',
    description:
      'Taking to do apps to the next level with authentication and PostgreSQL. Created with Next.js and Supabase.',
    link: {
      href: 'https://next-todo-inky.vercel.app/',
      label: 'next-supabase-todo',
    },
    logo: logoCalendar,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Emerson Day</title>
        <meta name="description" content="Things I’ve made." />
      </Head>
      <SimpleLayout
        title="Things I’ve made."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Each project showcases my skills and creativity, and highlights the technologies and techniques I used to build them. This page will give you a good sense of my capabilities and the types of projects I'm passionate about."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
