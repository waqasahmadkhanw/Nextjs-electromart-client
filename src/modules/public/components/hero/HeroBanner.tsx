"use client";

import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <aside className="flex h-full flex-col gap-6">
      {/* Banner 01 */}
      <Link
        href="/products"
        className="group relative overflow-hidden rounded-2xl"
      >
      
           <div className="relative h-56 w-full">
          <Image
            src="/images/banners/banner-02.jpg"
            alt="New Collection"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider">
            Limited Offer
          </p>

          <h3 className="mb-4 text-2xl font-bold">
            Up to 50% Off
          </h3>

          <span className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black">
            Shop Now
          </span>
        </div>
      </Link>

      {/* Banner 02 */}
      <Link
        href="/products"
        className="group relative overflow-hidden rounded-2xl"
      >
        <div className="relative h-56 w-full">
          <Image
            src="/images/banners/banner-02.jpg"
            alt="New Collection"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider">
            New Arrival
          </p>

          <h3 className="mb-4 text-2xl font-bold">
            Latest Collection
          </h3>

          <span className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black">
            Explore
          </span>
        </div>
      </Link>
    </aside>
  );
};

export default HeroBanner;

