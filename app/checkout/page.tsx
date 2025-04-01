"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/cart-context';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Smartphone, Truck } from 'lucide-react';

const checkoutSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please enter your full address" }),
  city: z.string().min(2, { message: "Please enter your city" }),
  state: z.string().min(2, { message: "Please enter your state" }),
  pincode: z.string().min(6, { message: "Please enter a valid pincode" }),
  paymentMethod: z.enum(["card", "upi", "cod"]),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvv: z.string().optional(),
  upiId: z.string().optional(),
  receiveUpdates: z.boolean().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [discountCode, setDiscountCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  
  // Shipping fee and COD fee
  const shippingFee = 49;
  const codFee = paymentMethod === "cod" ? 30 : 0;
  
  // Calculate total
  const total = subtotal + shippingFee + codFee - discount;
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: user?.email || "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      paymentMethod: "card",
      receiveUpdates: false,
    },
  });
  
  const watchPaymentMethod = form.watch("paymentMethod");
  
  // Handle payment method change
  React.useEffect(() => {
    setPaymentMethod(watchPaymentMethod);
  }, [watchPaymentMethod]);
  
  // Apply discount code
  const applyDiscount = () => {
    if (discountCode.toLowerCase() === "welcome10") {
      const discountAmount = subtotal * 0.1; // 10% discount
      setDiscount(discountAmount);
      toast({
        title: "Discount applied",
        description: "10% discount has been applied to your order.",
      });
    } else if (discountCode.toLowerCase() === "glam20") {
      const discountAmount = subtotal * 0.2; // 20% discount
      setDiscount(discountAmount);
      toast({
        title: "Discount applied",
        description: "20% discount has been applied to your order.",
      });
    } else {
      toast({
        title: "Invalid code",
        description: "The discount code you entered is invalid or expired.",
        variant: "destructive",
      });
    }
  };
  
  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Order data:", data);
    
    // Simulate order processing
    toast({
      title: "Processing your order...",
      description: "Please wait while we process your payment.",
    });
    
    // Simulate API call delay
    setTimeout(() => {
      // Generate random order number
      const orderNumber = `GG${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
      
      // Clear cart and redirect to confirmation page
      clearCart();
      router.push(`/checkout/confirmation?order=${orderNumber}`);
    }, 2000);
  };
  
  // If cart is empty, redirect to home
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Link href="/">
          <Button className="bg-pink-500 hover:bg-pink-600">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-pink-500 hover:text-pink-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>
        <h1 className="text-3xl font-bold mt-4">Checkout</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="receiveUpdates"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-2">
                      <FormControl>
                        <input
                          type="checkbox"
                          className="h-4 w-4 mt-1 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                          checked={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        Keep me updated with exclusive offers and beauty tips
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Shipping Address */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit mobile number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Street address, apartment, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode</FormLabel>
                        <FormControl>
                          <Input placeholder="6-digit pincode" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mt-4">
                  <Label>Country</Label>
                  <Input value="India 🇮🇳" disabled className="bg-gray-50" />
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="space-y-4"
                        >
                          <div className="flex items-center space-x-2 border rounded-md p-3">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center">
                              <CreditCard className="mr-2 h-5 w-5" />
                              Credit/Debit Card
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2 border rounded-md p-3">
                            <RadioGroupItem value="upi" id="upi" />
                            <Label htmlFor="upi" className="flex items-center">
                              <Smartphone className="mr-2 h-5 w-5" />
                              UPI/Google Pay/PhonePe
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2 border rounded-md p-3">
                            <RadioGroupItem value="cod" id="cod" />
                            <Label htmlFor="cod" className="flex items-center">
                              <Truck className="mr-2 h-5 w-5" />
                              Cash on Delivery (₹30 extra)
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Payment Details based on selected method */}
                {paymentMethod === "card" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry">Expiry Date</Label>
                        <Input id="cardExpiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cardCvv">CVV</Label>
                        <Input id="cardCvv" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentMethod === "upi" && (
                  <div className="mt-4">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input id="upiId" placeholder="yourname@upi" />
                  </div>
                )}
                
                {paymentMethod === "cod" && (
                  <div className="mt-4 text-sm text-gray-600">
                    <p>Pay in cash when your order is delivered. Additional fee of ₹30 applies.</p>
                  </div>
                )}
              </div>
              
              {/* Submit Button (Mobile) */}
              <div className="lg:hidden">
                <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600">
                  Place Order - ₹{total.toFixed(2)}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="max-h-80 overflow-y-auto mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-start py-3 border-b">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden bg-gray-100 mr-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            
            {/* Discount Code */}
            <div className="mb-4">
              <Label htmlFor="discountCode">Discount Code</Label>
              <div className="flex mt-1">
                <Input
                  id="discountCode"
                  placeholder="Enter code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="rounded-r-none"
                />
                <Button
                  type="button"
                  onClick={applyDiscount}
                  className="rounded-l-none bg-pink-500 hover:bg-pink-600"
                >
                  Apply
                </Button>
              </div>
            </div>
            
            {/* Price Breakdown */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shippingFee.toFixed(2)}</span>
              </div>
              {codFee > 0 && (
                <div className="flex justify-between">
                  <span>COD Fee</span>
                  <span>₹{codFee.toFixed(2)}</span>
                </div>
              )}
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Submit Button (Desktop) */}
            <div className="hidden lg:block mt-6">
              <Button 
                type="submit"
                onClick={form.handleSubmit(onSubmit)}
                className="w-full bg-pink-500 hover:bg-pink-600"
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}