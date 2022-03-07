import { GrFacebookOption, GrTwitter, GrYoutube } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className='footer-social-links df f-ai-c'>
      <GrFacebookOption />
      <BsInstagram />
      <GrTwitter />
      <GrYoutube />
    </div>
  );
};

export default SocialLinks;
