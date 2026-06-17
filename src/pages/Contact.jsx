import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate API call
    setTimeout(() => {
      setStatus('sent')
      e.target.reset()
    }, 1500)
  }

  return (
    <div id="page-wrapper">
      <SEO titleKey="seo.contactTitle" descriptionKey="seo.contactDesc" />
      <Navbar />
      <main className="contact-page">
        <div className="container contact__inner">
          <div className="contact__info">
            <Link to="/" className="contact__back">{t('contact.back')}</Link>
            <h1 className="section-title">{t('contact.title1')}<br/>{t('contact.title2')}</h1>
            <p className="contact__desc">{t('contact.desc')}</p>

            <div className="contact__details">
              <div className="contact__detail-item">
                <strong>Email</strong>
                <a href="mailto:addstrategicbusiness@gmail.com">addstrategicbusiness@gmail.com</a>
              </div>
              <div className="contact__detail-item">
                <strong>WhatsApp</strong>
                <a href="https://wa.me/17542549069" target="_blank" rel="noreferrer">+1 (754) 254-9069</a>
              </div>
            </div>
          </div>

          <div className="contact__form-wrap">
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="form__title">{t('contact.formTitle')}</h3>
              
              <div className="form__group">
                <label htmlFor="name">{t('contact.nameLabel')}</label>
                <input type="text" id="name" required placeholder={t('contact.namePh')} />
              </div>

              <div className="form__group">
                <label htmlFor="company">{t('contact.companyLabel')}</label>
                <input type="text" id="company" required placeholder={t('contact.companyPh')} />
              </div>

              <div className="form__group">
                <label htmlFor="email">{t('contact.emailLabel')}</label>
                <input type="email" id="email" required placeholder={t('contact.emailPh')} />
              </div>

              <div className="form__group">
                <label htmlFor="phone">{t('contact.phoneLabel')}</label>
                <input type="tel" id="phone" required placeholder={t('contact.phonePh')} />
              </div>

              <div className="form__group">
                <label htmlFor="message">{t('contact.messageLabel')}</label>
                <textarea id="message" rows="4" placeholder={t('contact.messagePh')}></textarea>
              </div>

              <button type="submit" className="btn btn--lime form__submit" disabled={status === 'sending'}>
                {status === 'sending' ? t('contact.sending') : status === 'sent' ? t('contact.sent') : t('contact.submit')}
              </button>
              
              {status === 'sent' && (
                <p className="form__success">{t('contact.success')}</p>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
