import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Emerson Day</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square  rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Emerson. I make websites.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am a full-stack web developer and I love building modern web
                applications using React, Node, and TypeScript. I also have
                extensive experience with Next.js and Tailwind, two popular
                frameworks in the web development community.
              </p>
              <p>
                In addition to my technical skills, I have a certificate in
                professional coding from M.I.T. and a bachelor&apos;s degree
                from Penn State University. These credentials, combined with my
                love for technology and computers, have led me to pursue a
                career in software engineering.
              </p>
              <p>
                When I&apos;m not programming, I love to explore the outdoors. I
                am an avid hiker and traveler, and I have visited dozens
                national parks. I try to stay active and enjoy surfing and
                snowboarding in my free time.
              </p>
              <p>
                Before pursuing software engineering, I had a successful career
                as a recording and mixing engineer in Hollywood. This background
                has given me a unique perspective on problem-solving,
                innovation, and collaboration, which I bring to every project.
              </p>
              <p>
                My creativity and technical expertise make me a valuable asset
                to any web development team. If you&apos;re looking for a
                professional web developer with a passion for building
                cutting-edge applications, feel free to get in touch with me. I
                would love to learn more about your project and see how I can
                help.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.twitter.com/emers0n"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/emerson.day"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="http://www.github.com/emday4prez"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="http://www.linkedin.com/in/emerson-day"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Connect on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:emerson.day@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                emerson.day@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
