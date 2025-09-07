import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="text-[#CACACA] bg-[#222222]">
      <div className="block w-full gap-4 px-6 py-12 lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="mb-10 lg:w-1/4">
            <Link href="/" className="text-2xl text-white hover:scale-105">
              <Image
                src="/assets/images/alx_logo_white.png"
                alt="ALX Logo"
                width={58.73}
                height={30.6}
              />
            </Link>
          </div>
          <p>
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:w-1/2 lg:grid-cols-3">
          <div className="flex items-start justify-between col-span-2">
            <div>
              <h3 className="mb-10 text-xl font-semibold">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/location/new-york"
                    className="hover:text-gray-900"
                  >
                    New York
                  </Link>
                </li>
                <li>
                  <Link href="/location/london" className="hover:text-gray-900">
                    London
                  </Link>
                </li>
                <li>
                  <Link href="/location/tokyo" className="hover:text-gray-900">
                    Tokyo
                  </Link>
                </li>
                <li>
                  <Link href="/location/paris" className="hover:text-gray-900">
                    Paris
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-10 text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/listings" className="hover:text-gray-900">
                    Listings
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="mb-10 text-xl font-semibold">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-gray-900">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-4 mt-8 border-t border-gray-300">
        <div className="flex flex-col items-center justify-between max-w-6xl px-6 mx-auto text-sm md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} My Listing App. All rights
            reserved.
          </p>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook size={20} />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram size={20} />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
