import Link from 'next/link'
import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { blogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Insights & Resources — The AdMasons',
  description:
    'Marketing strategies, case studies, and growth frameworks from The AdMasons team. Explore practical insights for D2C, marketplace, and performance marketing.',
  openGraph: {
    title: 'Blog | Insights & Resources — The AdMasons',
    description:
      'Marketing strategies, case studies, and growth frameworks from The AdMasons team. Explore practical insights for D2C, marketplace, and performance marketing.',
    url: 'https://www.admasons.com/blog',
    siteName: 'The AdMasons',
    type: 'website',
    images: [{ url: '/admasons-logo.jpeg', width: 1200, height: 630, alt: 'The AdMasons Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Insights & Resources — The AdMasons',
    description:
      'Marketing strategies, case studies, and growth frameworks from The AdMasons team.',
    images: ['/admasons-logo.jpeg'],
  },
  alternates: {
    canonical: 'https://www.admasons.com/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="bg-[#08080f] text-white min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#F5C518] mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Insights & Resources</h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/65">
            Marketing strategies, case studies and growth frameworks from The AdMasons team.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_32px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#F5C518]/30"
              >
                <div className="mb-4 flex flex-col gap-3">
                  <span className="inline-flex rounded-full bg-[#F5C518]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F5C518]">
                    {post.category}
                  </span>
                  <p className="text-sm text-white/50">{post.date} · {post.readTime}</p>
                </div>
                <h2 className="text-2xl font-semibold leading-tight text-white mb-4">{post.title}</h2>
                <p className="text-sm leading-relaxed text-white/60 mb-8">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-between gap-2 rounded-full border border-[#F5C518]/15 bg-[#F5C518]/10 px-5 py-3 text-sm font-semibold text-[#F5C518] transition hover:bg-[#F5C518]/20"
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
