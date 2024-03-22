import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 text-base-content">
        <nav className="space-y-3">
        <a className="gap-0 text-2xl footer-title md:text-3xl font-extrabold text-white">
              JobHunter
            </a>
          <a className="link link-hover text-[#FFFFFFB3]">There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</a>
          <a className="link link-hover flex gap-3 text-2xl text-[#FFFFFFB3]"><FaFacebook /><AiFillTwitterCircle /><RiInstagramFill /></a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover text-[#FFFFFFB3]">Branding</a>
          <a className="link link-hover text-[#FFFFFFB3]">Design</a>
          <a className="link link-hover text-[#FFFFFFB3]">Marketing</a>
          <a className="link link-hover text-[#FFFFFFB3]">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover text-[#FFFFFFB3]">About us</a>
          <a className="link link-hover text-[#FFFFFFB3]">Contact</a>
          <a className="link link-hover text-[#FFFFFFB3]">Jobs</a>
          <a className="link link-hover text-[#FFFFFFB3]">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Legal</h6>
          <a className="link link-hover text-[#FFFFFFB3]">Terms of use</a>
          <a className="link link-hover text-[#FFFFFFB3]">Privacy policy</a>
          <a className="link link-hover text-[#FFFFFFB3]">Cookie policy</a>
        </nav>
      </footer>
      <hr />
      <footer className="footer px-10 py-4 text-base-content">
        <aside className="items-center grid-flow-col">
          <p className="text-[#FFFFFFB3]">
          @2024 JobHunter. All Rights Reserved
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a className="text-[#FFFFFFB3]">
            Powered by JobHunter
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
