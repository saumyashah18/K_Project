import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Gloss&Glam</h1>
          <p className="text-lg text-gray-700 mb-6">
            Founded by Krushita, Gloss&Glam is more than just a makeup brand—it's a celebration of self-expression, confidence, and beauty in all its forms.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to inspire individuals to embrace their unique beauty through luxurious, high-quality, and trend-forward products that are accessible to everyone.
          </p>
          <Link href="/category/lips">
            <Button className="bg-pink-500 hover:bg-pink-600">
              Explore Our Products
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            alt="Gloss&Glam products"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            Gloss&Glam was born from Krushita's passion for makeup and her belief that beauty products should be both luxurious and accessible. After years of working in the beauty industry, she noticed a gap in the market for high-quality makeup that didn't break the bank.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            In 2020, she launched Gloss&Glam with a small collection of lipsticks. The brand quickly gained popularity for its exceptional quality, stunning colors, and affordable prices. Today, Gloss&Glam offers a comprehensive range of beauty products, from lipsticks and eyeshadows to foundations and skincare essentials.
          </p>
          <p className="text-lg text-gray-700">
            What sets Gloss&Glam apart is our commitment to creating products that not only look beautiful but also feel amazing on the skin. We believe that makeup should enhance your natural beauty, not mask it.
          </p>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="bg-pink-50 py-16 px-4 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Quality</h3>
            <p className="text-gray-700">
              We never compromise on quality. Every Gloss&Glam product undergoes rigorous testing to ensure it meets our high standards for performance, pigmentation, and longevity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
            <p className="text-gray-700">
              Beauty comes in all shapes, sizes, and colors. We create products with a wide range of shades and formulations to suit every skin tone and type.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Sustainability</h3>
            <p className="text-gray-700">
              We're committed to reducing our environmental impact. From recyclable packaging to cruelty-free formulations, we strive to make choices that are good for both you and the planet.
            </p>
          </div>
        </div>
      </div>
       {/* Meet the Founder */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet the Founder</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://export-download.canva.com/_fTbw/DAGjGl_fTbw/13/0/0003-6876331634270600564.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250330T053820Z&X-Amz-Expires=13932&X-Amz-Signature=620a1bd16390767d88586c4a4d47c7895f32b851a2945772b043ec7afe68b2cc&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sun%2C%2030%20Mar%202025%2009%3A30%3A32%20GMT"
              alt="Krushita, Founder of Gloss&Glam"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-3">Krushita</h3>
            <p className="text-lg text-gray-700 mb-4">
              With over a decade of experience in the beauty industry, Krushita has always been passionate about helping people feel confident in their own skin. Her journey began as a makeup artist, where she worked with clients from all walks of life.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              "I created Gloss&Glam because I believe that everyone deserves access to high-quality beauty products that make them feel amazing. Makeup is not just about looking good—it's about feeling good and expressing yourself."
            </p>
            <p className="text-lg text-gray-700">
              When she's not developing new products or connecting with customers, Krushita enjoys traveling, practicing yoga, and experimenting with new makeup looks that she shares on social media.
            </p>
          </div>
        </div>
      </div>
      
      {/* Tagline */}
      <div className="text-center py-12 bg-pink-100 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold italic">
          "Stay Glossy, Stay Glam!"
        </h2>
      </div>
    </div>
  );
}