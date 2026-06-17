import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * SEO Component to dynamically update document title and metadata.
 * Can be used with translation keys (titleKey, descriptionKey) or static strings (title, description).
 */
function SEO({ title, description, titleKey, descriptionKey }) {
  const { t, i18n } = useTranslation()

  // Resolve values either from translation keys or from direct props
  const finalTitle = titleKey ? t(titleKey) : (title || t('hero.badge'))
  const finalDescription = descriptionKey ? t(descriptionKey) : (description || t('hero.subtitle'))

  useEffect(() => {
    // 1. Update browser tab title
    document.title = finalTitle

    // Helper function to safely set or create meta tags
    const setMetaTag = (selector, attribute, name, content) => {
      let element = document.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // 2. Update standard meta tags
    setMetaTag('meta[name="description"]', 'name', 'description', finalDescription)

    // 3. Update Open Graph (Facebook/WhatsApp/LinkedIn)
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', finalTitle)
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', finalDescription)

    // 4. Update Twitter Card tags
    setMetaTag('meta[property="twitter:title"]', 'property', 'twitter:title', finalTitle)
    setMetaTag('meta[property="twitter:description"]', 'property', 'twitter:description', finalDescription)

  }, [finalTitle, finalDescription, i18n.language]) // Re-run when titles/description or language changes

  return null // Renderless component, updates DOM imperatively
}

export default SEO
