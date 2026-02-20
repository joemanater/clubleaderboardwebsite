import usePageTitle from '../../hooks/usePageTitle'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import './PrivacyPage.css'

export default function PrivacyPage() {
  usePageTitle('Privacy Policy')

  return (
    <div className="privacy-page">
      <div className="privacy-page__header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <h1 className="privacy-page__title">Privacy Policy</h1>
          <p className="privacy-page__subtitle">Last updated: February 2026</p>
        </div>
      </div>

      <div className="container">
        <div className="privacy-page__content">
          <section className="privacy-page__section">
            <h2>Overview</h2>
            <p>
              ClubLeaderboard ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2>Information We Collect</h2>
            <p>
              <strong>Usage Data:</strong> We automatically collect certain information when you visit our site, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This data helps us understand how visitors use ClubLeaderboard so we can improve the experience.
            </p>
            <p>
              <strong>Cookies:</strong> We use cookies and similar tracking technologies to analyze site traffic and understand how visitors interact with our content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Operate and maintain the website</li>
              <li>Analyze usage trends to improve our rankings and content</li>
              <li>Monitor and prevent technical issues</li>
              <li>Understand which clubs and categories are most popular</li>
            </ul>
          </section>

          <section className="privacy-page__section">
            <h2>Third-Party Services</h2>
            <p>
              We may use third-party analytics services (such as Google Analytics) to help us understand site usage. These services may collect information about your use of our website through cookies and similar technologies. We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2>Affiliate Links</h2>
            <p>
              Some links on ClubLeaderboard may be affiliate links. When you click on an affiliate link and make a purchase, we may receive a commission. This does not affect our rankings or reviews, which are determined independently. Affiliate partners may use cookies to track referrals.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect the information we collect. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2>Children's Privacy</h2>
            <p>
              ClubLeaderboard is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
            </p>
          </section>

          <section className="privacy-page__section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please reach out to us at privacy@clubleaderboard.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
