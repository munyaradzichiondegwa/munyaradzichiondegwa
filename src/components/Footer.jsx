// src/components/Footer.jsx

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'; // Already in your deps

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Static current year for copyright

  // State for live date/time
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  // Update date/time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString()); // Full locale string (date + time)
    }, 1000); // Update every 1 second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <footer 
      role="contentinfo" 
      className="mt-16 pt-8 pb-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-center"
    >
      <div className="max-w-6xl mx-auto space-y-4 px-6"> {/* Matches your max-w-6xl sections */}
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4 flex-wrap"> {/* flex-wrap for mobile stacking */}
          <a 
            href="https://www.linkedin.com/in/munyaradzi-chiondegwa" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Connect with Munyaradzi on LinkedIn"
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Linkedin className="w-5 h-5" aria-hidden="true" />
          </a>
          <a 
            href="https://github.com/munyaradzichiondegwa" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Munyaradzi's GitHub profile"
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
          </a>
          <a 
            href="https://twitter.com/NNehoreka" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow Munyaradzi on Twitter/X"
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Twitter className="w-5 h-5" aria-hidden="true" />
          </a>
          <a 
            href="mailto:chiondegwabm@gmail.com" 
            aria-label="Send email to Munyaradzi"
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
        
        {/* Follow Me Links (Subtle, matching your .btn-outline style) */}
        <p className="text-sm">
          Follow me on{' '}
          <a 
            href="https://www.linkedin.com/in/munyaradzi-chiondegwa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium px-1 py-0.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Inline button-like
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a 
            href="https://github.com/munyaradzichiondegwa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium px-1 py-0.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            GitHub
          </a>
          .
        </p>
        
        {/* Copyright with Dynamic Year */}
        <p className="text-xs">
          © {currentYear} Munyaradzi Chiondegwa. All rights reserved. | Harare, Zimbabwe 🇿🇼
        </p>

        {/* Dynamic Date and Time (Live Updating) */}
        <p className="text-xs opacity-75">
          Last Updated: {currentDateTime} {/* e.g., "October 15, 2025 at 3:45:12 PM" */}
        </p>
      </div>
    </footer>
  );
}