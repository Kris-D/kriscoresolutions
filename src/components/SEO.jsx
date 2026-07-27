import { useEffect } from 'react'

const DEFAULT_TITLE = 'Kriscore Solutions Limited | Enterprise Software & Digital Products'
const DEFAULT_DESC = 'Kriscore Solutions is a global technology company creating future-ready software solutions, enterprise web applications, mobile apps, and UI/UX designs for ambitious brands.'
const DEFAULT_KEYWORDS = 'Kriscore, Kriscore Solutions, software agency, software company, web development, mobile app development, UI UX design, PayEase, HomeLink, ClinicPlus'

export default function SEO({ title, description, path = '/', ogImage, keywords }) {
  useEffect(() => {
    const finalTitle = title || DEFAULT_TITLE
    const finalDesc = description || DEFAULT_DESC
    const finalKeywords = keywords || DEFAULT_KEYWORDS
    const fullUrl = `https://kriscoresolutions.vercel.app${path}`

    // 1. Update Document Title
    document.title = finalTitle

    // Helper to set meta tag
    const setMeta = (selector, nameType, nameVal, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(nameType, nameVal)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    // Helper to set link tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // 2. Primary Meta Tags
    setMeta('meta[name="description"]', 'name', 'description', finalDesc)
    setMeta('meta[name="keywords"]', 'name', 'keywords', finalKeywords)
    setMeta('meta[name="title"]', 'name', 'title', finalTitle)

    // 3. Open Graph Tags
    setMeta('meta[property="og:title"]', 'property', 'og:title', finalTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', finalDesc)
    setMeta('meta[property="og:url"]', 'property', 'og:url', fullUrl)
    if (ogImage) {
      setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
    }

    // 4. Twitter Card Tags
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', finalTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', finalDesc)
    setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', fullUrl)
    if (ogImage) {
      setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)
    }

    // 5. Canonical URL
    setLink('canonical', fullUrl)

  }, [title, description, path, ogImage, keywords])

  return null
}
