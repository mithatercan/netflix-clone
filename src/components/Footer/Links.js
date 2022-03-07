const links = [
  "Audio and Subtitles",
  "Audio Description",
  "Help Center",
  "Gift Cards",
  "Media Center",
  "Jobs",
  "Terms of Use",
  "Privacy Policy",
  "Legal Notices",
  "Cookies Preferences",
  "Ad Choices",
  "Contact Us",
];

const Links = () => {
  return (
    <ul className='footer-links'>
      {links.map((link, idx) => (
        <li key={idx} className='footer-link-wrapper'>
          <div className='footer-link-item'>
            <span>{link}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Links;
