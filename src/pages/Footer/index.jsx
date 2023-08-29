import { useState } from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div id="footer">
      <div className="banner">
        <div className="flex">
          <div className="banner-content">
            <h2 className="banner-heading">Grow your business fast 🥰</h2>
          </div>
          <div className="banner-action">
            <div className="cta-button">
              <a href="#" className="cta-link">
                Try 14 Days Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Help</h3>
          <ul>
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">Delivery Details</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Resources</h3>
          <ul>
            <li>
              <a href="#">Free eBooks</a>
            </li>
            <li>
              <a href="#">Development Tutorial</a>
            </li>
            <li>
              <a href="#">How to - Blog</a>
            </li>
            <li>
              <a href="#">Youtube Playlist</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Links</h3>
          <ul>
            <li>
              <a href="#">Free eBooks</a>
            </li>
            <li>
              <a href="#">Development Tutorial</a>
            </li>
            <li>
              <a href="#">How to - Blog</a>
            </li>
            <li>
              <a href="#">Youtube Playlist</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
