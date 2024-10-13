'use client';

import {
  ButtonArrowIcon,
  Clutch,
  Designrush,
  Dribble,
  Facebook,
  Goodfirm,
  GoolgeIcon,
  India,
  Instagram,
  LinkedIn,
  Medium,
  Pinterest,
  TopDevelopers,
  Twitter,
  UnitedStates,
  YouTube,
} from '@public/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'India',
    about: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <footer className="border border-[#3b4040] bg-[#192020] py-12 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-24 border border-[#3b4040] bg-[#252b2b] p-6">
            <h2 className="mb-4 text-2xl font-bold">Collaborate with MindInventory</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="mb-4 lg:mb-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="h-input w-full border-b border-[#3b4040] bg-transparent px-4 py-[0.375rem] text-[#ffffff80] outline-none"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4 lg:mb-6">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="h-input w-full border-b border-[#3b4040] bg-transparent px-4 py-[0.375rem] text-[#ffffff80] outline-none"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="mb-4 lg:mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="h-input w-full border-b border-[#3b4040] bg-transparent px-4 py-[0.375rem] text-[#ffffff80] outline-none"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-4 lg:mb-6">
                  <select
                    className="h-input w-full border-b border-[#3b4040] bg-transparent px-4 py-[0.375rem] text-[#ffffff80] outline-none"
                    name="country"
                    onChange={handleInputChange}
                  >
                    <option className="text-primary">India</option>
                    <option className="text-primary">USA</option>
                    <option className="text-primary">Netherlands</option>
                  </select>
                </div>
              </div>
              <div className="mb-4 flex">
                <select
                  className="h-input border-b border-[#3b4040] bg-transparent px-4 py-[0.375rem] text-[#ffffff80] outline-none"
                  name="country"
                  onChange={handleInputChange}
                >
                  <option className="text-primary">+84</option>
                  <option className="text-primary">+123</option>
                  <option className="text-primary">+847</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="h-input w-full border-b border-[#3b4040] bg-transparent px-4 py-[0.375rem] text-[#ffffff80] outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <textarea
                name="about"
                placeholder="About your project"
                className="h-input mb-4 w-full border-b border-[#3b4040] bg-transparent px-4 py-[0.375rem] text-[#ffffff80] outline-none"
                rows={4}
                onChange={handleInputChange}
              ></textarea>
              <div className="mb-4 rounded border border-dashed border-[#3b4040] p-4">
                <label className="flex cursor-pointer items-center">
                  {/* <Paperclip className="mr-2" /> */}
                  <span>Attach a file</span>
                  <input type="file" className="hidden" />
                </label>
                <p className="mt-2 text-xs">
                  Please upload a file with one of the following extensions: pdf, docx, odt, ods,
                  pptx, xlsx, rtf, txt
                </p>
              </div>
              <button type="submit" className="btn-black w-max">
                <span>Get Estimation</span>
                <ButtonArrowIcon className="icon icon-arrow" />
              </button>
            </form>
          </div>

          {/* Company Information */}
          <div>
            <h3 className="font-14">Our Offices</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="font-18 font-light">
                <h4 className="my-4 flex items-center font-bold">
                  <India className="mr-2" /> India
                </h4>
                <p className="">
                  801, City Center 2,
                  <br />
                  Science City Road, Sola,
                  <br />
                  Ahmedabad, Gujarat 380060
                </p>
                <p>+91 (961) 229-3490</p>
              </div>
              <div className="font-18 font-light">
                <h4 className="mb-4 flex items-center font-bold">
                  <UnitedStates className="mr-2" /> USA USA
                </h4>
                <p>
                  9341 Ellis Way,
                  <br />
                  Strongsville,
                  <br />
                  Ohio 44136
                </p>
                <p>+1 (216) 609-0691</p>
              </div>
              <div className="font-18 font-light">
                <h4 className="mb-4 flex items-center font-bold">
                  <Image
                    src={'/icons/netherlands.png'}
                    alt="netherlands"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Netherlands
                </h4>
                <p>
                  Laan van Wateringse Veld 1322
                  <br />
                  2548 CX The Hague
                </p>
                <p className="mt-4">+31 (97) 0102-66779</p>
                <p>www.mindinventory.nl</p>
              </div>
              <div>
                <h4 className="font-20 mx-0 my-[9px] mb-[15px] font-medium text-white">
                  Project Inquiries
                </h4>
                <Link className="block" href={'/'}>
                  sales@mindinventory.com
                </Link>
                <Link href={'/'}>biz.mindinventory</Link>
              </div>
            </div>

            <div className="border-one"></div>

            <h3 className="font-14 mb-2 block text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { name: 'facebook', icon: Facebook },
                { name: 'dribbble', icon: Dribble },
                { name: 'linkedin', icon: LinkedIn },
                { name: 'twitter', icon: Twitter },
                { name: 'youtube', icon: YouTube },
                { name: 'pinterest', icon: Pinterest },
                { name: 'medium', icon: Medium },
                { name: 'instagram', icon: Instagram },
              ].map(social => (
                <a
                  key={social.name}
                  href={`https://${social.name}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div className="rounded-24 my-8 flex flex-wrap items-center justify-between border border-[#3b4040] bg-[#252b2b] px-[30px] py-[22px]">
          {[Clutch, Goodfirm, Designrush, TopDevelopers, GoolgeIcon].map((platform, index) => (
            <div
              key={platform}
              className="relative flex w-[230px] items-center justify-center gap-5"
            >
              {React.createElement(platform)}
              <span className="text-yellow-400">★ {Math.round((4.6 + index * 0.1) * 10) / 10}</span>
              {index < 4 && (
                <div className="absolute right-[-40px] top-[calc(50%-15px)] h-[30px] w-[1px] bg-white opacity-30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="my-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            {
              title: 'Digital',
              items: [
                'Full-cycle Product Development',
                'Customer Experience and Design',
                'Application Development',
                'Game Development',
                'Quality Engineering',
                'Dedicated Team Augmentation',
              ],
            },
            {
              title: 'Data & AI',
              items: [
                'Data Science',
                'Machine Learning',
                'Artificial Intelligence (AI)',
                'Robotic Process Automation',
                'Generative AI Development',
                'Computer Vision Development',
              ],
            },
            {
              title: 'Solutions',
              items: [
                'DevOps Solutions',
                'Cloud Solutions',
                'Software Solutions for Startups',
                'Product Prototype Solutions',
                'Enterprise Mobility Solutions',
                'On-demand Business Solutions',
              ],
            },
            {
              title: 'Industries',
              items: ['Healthcare', 'Finance', 'Real Estate', 'Retail', 'Education', 'Logistics'],
            },
          ].map(category => (
            <div key={category.title}>
              <h3 className="font-20 mb-4 block">{category.title}</h3>
              <ul className="font-light">
                {category.items.map(item => (
                  <li
                    key={item}
                    className="inline-block p-[7px] text-base text-primary-foreground opacity-60 hover:opacity-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-wrap items-center justify-between border-t border-gray-700 pt-8">
          <p>© 2024 MindInventory. All rights reserved.</p>
          <div className="flex space-x-4 text-sm">
            {['About Us', 'Insights', 'Careers', 'Privacy Policy', 'Sitemap'].map(link => (
              <a key={link} href="#" className="hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
