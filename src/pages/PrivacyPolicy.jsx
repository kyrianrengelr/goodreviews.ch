import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div style={{ background: '#fff', padding: '80px 24px 60px', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#333' }}>
          Privacy policy content to be added.
        </p>
        <Link to="/" style={{ color: '#7469cd', fontWeight: 800, marginTop: '24px', display: 'inline-block' }}>
          &larr; Back to home
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
