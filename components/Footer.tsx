import React from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className=" h-screen mx-[5%] flex flex-col justify-center gap-32">
      <div className=" flex  justify-between items-start">
        <div className="w-1/5 flex flex-col gap-6">
          <Link href="/">
            <span className="text-[32px] text-black dark:text-blue-500">T</span>
            <span className="text-2xl text-black dark:text-blue-500">ime</span>
            <span className="text-[32px] text-red-600"> Z</span>
            <span className="text-2xl text-red-600">one</span>
          </Link>
          <p className="mb-4">
            Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed
            do eiusmod tem.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Offers &amp; Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">New Products</h3>
          <ul className="space-y-2">
            <li>Woman Cloth</li>
            <li>Fashion Accessories</li>
            <li>Man Accessories</li>
            <li>Rubber made Toys</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Frequently Asked Questions</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>Report a Payment Issue</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          <span className="text-[#ff2020]"> ❤ </span>
          Colorlib
        </p>
        <div className="flex gap-2 ">
          <Link
            href="/"
            className="hover:text-[#ff2020] duration-300 cursor-pointer "
          >
            <FaTwitter />
          </Link>

          <Link
            href="/"
            className="hover:text-[#ff2020] duration-300 cursor-pointer "
          >
            <FaFacebookF />
          </Link>
          <Link
            href="/"
            className="hover:text-[#ff2020] duration-300 cursor-pointer "
          >
            <FaInstagram />
          </Link>
          <Link
            href="/"
            className="hover:text-[#ff2020] duration-300 cursor-pointer "
          >
            <CiGlobe />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// export default function Footer() {
//   return (
//     <footer>
//       <div className="px-7 py-2  w-full flex items-start justify-between ">
//         <FooterBox>
//           <h1> Quick Links</h1>
//           <ul className="cursor-pointer">
//             <li className="hover:translate-x-1 duration-300 ">About us</li>
//             <li>Services</li>
//             <li>Terms</li>
//             <li>Privacy</li>
//           </ul>
//         </FooterBox>
//         <FooterBox>
//           <h1> Terms Conditions</h1>
//           <ul className="cursor-pointer">
//             <li>About us</li>
//             <li>Services</li>
//             <li>Terms</li>
//             <li>Privacy</li>
//           </ul>
//         </FooterBox>
//         <FooterBox>
//           <h1>CONTACT US</h1>
//           <ul className="cursor-pointer">
//             <li>379 Hudson St, New York, NY 10018</li>
//             <li>(+1) 96 716 6879</li>
//             <li>(+1) 94 957 7894</li>
//             <li>contact@site.com</li>
//           </ul>
//         </FooterBox>
//         <FooterBox>
//           <form className="flex flex-col items-center gap-2">
//             <h2 className="mb-2">Sign Up</h2>
//             <input
//               type="email"
//               placeholder="Email..."
//               name="user_email"
//               className="rounde-[4px] rounded-md border-[0.5px] p-2  bg-[#fff]]"
//             />
//             <button className="w-full rounded-[4px] p-2 bg-[#3b82f6]  hover:bg-sky-700  duration-500 text-[#fff] ">
//               SEND
//             </button>
//           </form>
//         </FooterBox>
//       </div>
//     </footer>
//   );
// }

// function FooterBox({ children }: { children: React.ReactNode }) {
//   return (
//     <div className=" flex flex-col items-center gap-3 text-[14px]">
//       {children}
//     </div>
//   );
// }

// function Copyright() {
//   return (
//     <div className=" bg-[#2222] p-3">
//       <p className="text-center">
//         Copyright ©2024 All rights reserved | This template is made by Lasha
//         Gamgoneishvili
//       </p>
//     </div>
//   );
// }
