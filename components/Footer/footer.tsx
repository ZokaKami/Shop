import React from "react";
import FooterRights from "./footerRights";
const sections = [
  {
    title: "COMPANY",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "HELP",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payment"],
  },
  {
    title: "RESOURCES",
    links: [
      "Free eBook",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];
export default function Footer() {
  return (
    <div className="w-full px-4 md:px-16 xl:px-24 md:pb-4">
      <div className="grid grid-cols-2 md:flex md:justify-between font-satoshi gap-4 text-sm     p-4">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-[500] mb-2 md:mb-4 tracking-widest">
              {section.title}
            </h3>
            <ul className="space-y-2 xl:space-y-4">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-gray-600  ">
                  <a href={link} aria-label={link}>
                    {link}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
