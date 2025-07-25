// ...existing code...
import caseminimal from "@/public/assets/Icons/Linear/School/Case Minimalistic.svg";
import Image from "next/image";
import ALXlogo from "@/public/assets/Logos/ALXlogo.svg";
import Button from "@/components/layout/Button";
import { useState } from "react";
import { PostModal } from "@/components/common/PostModal";
import Card from "@/components/common/Card";
import type { CardProps } from "@/interfaces";
import search from "@/public/assets/Icons/Search.svg";
import { FiltererContainer } from "../Filterer";
import React from "react";
import Link from "next/link";
const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([]);

  const handleAddPost = (card: CardProps) => {
    setPosts((prev) => [...prev, card]);
  };

  return (
    <>
      <header className="flex flex-col bg-white shadow-md">
        <div className="Filtering w-full flex flex-col">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row items-center justify-center bg-[#34967C] text-white p-4 h-auto w-full gap-2">
            <Image
              src={caseminimal}
              alt="Case Minimalistic Icon"
              width={24}
              height={24}
            />
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-gray-900 text-center sm:text-left"
            >
              Overseas trip? Get the latest info on travel guides
            </a>
            <button className="text-sm font-medium text-white bg-black rounded-2xl px-3 py-1 mt-2 sm:mt-0">
              Move info
            </button>
            <div className="flex flex-row items-center justify-center sm:justify-end gap-4 mt-2 sm:mt-0">
              <Link
                href="/home"
                className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200 px-3 py-1 rounded"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200 px-3 py-1 rounded"
              >
                About
              </Link>
            </div>
          </div>

          {/* Mobile expand button */}
          <div className="flex lg:hidden justify-end px-5 py-2">
            <button
              className="bg-[#34967C] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
              onClick={() => setShowOptions((prev) => !prev)}
              aria-expanded={showOptions}
              aria-controls="search-options"
            >
              {showOptions ? "Hide Search Options" : "Show Search Options"}
            </button>
          </div>

          {/* Bottom row - Search/Filter */}
          <div
            id="search-options"
            className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-5 transition-all duration-300 ${
              showOptions
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden lg:max-h-full lg:opacity-100 lg:overflow-visible"
            }`}
          >
            {/* Location selector */}
            <Image
              src={ALXlogo}
              alt="ALX Logo"
              className="px-3 mb-4 lg:mb-0"
              width={70}
              height={70}
            />
            <div className="flex flex-col w-full gap-4 lg:flex-row lg:items-center lg:justify-between lg:w-auto border-gray-200 border px-4 py-2 rounded-4xl">
              <div className="Location flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4 w-full lg:w-auto">
                <div className="relative flex flex-col">
                  <h3 className="font-semibold text-gray-700 mb-1 text-sm">
                    Location
                  </h3>
                  <input
                    type="text"
                    placeholder="Search for destinations"
                    className="border:none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm px-2 py-1 w-full lg:w-40"
                  />
                  <label htmlFor="location" className="sr-only">
                    Location
                  </label>
                </div>
                <span className="hidden lg:inline">|</span>
              </div>

              {/* Date selectors */}
              <div className="Location flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4 w-full lg:w-auto">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1 text-sm">
                    Check in
                  </h3>
                  <button className="border:none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm px-2 py-1 cursor-pointer w-full lg:w-24">
                    Add date
                  </button>
                </div>
                <span className="hidden lg:inline">|</span>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1 text-sm">
                    Check Out
                  </h3>
                  <button className="border:none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm px-2 py-1 cursor-pointer w-full lg:w-24">
                    Add date
                  </button>
                </div>
                <span className="hidden lg:inline">|</span>
              </div>

              {/* People selector */}
              <div className="Location flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4 w-full lg:w-auto">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1 text-sm">
                    People
                  </h3>
                  <input
                    type="text"
                    placeholder="Add guest"
                    className="border:none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm px-2 py-1 w-full lg:w-24"
                  />
                </div>
                <button className="cursor-pointer mt-2 lg:mt-0">
                  <Image src={search} alt="" width={40} height={40} />
                </button>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4 mt-4 lg:mt-0">
              <Button
                label="Sign in"
                onClick={() => {}}
                className="sign-in btn"
              />
              <Button
                label="Sign up"
                onClick={() => {}}
                className="sign-in btn"
              />
              <Button
                label="Add element"
                onClick={() => setIsModalOpen(true)}
                className="sign-in btn"
              />
            </div>
          </div>
        </div>
        <hr className="opacity-5" />
        <FiltererContainer />
        {/* Render new posts as cards below header */}
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          {posts.map((post, idx) => (
            <Card
              key={idx}
              title={post.title}
              location={post.location}
              price={post.price}
              rating={post.rating}
              content={post.content}
              imageUrl={post.imageUrl}
              iconsUrl={post.iconsUrl}
            />
          ))}
        </div>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={handleAddPost}
        />
      </header>
    </>
  );
};

export default Header;
