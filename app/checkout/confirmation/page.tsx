"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Truck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order') || 'GG000000';
  
  // Estimated delivery date (5 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  // Mock order items
  const orderItems = [
    {
      name: 'Velvet Matte Lipstick - Ruby Red',
      price: 599,
      quantity: 1,
    },
    {
      name: 'Dewy Finish Foundation - Medium',
      price: 799,
      quantity: 1,
    },
  ];
  
  // Calculate order total
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 49;
  const total = subtotal + shipping;
  
  // Animation for progress
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Thank You for Shopping with Gloss&Glam! 💄</h1>
          <p className="text-gray-600">
            Your order has been received and is being processed.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h2 className="text-sm font-medium text-gray-500">Order Number</h2>
              <p className="text-lg font-bold">{orderNumber}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="text-sm font-medium text-gray-500">Estimated Delivery</h2>
              <p className="text-lg font-bold">{formattedDeliveryDate}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Order Status</h3>
            <Progress value={progress} className="h-2 mb-4" />
            <div className="flex justify-between text-sm">
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center mb-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span>Confirmed</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mb-1">
                  <Package className="h-4 w-4 text-gray-500" />
                </div>
                <span>Processing</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mb-1">
                  <Truck className="h-4 w-4 text-gray-500" />
                </div>
                <span>Shipped</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mb-1">
                  <CheckCircle className="h-4 w-4 text-gray-500" />
                </div>
                <span>Delivered</span>
              </div>
            </div>
          </div>
          
          <h3 className="font-medium mb-4">Order Summary</h3>
          <div className="space-y-4 mb-6">
            {orderItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            We've sent a confirmation email with all the details of your order.
            If you have any questions, please contact our customer support.
          </p>
          <Link href="/">
            <Button className="bg-pink-500 hover:bg-pink-600">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
