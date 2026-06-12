import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { blogPosts, getBlogPostBySlug, getBlogPostSlugs } from '@/lib/blog'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return getBlogPostSlugs()
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug)
  if (!post) {
    return {
      title: 'Blog post not found | The AdMasons',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | The AdMasons Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | The AdMasons Blog`,
      description: post.excerpt,
      url: `https://www.admasons.com/blog/${post.slug}`,
      siteName: 'The AdMasons',
      type: 'article',
      images: [{ url: '/admasons-logo.jpeg', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | The AdMasons Blog`,
      description: post.excerpt,
      images: ['/admasons-logo.jpeg'],
    },
    alternates: {
      canonical: `https://www.admasons.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  return (
    <main className="bg-[#08080f] text-white min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-[960px] px-6">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
            >
              ← Back to Blog
            </Link>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.18)]">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="inline-flex rounded-full bg-[#F5C518]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F5C518]">
                {post.category}
              </span>
              <p className="text-sm text-white/50">{post.date} · {post.readTime}</p>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-8">{post.title}</h1>
            <div className="space-y-6 text-base leading-8 text-white/70">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[28px] border border-white/10 bg-[#111a31] p-10 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[#F5C518] mb-4">Ready to Scale Your Brand?</p>
            <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s build your next growth phase together.</h2>
            <a
              href="https://wa.me/917770969267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#F5C518] px-8 py-4 text-sm font-semibold text-[#1B2A4A] transition hover:bg-[#FFD84D]"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
