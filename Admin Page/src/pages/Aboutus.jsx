import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const developers = [
  {
    name: 'Lawrence Rodriques',
    image: 'https://via.placeholder.com/150',
    description: 'MERN-stack developer with experience in React, Node.js, and MongoDB. Passionate about building scalable and responsive web applications.',
    github: 'https://github.com/Lawrence27R',
    twitter: 'https://twitter.com/Lawrence27R',
    linkedin: 'https://www.linkedin.com/in/lawrence27r',
  },
  {
    name: 'Rajdeep Sharma',
    image: 'https://via.placeholder.com/150',
    description: 'Front-end developer with experience in React, HTML, and CSS. Loves creating beautiful and intuitive user interfaces.',
    github: 'https://github.com/Lawrence27R',
    twitter: 'https://twitter.com/Lawrence27R',
    linkedin: 'https://www.linkedin.com/in/lawrence27r',
  },
  {
    name: 'Tanmay Singh',
    image: 'https://via.placeholder.com/150',
    description: 'Front-end developer with experience in React, HTML, and CSS. Loves creating beautiful and intuitive user interfaces.',
    github: 'https://github.com/Lawrence27R',
    twitter: 'https://twitter.com/Lawrence27R',
    linkedin: 'https://www.linkedin.com/in/lawrence27r',
  },
];
const AboutUs = () => (
  <div className="container mx-auto flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-4">Meet the Team</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {developers.map((developer, index) => (
        <div key={index} className="bg-white shadow rounded-lg overflow-hidden text-center w-64">
          <img src={developer.image} alt={developer.name} className="w-32 h-32 mx-auto mt-4 rounded-full object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{developer.name}</h2>
            <p className="text-gray-700 mb-4">{developer.description}</p>
            <div className="flex justify-center">
              <a href={developer.github} target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaGithub size={24} />
              </a>
              <a href={developer.twitter} target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaTwitter size={24} />
              </a>
              <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutUs;
