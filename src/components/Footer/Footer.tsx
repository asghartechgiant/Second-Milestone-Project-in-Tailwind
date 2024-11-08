import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="my-28">
      <div className="flex justify-center gap-5 text-5xl ">
        <IoLogoFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
      <div className="flex justify-center my-4">
        Copyright ©2020 All rights reserved{" "}
      </div>
    </div>
  );
}
