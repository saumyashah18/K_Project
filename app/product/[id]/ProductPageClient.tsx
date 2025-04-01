"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';



export default function ProductPageClient({ product }: { product: any }) {
  // ----- 1) All client-side hooks here -----
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedShade, setSelectedShade] = useState(product?.shades?.[0] || null);

  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();
  const { toast } = useToast();

  // ----- 2) Handlers that rely on client hooks -----
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: `${product.name} - ${selectedShade.name}`,
      price: product.price,
      image: product.images[0],
      quantity,
    });
    toast({
      title: 'Added to cart',
      description: `${product.name} - ${selectedShade.name} has been added to your cart.`,
    });
  };

  

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // ----- 3) Render UI with your same markup -----
  // Calculate average rating, etc.
  const averageRating = (product?.reviews ?? []).reduce((acc: number, review: any) => acc + review.rating, 0) /
  Math.max(product?.reviews?.length ?? 1, 1); // Prevent division by zero

    product.reviews.length;
  
    console.log(product);
    console.log("Product:", product);
    console.log("Reviews:", product?.reviews);

    

    if (!product || !product.reviews) {
      return <p>Loading or no reviews available...</p>;
    }  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category / Breadcrumb */}
      <div className="mb-4">
        <Link
          href={`/category/${product.category.toLowerCase()}`}
          className="text-sm text-gray-500 hover:text-pink-500"
        >
          {product.category}
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-sm text-gray-700">{product.name}</span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left: Product Images */}
        <div>
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-4">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image: string, index: number) => (
              <button
                key={index}
                className={`relative h-20 w-20 rounded-md overflow-hidden ${
                  selectedImage === index
                    ? 'ring-2 ring-pink-500'
                    : 'ring-1 ring-gray-200'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`${product.name} - view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5"
                  fill={i < Math.round(averageRating) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {averageRating.toFixed(1)} ({product.reviews.length} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold mb-6">₹{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Shade Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">
              Shade: {selectedShade.name}
            </h3>
            <div className="flex space-x-3">
              {product.shades.map((shade: any) => (
                <button
                  key={shade.name}
                  className={`h-8 w-8 rounded-full ${
                    selectedShade.name === shade.name
                      ? 'ring-2 ring-offset-2 ring-pink-500'
                      : ''
                  }`}
                  style={{ backgroundColor: shade.color }}
                  onClick={() => setSelectedShade(shade)}
                  aria-label={`Select ${shade.name} shade`}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Quantity</h3>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-4 w-8 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={increaseQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex space-x-4 mb-8">
            <Button
              className="flex-1 bg-pink-500 hover:bg-pink-600"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to Wishlist</span>
            </Button>
          </div>

          {/* Features */}
          <div className="border-t pt-6">
            <h3 className="font-medium mb-3">Features</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {product.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="how-to-use">
          <TabsList className="w-full justify-start border-b rounded-none">
            <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="how-to-use" className="py-4">
            <p className="text-gray-700">{product.howToUse}</p>
          </TabsContent>
          <TabsContent value="ingredients" className="py-4">
            <p className="text-gray-700">{product.ingredients}</p>
          </TabsContent>
          <TabsContent value="reviews" className="py-4">
            <div className="space-y-6">
              {product.reviews.map((review: any) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{review.user}</h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        fill={i < review.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.relatedProducts.map((relatedId: string) => {(
              <div key={relatedId}>{relatedId}</div>
            )
            // If your main mock data is only in page.tsx, pass it as a prop or re-import here.
            // For simplicity, re-use `product.relatedProducts` array:
            // "lip-2", "lip-3", etc. won't be found unless you define them or filter them out.
            return (
              <Link key={relatedId} href={`/product/${relatedId}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-64">
                    {/* For a real product, fetch related data from server or pass as prop */}
                    <Image
                      src="/placeholder.png"
                      alt={relatedId}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium group-hover:text-pink-500 transition-colors">
                      {relatedId}
                    </h3>
                    <p className="text-gray-500 text-sm">Type</p>
                    <div className="mt-2">
                      <span className="font-bold">₹???</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
