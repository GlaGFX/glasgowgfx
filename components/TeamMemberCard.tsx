import React from 'react';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export default function TeamMemberCard({ 
  name, 
  role, 
  bio, 
  imageUrl 
}: TeamMemberCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary mb-4">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-center text-light">{name}</h3>
        <p className="text-primary text-sm mb-2">{role}</p>
      </div>
      <p className="text-gray mb-4">{bio}</p>
      <div className="flex justify-center gap-4">
        <a href="#" className="text-gray hover:text-primary transition-colors">
          <FiGithub size={20} />
        </a>
        <a href="#" className="text-gray hover:text-primary transition-colors">
          <FiLinkedin size={20} />
        </a>
        <a href="#" className="text-gray hover:text-primary transition-colors">
          <FiMail size={20} />
        </a>
      </div>
    </div>
  );
}