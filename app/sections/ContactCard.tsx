"use client";

import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

import { socialMedia } from "@/app/lib/data"; // Assuming you imported the data here
import { EmailIcon } from "@/components/icons";

const ContactCard = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <Card className="backdrop-blur-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-lg shadow-lg w-full">
      <CardHeader className="items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
      </CardHeader>
      <CardBody className=" grid grid-cols-6 w-full max-w-3xl">
        {socialMedia.map((media, index) => (
          <Link
            key={index}
            className=" p-1 ml-2 mr-2 m-2 transition-colors hover:text-blue-500 dark:hover:text-blue-300"
            href={media.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-2xl">
              {React.createElement(media.icon, {
                className: "w-6 h-6 fill-current",
              })}
            </span>
            <span className="font-medium">{media.name}</span>
          </Link>
        ))}
      </CardBody>
      <div className="flex items-center justify-center space-x-4">
        <span className="text-2xl">
          {/* Assuming you have an email icon component */}
          {React.createElement(EmailIcon, {
            className: "w-6 h-6 fill-current",
          })}
          {/* Replace this with your email icon */}
        </span>
        <span className="font-medium">
          <Link
            className="hover:text-blue-500 dark:hover:text-blue-300"
            href="mailto:nicolas_frazao@hotmail.com" // Replace with your actual email
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => {
              setEmailSent(true);
            }}
          >
            Sent me an email! {emailSent ? "✔️" : ""}
          </Link>
        </span>
      </div>
    </Card>
  );
};

export default ContactCard;
