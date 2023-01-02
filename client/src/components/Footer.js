import './Footer.css';
import logo from '../assets/icon.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="footer-nav">
          <div className="footer-sitemap">
            <div className="footer-sitemap-submenu">
              <h5 className="footer-sitemap-submenu--title">
                <a href={process.env.PUBLIC_URL}>Stack Overflow</a>
              </h5>
              <ul className="footer-sitemap-submenu--container">
                <li>
                  <a href={process.env.PUBLIC_URL}>Questions</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Help</a>
                </li>
              </ul>
            </div>
            <div className="footer-sitemap-submenu">
              <h5 className="footer-sitemap-submenu--title">
                <a href={process.env.PUBLIC_URL}>Products</a>
              </h5>
              <ul className="footer-sitemap-submenu--container">
                <li>
                  <a href={process.env.PUBLIC_URL}>Teams</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Advertising</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Collectives</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Talent</a>
                </li>
              </ul>
            </div>
            <div className="footer-sitemap-submenu">
              <h5 className="footer-sitemap-submenu--title">
                <a href={process.env.PUBLIC_URL}>Company</a>
              </h5>
              <ul className="footer-sitemap-submenu--container">
                <li>
                  <a href={process.env.PUBLIC_URL}>About</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Press</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Work Here</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Legal</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Privacy Policy</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Terms of Service</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Contect Us</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Cookie Settings</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Cookie Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-sitemap-submenu">
              <h5 className="footer-sitemap-submenu--title">
                <a href={process.env.PUBLIC_URL}>Stack Exchange Network</a>
              </h5>
              <ul className="footer-sitemap-submenu--container">
                <li>
                  <a href={process.env.PUBLIC_URL}>Technology</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Culture & recreation</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Life & arts</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Science</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Professional</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Business</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>API</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>Data</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <ul className="footer-copyright--sns">
              <li>
                <a href="https://stackoverflow.blog/?blb=1&_ga=2.140646962.147556142.1671426751-10537744.1658905535">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/officialstackoverflow/">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/stackoverflow">Twitter</a>
              </li>
              <li>
                <a href="https://linkedin.com/company/stack-overflow">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thestackoverflow">
                  Instagram
                </a>
              </li>
            </ul>
            <p>
              Site design / logo © 2022 Stack Exchange Inc; user contributions
              licensed under{' '}
              <a href="https://stackoverflow.com/help/licensing">CC BY-SA</a>.
              rev 2022.12.19.43125
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
