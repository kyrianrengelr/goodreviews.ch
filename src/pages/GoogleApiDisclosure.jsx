import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const sectionStyle = { marginBottom: '24px' };
const h2Style = { fontSize: '18px', fontWeight: 800, marginBottom: '12px', color: '#0A0A0A' };
const pStyle = { fontSize: '14px', lineHeight: 1.7, color: '#333', marginBottom: '8px' };
const ulStyle = { fontSize: '14px', lineHeight: 1.7, color: '#333', paddingLeft: '20px', marginBottom: '8px' };

function GoogleApiDisclosure() {
  useEffect(() => {
    document.title = 'Google API Disclosure | Good Reviews';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Google API Services User Data Policy compliance disclosure for Good Reviews. How we access, use and store Google Business Profile data.");
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ background: '#fff', padding: '80px 24px 60px', minHeight: '60vh', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '32px' }}>Google API Disclosure</h1>

        <div style={sectionStyle}>
          <p style={pStyle}>
            goodreviews.app is a Google Business Profile analytics platform for professionals. It provides statistical analysis of Google reviews: precise ratings (2 decimals), review counts by period, averages, trends, projections, and multi-location comparisons.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Google API Services User Data Policy Compliance</h2>
          <p style={pStyle}>
            goodreviews.app's use and transfer to any other app of information received from Google APIs will adhere to the <strong>Google API Services User Data Policy</strong>, including the Limited Use requirements.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>What data we access</h2>
          <p style={pStyle}>
            goodreviews.app accesses Google Business Profile data in read-only mode via the OAuth scope <code>https://www.googleapis.com/auth/business.manage</code>. This is the only scope available for Google Business Profile API. Although this scope technically allows read and write operations, goodreviews.app only performs read operations against Business Profile resources.
          </p>
          <p style={pStyle}>
            Data accessed: Google reviews (text content, rating, date — author names are NOT stored), overall rating, total review count, business name, and location ID. Data is synchronized on demand by the customer and may also be refreshed by a scheduled server-side sync.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>How we use your data</h2>
          <p style={pStyle}>
            Google data is used exclusively to provide statistical analysis features visible within the goodreviews.app interface: rating calculations, review volume tracking, trend analysis, and multi-location comparisons.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>How we store your data</h2>
          <p style={pStyle}>
            Data is stored in a MySQL database hosted by Infomaniak Network SA in Switzerland (ISO 27001 certified). OAuth access and refresh tokens are encrypted at rest with AES-256-GCM before storage. All connections use TLS 1.2+.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>What we do NOT do with your data</h2>
          <ul style={ulStyle}>
            <li>We do NOT sell, rent, or transfer Google data to any third party.</li>
            <li>We do NOT use Google data for advertising, retargeting, or profiling.</li>
            <li>We do NOT use Google data to train AI or machine learning models.</li>
            <li>We do NOT export Google data outside the platform.</li>
            <li>We do NOT modify, publish, or delete anything on your Google Business Profile.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Revoking access and deleting your data</h2>
          <p style={pStyle}>
            You can revoke Google access at any time from <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" style={{ color: '#7469cd' }}>https://myaccount.google.com/permissions</a>. OAuth tokens will be deleted within 48 hours.
          </p>
          <p style={pStyle}>
            To delete your account and all associated data, use the "Delete my account" button in your Settings. All data will be permanently deleted within 30 days.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Contact</h2>
          <p style={pStyle}>
            Good Reviews – Engel Kyrian<br />
            Rue du Marché 2, 2520 La Neuveville, Switzerland<br />
            <a href="mailto:kyrian@goodreviews.ch" style={{ color: '#7469cd' }}>kyrian@goodreviews.ch</a>
          </p>
          <p style={pStyle}>
            Full Privacy Policy: <Link to="/privacy-policy" style={{ color: '#7469cd' }}>Privacy Policy</Link>
          </p>
        </div>

        <Link to="/" style={{ color: '#7469cd', fontWeight: 800, marginTop: '24px', display: 'inline-block' }}>
          &larr; Back to home
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default GoogleApiDisclosure;
