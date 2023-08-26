import * as React from 'react';
import '../style/footer.css'; // Make sure to adjust the path to your CSS file

export default function Footer() {
  return (
    <footer className="p-5">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-700 bg-blue-900 rounded-lg p-5 flex-row flex items-center justify-between">
        <p className="text-yellow-400">&copy; 2023 BlockHub. All rights reserved.</p>
        <div className="footer-links ">
          <a href="#" className="footer-link text-white">Privacy Policy</a>
          <span className="footer-divider text-white">|</span>
          <a href="#" className="footer-link text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
