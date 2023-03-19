import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Emerson Day</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, and other things I recommend."
        intro="I've come to rely on a set of tried-and-true tools that have helped me streamline my workflow, save time, and produce high-quality work. Here is a list of my top tools for web development."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, Intel i7, 16GB RAM (2013)">
              I have had this laptop for 10 years and it still works great. The
              truth is, no one needs a fancy computer for web dev.
            </Tool>

            <Tool title="Microsoft Sculpt Ergonomic Keyboard">
              A decent keyboard with a split left and right design. I find that
              split keyboards greatly reduce the amount of hand and wrist pain.
            </Tool>
            <Tool title="Logitec M170 Mouse">
              I`ve had this mouse for over 10 years and there is not sign of it
              slowing down.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Pretty much the industry standard IDE. I find the Stripe and
              Docker extensions to be particularly useful.
            </Tool>
            <Tool title="TypeScript">
              TypeScript is an open-source programming language that is a
              superset of JavaScript. It adds optional static typing and other
              features to JavaScript, making it easier to write and maintain
              large-scale applications.
            </Tool>
            <Tool title="React">
              A JavaScript library used for building user interfaces. It allows
              developers to create reusable UI components and build complex UIs
              for web and mobile applications. React uses a declarative
              programming style, making it easier to understand and modify code.
              It also supports server-side rendering and has a large and active
              community of developers.
            </Tool>
            <Tool title="Node">
              Node.js is an open-source, cross-platform JavaScript runtime
              environment that allows developers to execute JavaScript code
              outside of a web browser. It uses an event-driven, non-blocking
              I/O model that makes it lightweight and efficient, making it ideal
              for building scalable network applications. Node.js also has a
              large and active community of developers and a vast library of
              modules and packages available through npm.
            </Tool>
            <Tool title="Tailwind">
              Tailwind is a utility-first CSS framework that provides a set of
              pre-defined CSS classes that can be used to style HTML elements.
              It allows developers to quickly create responsive and customizable
              user interfaces without writing custom CSS. Tailwind provides a
              wide range of classes for common styling needs such as typography,
              layout, and spacing, and can be customized to match a specific
              design system.
            </Tool>
            <Tool title="Next.js">
              Next.js is an open-source React framework used for building
              server-side rendered (SSR) web applications. It allows developers
              to create dynamic and SEO-friendly web applications using React
              and Node.js. Next.js provides many features such as automatic code
              splitting, server-side rendering, static file serving, and more,
              out of the box. It also has a built-in development server and can
              be easily deployed to various hosting providers.
            </Tool>
            <Tool title="Supabase">
              A great alternative to Firebase. It provides developers with a set
              of tools and services to quickly build backend functionality for
              web and mobile applications. Supabase offers a PostgreSQL database
              with a built-in API, authentication, and authorization services,
              as well as real-time subscriptions, file storage, and more. It
              also has a flexible architecture that allows developers to easily
              customize and extend its functionality.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Figma is an amazing fully capable design tool and it`s little
              cousin FigJam is a great collaborative web application.
            </Tool>
            <Tool title="Adobe XD">
              XD is and excellent design tool that I find is better than others
              for building interactive prototypes.`
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
