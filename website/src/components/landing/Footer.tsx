import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#ededed] text--black py-10 px-6 mt-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Synapse</h2>
          <p className="text-sm text-gray-900 leading-relaxed">
            Empowering seamless money transfers and smart financial tools for
            the modern world.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-900">
            <li><Link href="/about" className="hover:text-deepforest">About</Link></li>
            <li><Link href="/careers" className="hover:text-deepforest">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-deepforest">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-deepforest">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-900">
            <li><Link href="/docs" className="hover:text-deepforest">Documentation</Link></li>
            <li><Link href="/faq" className="hover:text-deepforest">FAQ</Link></li>
            <li><Link href="/support" className="hover:text-deepforest">Support</Link></li>
            <li><Link href="/terms" className="hover:text-deepforest">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://twitter.com" target="_blank" className="text-gray-900 hover:text-deepforest text-2xl">
              <FaTwitter />
            </Link>
            <Link href="https://github.com/MohammadTahaBatoomi" target="_blank" className="text-gray-900 hover:text-deepforest text-2xl">
              <FaGithub />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-gray-900 hover:text-deepforest text-2xl">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Synapse. All rights reserved.
      </div>
    </footer>
  );
}