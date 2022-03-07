import "./footer.scss";
import Links from "./Links";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer>
      <SocialLinks />
      <Links />
      <button className='footer-service-button'>Service Code</button>
      <div className='footer-copyright'>© 2022-2022 Clone, Inc.</div>
    </footer>
  );
};

export default Footer;
