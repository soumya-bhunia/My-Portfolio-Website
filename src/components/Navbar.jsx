import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from '../assets/soumyabhuniaLogo.webp';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img 
            src={logo} 
            className="mx-2" 
            width={50} 
            height={50} 
            alt="Logo" 
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/soumyabhunia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/soumya-bhunia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/soumyabhunia_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a 
          href="https://www.youtube.com/@MrShrane/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
        >
          <FaYoutube />
        </a>
      </div>  
    </nav>
  );
};

export default Navbar;