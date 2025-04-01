import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter, SlidersHorizontal } from 'lucide-react';

// Mock data for products
const productsData = {
  lips: {
    title: 'Lips',
    description: 'Discover our range of luxurious lipsticks, glosses, and lip care products.',
    products: [
      {
        id: 'lip-1',
        name: 'Velvet Matte Lipstick',
        price: 599,
        image:'https://images.unsplash.com/photo-1630612467948-26b138e63246?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=clem-onojeghuo--gGy9hVunhE-unsplash.jpg&w=640',

        type: 'Lipstick',
        shades: ['Red', 'Pink', 'Nude'],
      },
      {
        id: 'lip-2',
        name: 'Hydrating Lip Gloss',
        price: 499,
        image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Lip Gloss',
        shades: ['Clear', 'Pink Shimmer', 'Coral'],
      },
      {
        id: 'lip-3',
        name: 'Creamy Lip Liner',
        price: 349,
        image: 'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/2/0/0001-6876331538654029399.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250328T225618Z&X-Amz-Expires=45785&X-Amz-Signature=23b8481bbf3cbc637b78392a13fb921916aadfde3029abca9e8720f173e1b12c&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Untitled%2520design.png&response-expires=Sat%2C%2029%20Mar%202025%2011%3A39%3A23%20GMT',
        type: 'Lip Liner',
        shades: ['Nude', 'Red', 'Plum'],
      },
      {
        id: 'lip-4',
        name: 'Matte Liquid Lipstick',
        price: 649,
        image: 'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/4/0/0001-2590030594090107095.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250329%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250329T083448Z&X-Amz-Expires=14198&X-Amz-Signature=834ceadd823fd2f0eeb74cc02cd98e12cabfb74b61e002c0570f963c5caa0709&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Untitled%2520design.png&response-expires=Sat%2C%2029%20Mar%202025%2012%3A31%3A26%20GMT',
        shades: ['Berry', 'Mauve', 'Brown'],
      },
      {
        id: 'lip-5',
        name: 'Tinted Lip Balm',
        price: 299,
        image: 'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/11/0/0001-6795266751221908522.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250328T154545Z&X-Amz-Expires=75967&X-Amz-Signature=33ca80a37d2d38befbd2e01dd7ff5cccaf4f2dc115195d9c2f86c3774b4f9cdc&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sat%2C%2029%20Mar%202025%2012%3A51%3A52%20GMT',
        type: 'Lip Balm',
        shades: ['Rose', 'Peach', 'Cherry'],
      },
      {
        id: 'lip-6',
        name: 'Long-Wear Lip Stain',
        price: 549,
        image: 'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/11/0/0002-8508886409399508205.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250328T155445Z&X-Amz-Expires=74140&X-Amz-Signature=f90cb232e81747c28c914c1a3028187335703bdedc856ea2857f0a310d127890&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sat%2C%2029%20Mar%202025%2012%3A30%3A25%20GMT',
        type: 'Lip Stain',
        shades: ['Red', 'Pink', 'Orange'],
      },
    ],
  },
  eyes: {
    title: 'Eyes',
    description: 'Enhance your eyes with our range of eyeshadows, mascaras, and liners.',
    products: [
      {
        id: 'eye-1',
        name: 'Shimmer Eyeshadow Palette',
        price: 899,
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Eyeshadow',
        shades: ['Neutrals', 'Smoky', 'Colorful'],
      },
      {
        id: 'eye-2',
        name: 'Volumizing Mascara',
        price: 549,
        image: 'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/15/0/0001-4868852113700306414.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250330T041723Z&X-Amz-Expires=30436&X-Amz-Signature=a6c67dc0ff1e3afe2ae735dcc0ceb7909b203efa34cc8b0e898c5c725bc1043a&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sun%2C%2030%20Mar%202025%2012%3A44%3A39%20GMT',
        type: 'Mascara',
        shades: ['Black', 'Brown'],
      },
      {
        id: 'eye-3',
        name: 'Precision Liquid Eyeliner',
        price: 449,
        image: 'https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Eyeliner',
        shades: ['Black', 'Brown', 'Blue'],
      },
      {
        id: 'eye-4',
        name: 'Brow Defining Pencil',
        price: 399,
        image: 'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/17/0/0001-3939984690051768327.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250330T083422Z&X-Amz-Expires=14915&X-Amz-Signature=250a39047f3b646e6ed29fd8504ac6baace61ac4c01c3e6e4098824c0757e855&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sun%2C%2030%20Mar%202025%2012%3A42%3A57%20GMT',
        type: 'Brow',
        shades: ['Black', 'Brown', 'Taupe'],
      },
      {
        id: 'eye-5',
        name: 'Waterproof Kohl Pencil',
        price: 349,
        image: 'https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Eyeliner',
        shades: ['Black', 'Brown', 'Grey'],
      },
      {
        id: 'eye-6',
        name: 'Matte Eyeshadow Singles',
        price: 299,
        image: 'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/18/0/0001-2313059327030036380.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250330T055548Z&X-Amz-Expires=25148&X-Amz-Signature=b3b4916bbb276e90384e18b43c1755d068bca93952e3e9923df035a2f4d1312e&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sun%2C%2030%20Mar%202025%2012%3A54%3A56%20GMT',
        type: 'Eyeshadow',
        shades: ['Taupe', 'Brown', 'Black'],
      },
    ],
  },
  face: {
    title: 'Face',
    description: 'Perfect your complexion with our foundations, concealers, and powders.',
    products: [
      {
        id: 'face-1',
        name: 'Dewy Finish Foundation',
        price: 799,
        image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Foundation',
        shades: ['Fair', 'Medium', 'Tan', 'Deep'],
      },
      {
        id: 'face-2',
        name: 'Full Coverage Concealer',
        price: 549,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Concealer',
        shades: ['Fair', 'Medium', 'Tan', 'Deep'],
      },
      {
        id: 'face-3',
        name: 'Translucent Setting Powder',
        price: 649,
        image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Powder',
        shades: ['Translucent', 'Banana', 'Deep'],
      },
      {
        id: 'face-4',
        name: 'Cream Blush',
        price: 499,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Blush',
        shades: ['Pink', 'Peach', 'Berry'],
      },
      {
        id: 'face-5',
        name: 'Highlighting Powder',
        price: 599,
        image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Highlighter',
        shades: ['Gold', 'Rose Gold', 'Champagne'],
      },
      {
        id: 'face-6',
        name: 'Bronzing Powder',
        price: 599,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Bronzer',
        shades: ['Light', 'Medium', 'Deep'],
      },
    ],
  },
  nails: {
    title: 'Nails',
    description: 'Express yourself with our range of nail polishes and nail care products.',
    products: [
      {
        id: 'nail-1',
        name: 'Quick Dry Nail Polish',
        price: 299,
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Nail Polish',
        shades: ['Red', 'Pink', 'Nude', 'Black'],
      },
      {
        id: 'nail-2',
        name: 'Gel Effect Top Coat',
        price: 349,
        image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Top Coat',
        shades: ['Clear'],
      },
      {
        id: 'nail-3',
        name: 'Strengthening Base Coat',
        price: 349,
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Base Coat',
        shades: ['Clear'],
      },
      {
        id: 'nail-4',
        name: 'Nail Polish Remover',
        price: 199,
        image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Nail Care',
        shades: ['N/A'],
      },
      {
        id: 'nail-5',
        name: 'Cuticle Oil',
        price: 249,
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Nail Care',
        shades: ['N/A'],
      },
      {
        id: 'nail-6',
        name: 'Glitter Nail Polish',
        price: 329,
        image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Nail Polish',
        shades: ['Silver', 'Gold', 'Multi'],
      },
    ],
  },
  skin: {
    title: 'Skin',
    description: 'Nourish and protect your skin with our skincare essentials.',
    products: [
      {
        id: 'skin-1',
        name: 'Hydrating Face Moisturizer',
        price: 699,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Moisturizer',
        shades: ['N/A'],
      },
      {
        id: 'skin-2',
        name: 'Gentle Cleansing Gel',
        price: 549,
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Cleanser',
        shades: ['N/A'],
      },
      {
        id: 'skin-3',
        name: 'Vitamin C Serum',
        price: 899,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Serum',
        shades: ['N/A'],
      },
      {
        id: 'skin-4',
        name: 'Exfoliating Face Scrub',
        price: 499,
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Exfoliator',
        shades: ['N/A'],
      },
      {
        id: 'skin-5',
        name: 'Hydrating Sheet Mask',
        price: 149,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Mask',
        shades: ['N/A'],
      },
      {
        id: 'skin-6',
        name: 'SPF 50 Sunscreen',
        price: 599,
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        type: 'Sunscreen',
        shades: ['N/A'],
      },
    ],
  },
};

const newArrivals = [
  {
    id: '1',
    name: 'Velvet Matte Lipstick',
    category: 'Lips',
    price: '599',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Shimmer Eyeshadow Palette',
    category: 'Eyes',
    price: '899',
    originalPrice: '1299',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Dewy Finish Foundation',
    category: 'Face',
    price: '799',
    image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Quick Dry Nail Polish',
    category: 'Nails',
    price: '299',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    text: 'The lipsticks from Gloss&Glam are amazing! They stay on all day and the colors are so vibrant. Definitely my go-to makeup brand now.',
  },
  {
    name: 'Ananya Patel',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    text: 'I love their foundation range! Finally found the perfect shade for my skin tone. The coverage is excellent and it feels so lightweight.',
  },
  {
    name: 'Riya Kapoor',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    text: 'The eyeshadow palettes are to die for! Such pigmented colors and they blend so easily. Plus, the packaging is gorgeous!',
  },
];

const instagramPosts = [
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599733589046-833caccbbd03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
];


export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Get category data or default to lips if not found
  const categoryData = productsData[slug as keyof typeof productsData] || productsData.lips;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{categoryData.title}</h1>
        <p className="text-gray-600">{categoryData.description}</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Filters</h2>
              <SlidersHorizontal className="h-5 w-5 text-gray-500" />
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Price Range</h3>
              <Slider
                defaultValue={[0, 1000]}
                max={2000}
                step={100}
                className="mb-2"
              />
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>₹0</span>
                <span>₹2000</span>
              </div>
            </div>
            
            {/* Product Type */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Product Type</h3>
              <div className="space-y-2">
                {Array.from(new Set(categoryData.products.map(p => p.type))).map((type) => (
                  <div key={type} className="flex items-center">
                    <Checkbox id={`type-${type}`} />
                    <Label htmlFor={`type-${type}`} className="ml-2 text-sm">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Shades */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Shades</h3>
              <div className="space-y-2">
                {Array.from(new Set(categoryData.products.flatMap(p => p.shades))).filter(shade => shade !== 'N/A').map((shade) => (
                  <div key={shade} className="flex items-center">
                    <Checkbox id={`shade-${shade}`} />
                    <Label htmlFor={`shade-${shade}`} className="ml-2 text-sm">
                      {shade}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button className="w-full bg-pink-500 hover:bg-pink-600">
              Apply Filters
            </Button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium group-hover:text-pink-500 transition-colors">{product.name}</h3>
                    <p className="text-gray-500 text-sm">{product.type}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="font-bold">₹{product.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  

}export async function generateStaticParams() {
  // Replace this array with your real categories or slugs
  const categories = ['lips', 'eyes', 'face','nails','skin','offers'];
  const newArrivals=['1','2','3','4'];

  return categories.map((slug) => ({
    slug,
  }))
}
