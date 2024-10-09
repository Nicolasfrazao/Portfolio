import React from 'react';
import { TelegramIcon, DiscordIcon, GithubIcon, LinkedInIcon } from "./../../components/icons";
import { socialMedia } from '@/app/lib/data'; // Assuming you imported the data here

const ContactCard = () => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-lg shadow-lg max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
      <div className="space-y-4 mb-6">
        {socialMedia.map((media, index) => (
          <a 
            key={index} 
            href={media.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-4 transition-colors hover:text-blue-500 dark:hover:text-blue-300"
          >
            <span className="text-2xl">
              {React.createElement(media.icon, { className: "w-6 h-6" })}
            </span>
            <span className="font-medium">{media.name}</span>
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-2xl">
          {/* Assuming you have an email icon component */}
          <i className="mdi mdi-email" /> {/* Replace this with your email icon */}
        </span>
        <span className="font-medium">
          <a 
            href="mailto:your-email@example.com" // Replace with your actual email
            className="hover:text-blue-500 dark:hover:text-blue-300"
          >
            your-email@example.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
