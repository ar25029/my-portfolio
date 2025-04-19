import React from "react";
import { Icons } from "../../shared";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-4 justify-between mt-10">
      <div>
        <p className="font-medium text-lg">Phone</p>
        <a
          className="font-thin text-lg hover:border-b-2 transition-colors duration-1000"
          href="tel:+918577026532"
        >
          857-702-6532
        </a>
      </div>
      <div>
        <p className="font-medium text-lg">Email</p>
        <a
          className="font-thin text-lg hover:border-b-2 transition-colors duration-1000"
          href="mailto:ar25029@gmail.com"
        >
          ar25029@gmail.com
        </a>
      </div>
      <div>
        <p className="font-medium text-lg">Follow me</p>
        <span className="flex gap-3 text-lg">
          <a target="_blank" href="https://github.com/ar25029">
            <Icons icon={faGithub} className={"text-2xl"} />
          </a>
          <a target="_blank" href="https://wa.me/+918577026532">
            <Icons icon={faWhatsapp} className={"text-2xl text-green-600"} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abdur-rahman-971440214/"
          >
            <Icons icon={faLinkedin} className={"text-2xl text-blue-900"} />
          </a>
        </span>
      </div>
      <div className="flex flex-col text-md font-extralight">
        <span>&copy; Copyright 2025 by AR</span>
        <span className="text-start md:text-center">All right reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
