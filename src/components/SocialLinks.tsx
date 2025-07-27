import React from 'react';
import { motion } from 'framer-motion';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import insa from '../assets/insta.png';
import olx from '../assets/olx.png';
import prom from '../assets/prom.png';
import { configCompany } from "@/data/configCompany.ts";

const SocialLinks = ({ isHeader = false, isLight = false }: { isHeader?: boolean; isLight?: boolean }) => {
    const socialLinks = [
        { icon: facebook, href: configCompany.facebook, color: '#A01F5D' },
        { icon: linkedin, href: configCompany.linkedin, color: '#2B7AC2' },
        { icon: insa, href: configCompany.instagram, color: '#FBB216' },
        { icon: olx, href: configCompany.olx, color: '#64B232' },
        { icon: prom, href: configCompany.prom, color: '#FF4500' },
    ];

    const links = isHeader ? socialLinks.slice(0, 3) : socialLinks;

    return (
        <div className="flex space-x-4 px-3">
            {links.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
    ${isLight ? 'bg-white shadow-md hover:shadow-xl' : 'bg-gray-800 hover:shadow-lg'}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img
                        src={social.icon}
                        className={`w-5 h-5 transition-all duration-300 ${isLight ? 'filter' : ''}`}
                        alt="social"
                    />
                </motion.a>
            ))}
        </div>
    );
};

export default SocialLinks;
