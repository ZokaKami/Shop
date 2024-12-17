import React from "react";
import FooterRights from "./footerRights";
export default function Footer() {
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
  return (
    <div className="bg-[#F2F0F1]">
      <div className="grid grid-cols-2 md:grid-cols-4 font-satoshi gap-4 text-sm   p-4">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-[500] mb-2 tracking-widest">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-gray-600  ">
                  <a href={link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <FooterRights />
    </div>
  );
}
