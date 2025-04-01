import React from 'react';

export default function ShippingPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            At Gloss&Glam, we strive to deliver your beauty products safely and promptly. This Shipping Policy outlines our shipping options, delivery timelines, and other important information.
          </p>
          
          <h2>Shipping Options</h2>
          <p>
            We offer the following shipping options for deliveries within India:
          </p>
          
          <table className="min-w-full border-collapse border border-gray-300 mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Shipping Method</th>
                <th className="border border-gray-300 px-4 py-2">Delivery Time</th>
                <th className="border border-gray-300 px-4 py-2">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Standard Shipping</td>
                <td className="border border-gray-300 px-4 py-2">5-7 business days</td>
                <td className="border border-gray-300 px-4 py-2">₹49</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Express Shipping</td>
                <td className="border border-gray-300 px-4 py-2">2-3 business days</td>
                <td className="border border-gray-300 px-4 py-2">₹99</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Premium Delivery</td>
                <td className="border border-gray-300 px-4 py-2">Next day delivery*</td>
                <td className="border border-gray-300 px-4 py-2">₹199</td>
              </tr>
            </tbody>
          </table>
          
          <p className="text-sm">
            *Next day delivery is available only for orders placed before 2 PM and is limited to select metro cities (Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, and Kolkata).
          </p>
          
          <p>
            For orders above ₹999, we offer FREE standard shipping.
          </p>
          
          <h2>Order Processing Time</h2>
          <p>
            All orders are processed within 24-48 hours (excluding weekends and holidays) after payment confirmation. During sale periods or promotional events, processing time may be extended by 1-2 business days.
          </p>
          
          <h2>Shipping Areas Covered</h2>
          <p>
            We currently ship to all major cities and towns across India. However, delivery to certain remote areas may take additional time or may not be available for all shipping methods.
          </p>
          
          <h2>International Shipping</h2>
          <p>
            We currently do not offer international shipping. Our services are limited to deliveries within India only.
          </p>
          
          <h2>Tracking Your Order</h2>
          <p>
            Once your order is shipped, you will receive a confirmation email with a tracking number and link. You can also track your order by logging into your account on our website or by contacting our customer service team.
          </p>
          
          <h2>Shipping Delays</h2>
          <p>
            While we strive to deliver all orders within the estimated timeframes, delays may occur due to:
          </p>
          <ul>
            <li>Incorrect or incomplete shipping address</li>
            <li>Adverse weather conditions</li>
            <li>Natural disasters</li>
            <li>Courier service delays</li>
            <li>Public holidays</li>
            <li>Other unforeseen circumstances</li>
          </ul>
          
          <p>
            We will make every effort to inform you of any significant delays in your shipment.
          </p>
          
          <h2>Undelivered Packages</h2>
          <p>
            If a package is returned to us due to an incorrect address, refused delivery, or failure to collect from a pickup point, we will contact you to arrange redelivery. Additional shipping charges may apply for redelivery.
          </p>
          
          <h2>Damaged or Lost Packages</h2>
          <p>
            If your package arrives damaged or is lost during transit, please contact our customer service team within 48 hours of the expected delivery date. We will work with the shipping carrier to resolve the issue and arrange for a replacement if necessary.
          </p>
          
          <h2>Contact Information</h2>
          <p>
            If you have any questions about our shipping policy or need assistance with your order, please contact us at:
          </p>
          <p>
            Email: shipping@glossandglam.com<br />
            Phone: +91 1234567890<br />
            Customer Service Hours: Monday to Saturday, 10 AM to 6 PM IST
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Last Updated: May 15, 2025
          </p>
        </div>
      </div>
    </div>
  );
}