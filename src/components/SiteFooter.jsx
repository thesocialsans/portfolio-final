import { useState } from 'react'
import linkedinIcon from '../assets/images/icon-linkedin.png'
import mailIcon from '../assets/images/icon-mail.png'
import phoneIcon from '../assets/images/icon-phone.png'
import './SiteFooter.css'

const PHONE_NUMBER = '9080560242'

function SiteFooter({ onDark = false }) {
  const [copied, setCopied] = useState(false)

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <footer className={`site-footer${onDark ? ' site-footer--on-dark' : ''}`}>
      <p className="site-footer__locale">IIT HYDERABAD X INDIA</p>
      <div className="site-footer__socials">
        <a
          className="site-footer__social-icon"
          href="https://www.linkedin.com/in/sangavi-ramesh-92a868139/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <img src={linkedinIcon} alt="" />
        </a>
        <a
          className="site-footer__social-icon"
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <img src={mailIcon} alt="" />
        </a>
        <button
          type="button"
          className="site-footer__social-icon site-footer__social-icon--button"
          onClick={handleCopyPhone}
          aria-label={`Copy phone number ${PHONE_NUMBER}`}
        >
          <img src={phoneIcon} alt="" />
          <span className="site-footer__copied-tip" data-visible={copied}>
            Copied!
          </span>
        </button>
      </div>
    </footer>
  )
}

export default SiteFooter
