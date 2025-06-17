import { FaMapMarked, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const socialLinks = [
  { href: "https://maps.app.goo.gl/acavF1abEbTVpGhH7", icon: <FaMapMarked /> },
  { href: "https://www.instagram.com/kkn51.keraitan?igsh=MXQ5NW80MGVqaHFhdg==", icon: <FaInstagramSquare /> },
  { href: "https://youtube.com/@kkn49unmulkelompok07?si=VnZLd2wOXys4ljFH", icon: <FaYoutube /> },
  { href: "https://www.tiktok.com/@kuteam.camp?_t=ZS-8xG0JPvCYAz&_r=1", icon: <AiFillTikTok /> },
];

const Footer = () => {
  return (
    <footer className="w-screen   bg-yellow-600 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Keraitan 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
