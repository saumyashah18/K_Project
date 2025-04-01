import { notFound } from 'next/navigation';
import ProductPageClient from './ProductPageClient';
import { Images } from 'lucide-react';


// Mock product data

const productsData : Record<string, Product> = {
  'lip-1': {
    id: 'lip-1',
    name: 'Velvet Matte Lipstick',
    price: 599,
    description: 'A luxurious matte lipstick with a velvety finish that lasts all day. Enriched with moisturizing ingredients to keep your lips soft and hydrated.',
    features: [
      'Long-lasting formula (up to 8 hours)',
      'Enriched with vitamin E and jojoba oil',
      'Highly pigmented colors',
      'Cruelty-free and vegan',
      'Paraben-free',
    ],
    howToUse: 'Apply directly to clean, dry lips. For a more defined look, outline lips with a lip liner first. Blot with tissue for a more matte finish.',
    ingredients: 'Ricinus Communis (Castor) Seed Oil, Caprylic/Capric Triglyceride, Cetyl Ethylhexanoate, Candelilla Cera, Silica, Microcrystalline Cera, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopheryl Acetate, Parfum, Limonene, Linalool, CI 15850, CI 77491.',
    images: [
      'https://images.unsplash.com/photo-1630612467948-26b138e63246?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=clem-onojeghuo--gGy9hVunhE-unsplash.jpg&w=640',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631214524085-17874764a0e5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ashley-piszek-9XLxrws19Cw-unsplash.jpg&w=640',

    ],
    category: 'Lips',
    type: 'Lipstick',
    shades: [
      { name: 'Ruby Red', color: '#C0392B' },
      { name: 'Mauve Pink', color: '#C39BD3' },
      { name: 'Nude Beige', color: '#E6B89C' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Priya S.',
        rating: 5,
        date: '2023-05-15',
        comment: 'This is the best lipstick I\'ve ever used! The color is gorgeous and it stays on all day without drying my lips.',
      },
      {
        id: 2,
        user: 'Ananya P.',
        rating: 4,
        date: '2023-04-22',
        comment: 'Beautiful color and very comfortable to wear. It does transfer a bit when eating, but that\'s expected with most lipsticks.',
      },
      {
        id: 3,
        user: 'Riya K.',
        rating: 5,
        date: '2023-03-10',
        comment: 'The formula is amazing! So creamy and pigmented. Will definitely buy more shades.',
      },
    ],
    relatedProducts: ['lip-2', 'lip-3', 'lip-4'],
    
  }, 'lip-2': {
    id: 'lip-2',
    name: 'Hydrating Lip Gloss',
    price: 299,
    description: 'A high-shine lip gloss with a non-sticky formula that provides hydration and a plumping effect.',
    features: [
      'Non-sticky and lightweight',
      'Infused with hyaluronic acid',
      'Available in multiple sheer shades',
    ],
    howToUse: 'Apply directly to clean, dry lips. For a more defined look, outline lips with a lip liner first.',
    ingredients: 'Ricinus Communis (Castor) Seed Oil,',
     images: [
      'https://images.unsplash.com/photo-1631214524085-17874764a0e5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ashley-piszek-9XLxrws19Cw-unsplash.jpg&w=640',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1630612467948-26b138e63246?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=clem-onojeghuo--gGy9hVunhE-unsplash.jpg&w=640',

     ]
    ,category: 'Gloss',
    type: 'Lip Gloss',
    shades: [
      { name: 'Peach Glow', color: '#FFDAB9' },
      { name: 'Rose Blush', color: '#FF9999' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Sameksha S.',
        rating: 4.5,
        date: '2023-04-20',
        comment: 'This is the best lipgloss I\'ve ever used!'},
      {}],
    relatedProducts: ['lip-1', 'lip-3', 'lip-5'],
  },
  'lip-3' :{
    id: 'lip-3',
    name: 'Creamy Lip Liner',
    price: 349,
    description: 'A smooth and creamy lip liner that glides effortlessly to define and shape lips with precision.',
    features: [
      'Long-lasting and smudge-proof formula',
      'Ultra-creamy texture for easy application',
      'Available in a range of complementary shades',
      'Enriched with nourishing ingredients',
    ],
    howToUse: 'Outline lips starting from the cupid’s bow, following the natural shape. Can be used to fill in lips for a fuller effect before applying lipstick or gloss.',
    ingredients: 'Hydrogenated Polyisobutene, Synthetic Wax, Beeswax, Tocopheryl Acetate, CI 15850, CI 77491.',
    images: [
      'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/2/0/0001-6876331538654029399.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250328T225618Z&X-Amz-Expires=45785&X-Amz-Signature=23b8481bbf3cbc637b78392a13fb921916aadfde3029abca9e8720f173e1b12c&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Untitled%2520design.png&response-expires=Sat%2C%2029%20Mar%202025%2011%3A39%3A23%20GMT',
      'https://images.unsplash.com/photo-1630612467948-26b138e63246?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=clem-onojeghuo--gGy9hVunhE-unsplash.jpg&w=640',
    ],
    category: 'Lip Liner',
    type: 'Lip Liner',
    shades: [
      { name: 'Classic Red', color: '#C70039' },
      { name: 'Deep Plum', color: '#800080' },
      { name: 'Warm Nude', color: '#D2B48C' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Sameksha S.',
        rating: 4.5,
        date: '2023-04-20',
        comment: 'This is the best lip liner I\'ve ever used! It glides smoothly and lasts all day.',
      },
      {
        id: 2,
        user: 'Meera D.',
        rating: 5,
        date: '2023-06-10',
        comment: 'I love the creamy texture! It helps my lipstick stay in place without feathering.',
      },
      {
        id: 3,
        user: 'Aditi R.',
        rating: 4,
        date: '2023-07-05',
        comment: 'Beautiful shades! The only downside is that I have to sharpen it often, but otherwise, it’s perfect.',
      },
    ],
    relatedProducts: ['lip-1', 'lip-2', 'lip-4'],
},
'lip-4': {
    id: 'lip-4',
    name: 'Matte Liquid Lipstick',
    price: 649,
    description: 'A highly pigmented, long-wear liquid lipstick that dries to a smooth matte finish without drying out your lips.',
    features: [
      'Transfer-proof and long-lasting wear (up to 12 hours)',
      'Intensely pigmented formula',
      'Lightweight and comfortable on lips',
      'Enriched with hydrating ingredients',
    ],
    howToUse: 'Use the applicator to glide the lipstick onto clean, dry lips. Allow it to set for a few seconds for a smudge-proof finish.',
    ingredients: 'Isododecane, Dimethicone, Cyclopentasiloxane, CI 15850, CI 77491, Tocopheryl Acetate.',
    images: [
      'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/4/0/0001-2590030594090107095.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250329%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250329T083448Z&X-Amz-Expires=14198&X-Amz-Signature=834ceadd823fd2f0eeb74cc02cd98e12cabfb74b61e002c0570f963c5caa0709&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Untitled%2520design.png&response-expires=Sat%2C%2029%20Mar%202025%2012%3A31%3A26%20GMT',
      'https://images.unsplash.com/photo-1630612467948-26b138e63246?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=clem-onojeghuo--gGy9hVunhE-unsplash.jpg&w=640',

    ],
    category: 'Liquid Lipstick',
    type: 'Lipstick',
    shades: [
      { name: 'Crimson Passion', color: '#B22222' },
      { name: 'Burnt Sienna', color: '#E97451' },
      { name: 'Mocha Brown', color: '#654321' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Sneha T.',
        rating: 5,
        date: '2023-08-15',
        comment: 'The best liquid lipstick I\'ve tried! It stays on all day without cracking.',
      },
      {
        id: 2,
        user: 'Kavya M.',
        rating: 4.5,
        date: '2023-09-10',
        comment: 'Beautiful matte finish, but make sure to exfoliate your lips before applying.',
      },
      {
        id: 3,
        user: 'Radhika J.',
        rating: 5,
        date: '2023-10-05',
        comment: 'Absolutely stunning colors! Doesn’t feel heavy on the lips at all.',
      },
    ],
    relatedProducts: ['lip-2', 'lip-3', 'lip-5'],
  },
  'lip-5': {
    id: 'lip-5',
    name: 'Tinted Lip Balm',
    price: 299,
    description: 'A moisturizing tinted lip balm that provides a sheer wash of color while keeping lips soft and hydrated.',
    features: [
      'Infused with shea butter and coconut oil',
      'Sheer and buildable color',
      'Lightweight and non-sticky',
      'Dermatologically tested',
    ],
    howToUse: 'Apply directly to lips whenever hydration is needed. Reapply as needed throughout the day.',
    ingredients: 'Shea Butter, Cocos Nucifera (Coconut) Oil, Beeswax, CI 15850, CI 77491.',
    images: [
      'https://images.unsplash.com/photo-1630612467948-26b138e63246?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=clem-onojeghuo--gGy9hVunhE-unsplash.jpg&w=640',

      'https://images.unsplash.com/photo-1598628411783-78f675d586d1?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    ],
    category: 'Lip Balm',
    type: 'Balm',
    shades: [
      { name: 'Berry Bliss', color: '#A52A2A' },
      { name: 'Peach Sorbet', color: '#FFA07A' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Sanya R.',
        rating: 4.5,
        date: '2023-06-22',
        comment: 'Super hydrating and gives just the right amount of color!',
      },
      {
        id: 2,
        user: 'Aditi P.',
        rating: 5,
        date: '2023-07-05',
        comment: 'I love how smooth it feels! A must-have for daily use.',
      },
      {
        id: 3,
        user: 'Meera J.',
        rating: 4,
        date: '2023-08-15',
        comment: 'Nice tint, but I wish it lasted longer.',
      },
    ],
    relatedProducts: ['lip-2', 'lip-3', 'lip-6'],
  },

'lip-6': {
    id: 'lip-6',
    name: 'Long-Wear Lip Stain',
    price: 549,
    description: 'A lightweight, smudge-proof lip stain that delivers rich color and stays put for hours.',
    features: [
      'Transfer-resistant and waterproof',
      'Buildable intensity',
      'Contains hydrating ingredients for comfort',
      'Lightweight, non-drying formula',
    ],
    howToUse: 'Apply a thin layer to clean, dry lips. Let it dry for a few seconds before layering if needed.',
    ingredients: 'Water, Glycerin, CI 15850, CI 77491, Dimethicone, Silica.',
    images: [
      'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/11/0/0002-8508886409399508205.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250328T155445Z&X-Amz-Expires=74140&X-Amz-Signature=f90cb232e81747c28c914c1a3028187335703bdedc856ea2857f0a310d127890&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sat%2C%2029%20Mar%202025%2012%3A30%3A25%20GMT',
      '',
    ],
    category: 'Lip Stain',
    type: 'Stain',
    shades: [
      { name: 'Cherry Crush', color: '#D2042D' },
      { name: 'Deep Plum', color: '#5D3A9B' },
      { name: 'Coral Kiss', color: '#FF6F61' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Neha K.',
        rating: 5,
        date: '2023-09-10',
        comment: 'Love how lightweight it is! Lasts all day without drying.',
      },
      {
        id: 2,
        user: 'Simran D.',
        rating: 4.5,
        date: '2023-10-02',
        comment: 'The color payoff is amazing, but removing it takes some effort.',
      },
      {
        id: 3,
        user: 'Anjali M.',
        rating: 4.7,
        date: '2023-10-20',
        comment: 'Perfect stain for everyday wear, doesn’t smudge at all!',
      },
    ],
    relatedProducts: ['lip-1', 'lip-4', 'lip-5'],
  },
  'eye-1': {
    id: 'eye-1',
    name: 'Shimmer Eyeshadow Palette',
    price: 899,
    description: 'A stunning palette featuring 12 highly-pigmented shimmer eyeshadows in a range of versatile colors. Perfect for creating everything from subtle day looks to dramatic evening styles.',
    features: [
      'Highly pigmented formula',
      'Minimal fallout',
      'Blends easily',
      'Long-lasting wear (up to 12 hours)',
      'Cruelty-free and vegan',
    ],
    howToUse: 'Apply with fingertips for maximum color payoff or use a brush for a more subtle effect. Can be used wet for an intense metallic finish.',
    ingredients: 'Talc, Mica, Octyldodecyl Stearoyl Stearate, Zinc Stearate, Dimethicone, Caprylyl Glycol, Ethylhexylglycerin, Tin Oxide, CI 77891, CI 77491, CI 77492, CI 77499, CI  77007, CI 77288.',
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583241119307-d36aba3f0603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631214503851-29fa43efb823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    ],
    category: 'Eyes',
    type: 'Eyeshadow',
    shades: [
      { name: 'Neutrals', color: '#E6B89C' },
      { name: 'Smoky', color: '#5D6D7E' },
      { name: 'Colorful', color: '#8E44AD' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Meera R.',
        rating: 5,
        date: '2023-06-10',
        comment: 'The pigmentation is incredible! These shadows blend like a dream and the shimmer is perfect - not too glittery but still gives a beautiful glow.',
      },
      {
        id: 2,
        user: 'Divya T.',
        rating: 4,
        date: '2023-05-28',
        comment: 'Beautiful palette with versatile shades. There is some fallout with the darker colors, but the staying power is excellent.',
      },
      {
        id: 3,
        user: 'Neha S.',
        rating: 5,
        date: '2023-04-15',
        comment: 'This palette is worth every rupee! The colors are gorgeous and they last all day without creasing.',
      },
    ],
    relatedProducts: ['eye-2', 'eye-3', 'eye-6'],
  },
  'eye-2': {
    id: 'eye-2',
    name: 'Volumizing Mascara',
    price: 549,
    description: 'A high-impact volumizing mascara that delivers dramatic lashes with intense black color and all-day hold.',
    features: [
      'Smudge-proof and waterproof',
      'Infused with nourishing castor oil',
      'Buildable volume',
      'Long-lasting wear (up to 12 hours)',
      'Cruelty-free and vegan',
    ],
    howToUse: 'Apply from the base to the tips of your lashes in a zigzag motion. Add layers for more volume.',
    ingredients: 'Aqua, Beeswax, Glyceryl Stearate, Acacia Senegal Gum, CI 77499.',
    images: [
      'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/15/0/0001-4868852113700306414.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250330T041723Z&X-Amz-Expires=30436&X-Amz-Signature=a6c67dc0ff1e3afe2ae735dcc0ceb7909b203efa34cc8b0e898c5c725bc1043a&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sun%2C%2030%20Mar%202025%2012%3A44%3A39%20GMT',
      'https://images.unsplash.com/photo-1603190287605-7cbbc0a5c286?crop=entropy&fit=crop&w=800&q=80'
    ],
    category: 'Mascara',
    type: 'Mascara',
    shades: [
      { name: 'Blackest Black', color: '#000000' },
      { name: 'Brown', color: '#654321' },
    ],
    reviews: [
      { id: 1, user: 'Anika V.', rating: 5, date: '2023-07-15', comment: 'Gives my lashes so much volume and lasts all day!' },
      { id: 2, user: 'Ritika M.', rating: 4, date: '2023-06-10', comment: 'Love the formula, but it takes a little longer to dry.' },
      { id: 3, user: 'Simran J.', rating: 5, date: '2023-05-22', comment: 'Best mascara ever! Doesn’t smudge or flake.' },
    ],
    relatedProducts: ['eye-1', 'eye-3', 'eye-5'],
  },
  'eye-3': {
    id: 'eye-3',
    name: 'Precision Liquid Eyeliner',
    price: 449,
    description: 'An ultra-black liquid eyeliner with a precision tip for flawless application and all-day wear.',
    features: [
      'Waterproof and smudge-proof',
      'Fine tip for precise lines',
      'Dries quickly and stays put',
      'Perfect for winged liner',
      'Cruelty-free and vegan',
    ],
    howToUse: 'Start from the inner corner of the eye and glide the brush along the lash line. Create a winged effect if desired.',
    ingredients: 'Aqua, Acrylates Copolymer, CI 77266 (Carbon Black).',
    images: [
      'https://images.unsplash.com/photo-1562259949-1d1ec42dc4f3?crop=entropy&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517420480421-4150fb0b23de?crop=entropy&fit=crop&w=800&q=80'
    ],
    category: 'Eyeliner',
    type: 'Liquid Eyeliner',
    shades: [
      { name: 'Jet Black', color: '#000000' },
      { name: 'Deep Brown', color: '#4A2C2A' },
    ],
    reviews: [
      { id: 1, user: 'Sneha P.', rating: 5, date: '2023-08-05', comment: 'Super easy to apply and stays on all day!' },
      { id: 2, user: 'Aditi K.', rating: 4, date: '2023-07-20', comment: 'Love the pigmentation but takes a few seconds to dry.' },
      { id: 3, user: 'Tanya R.', rating: 5, date: '2023-06-30', comment: 'Perfect for a sharp winged look!' },
    ],
    relatedProducts: ['eye-1', 'eye-2', 'eye-6'],
  },
  'eye-4': {
    id: 'eye-4',
    name: 'Brow Defining Pencil',
    price: 399,
    description: 'A precise brow pencil that fills, shapes, and defines eyebrows naturally.',
    features: [
      'Retractable tip for precision',
      'Includes a spoolie for blending',
      'Long-lasting wear',
      'Smudge-proof and waterproof',
      'Cruelty-free and vegan',
    ],
    howToUse: 'Use light strokes to define brows, then blend with the spoolie for a natural finish.',
    ingredients: 'Synthetic Wax, C10-18 Triglycerides, Caprylic/Capric Triglyceride.',
    images: [
      'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/17/0/0001-3939984690051768327.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250330T083422Z&X-Amz-Expires=14915&X-Amz-Signature=250a39047f3b646e6ed29fd8504ac6baace61ac4c01c3e6e4098824c0757e855&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sun%2C%2030%20Mar%202025%2012%3A42%3A57%20GMT',
      'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/15/0/0001-4868852113700306414.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250330T041723Z&X-Amz-Expires=30436&X-Amz-Signature=a6c67dc0ff1e3afe2ae735dcc0ceb7909b203efa34cc8b0e898c5c725bc1043a&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sun%2C%2030%20Mar%202025%2012%3A44%3A39%20GMT',

    ],
    category: 'Brow',
    type: 'Brow Pencil',
    shades: [
      { name: 'Dark Brown', color: '#5A3E36' },
      { name: 'Taupe', color: '#B29582' },
    ],
    reviews: [
      { id: 1, user: 'Priyanka G.', rating: 5, date: '2023-06-12', comment: 'Perfect for shaping my brows naturally!' },
      { id: 2, user: 'Rhea T.', rating: 4, date: '2023-05-30', comment: 'The color match is great, but I wish it lasted a bit longer.' },
      { id: 3, user: 'Neha M.', rating: 5, date: '2023-04-25', comment: 'So easy to use and looks amazing!' },
    ],
    relatedProducts: ['eye-2', 'eye-5', 'eye-6'],
  },
  'eye-5': {
    id: 'eye-5',
    name: 'Waterproof Kohl Pencil',
    price: 349,
    description: 'An ultra-smooth, waterproof kohl pencil that delivers intense color payoff and stays put all day.',
    features: [
      'Waterproof and smudge-proof',
      'Rich, creamy texture for easy application',
      'Long-lasting formula (up to 12 hours)',
      'Ophthalmologist tested',
      'Suitable for sensitive eyes and contact lens wearers',
    ],
    howToUse: 'Glide along the lash line for a defined look or blend out for a smoky effect. Can also be used on the waterline.',
    ingredients: 'Hydrogenated Jojoba Oil, Candelilla Wax, CI 77499, Tocopheryl Acetate, Dimethicone.',
    images: [
      'https://images.unsplash.com/photo-1591797043642-17c67a97b40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591797043744-53e01fc260b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    category: 'Eyeliner',
    type: 'Kohl Pencil',
    shades: [
      { name: 'Jet Black', color: '#000000' },
      { name: 'Deep Brown', color: '#4E342E' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Sneha M.',
        rating: 5,
        date: '2023-07-10',
        comment: 'This kohl pencil is amazing! It glides so smoothly and stays on all day without smudging.',
      },
      {
        id: 2,
        user: 'Ritika P.',
        rating: 4,
        date: '2023-06-22',
        comment: 'Great pigmentation, but I wish it came with a built-in sharpener.',
      },
    ],
    relatedProducts: ['eye-3', 'eye-4', 'eye-6'],
  },
  'eye-6': {
    id: 'eye-6',
    name: 'Matte Eyeshadow Single',
    price: 299,
    description: 'A highly pigmented matte eyeshadow available in stunning single shades for versatile eye looks.',
    features: [
      'Silky smooth texture',
      'Blendable and buildable',
      'Long-wearing formula',
      'No creasing or fallout',
      'Cruelty-free and vegan',
    ],
    howToUse: 'Apply with a brush or fingertip to the eyelid. Can be used alone or blended with other shades for a custom look.',
    ingredients: 'Talc, Mica, Silica, Caprylic/Capric Triglyceride, CI 77491, CI 77492, CI 77499.',
    images: [
      'https://export-download.canva.com/_fTbw/DAGjGl_fTbw/18/0/0001-2313059327030036380.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250330T055548Z&X-Amz-Expires=25148&X-Amz-Signature=b3b4916bbb276e90384e18b43c1755d068bca93952e3e9923df035a2f4d1312e&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Lip%2520Stain.png&response-expires=Sun%2C%2030%20Mar%202025%2012%3A54%3A56%20GMT',
      'https://images.unsplash.com/photo-1617898722273-fcad5b4de62c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    category: 'Eyeshadow',
    type: 'Single Eyeshadow',
    shades: [
      { name: 'Warm Taupe', color: '#B89E8E' },
      { name: 'Deep Plum', color: '#5D3A66' },
      { name: 'Burnt Orange', color: '#D35400' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Ayesha K.',
        rating: 5,
        date: '2023-07-02',
        comment: 'These eyeshadows are stunning! The pigment is rich, and they blend effortlessly.',
      },
      {
        id: 2,
        user: 'Priyanka N.',
        rating: 4,
        date: '2023-06-10',
        comment: 'Great matte finish, but some fallout when applying.',
      },
      {
        id: 3,
        user: 'Rhea S.',
        rating: 5,
        date: '2023-05-15',
        comment: 'Love the color selection! Perfect for everyday wear.',
      },
    ],
    relatedProducts: ['eye-1', 'eye-2', 'eye-5'],
  },
  'face-1': {
    id: 'face-1',
    name: 'Dewy Finish Foundation',
    price: 799,
    description: 'A lightweight, buildable foundation that gives your skin a natural, dewy finish. Hydrating formula with medium coverage that lasts all day.',
    features: [
      'Medium, buildable coverage',
      'Dewy, natural finish',
      'Hydrating formula with hyaluronic acid',
      'SPF 15 protection',
      'Available in 24 shades',
      'Oil-free and non-comedogenic',
    ],
    howToUse: 'Apply with fingers, brush, or sponge after moisturizer and primer. Build coverage as needed by adding thin layers.',
    ingredients: 'Aqua, Cyclopentasiloxane, Glycerin, Dimethicone, Phenyl Trimethicone, PEG-10 Dimethicone, Sodium Hyaluronate, Tocopheryl Acetate, Titanium Dioxide, Iron Oxides.',
    images: [
      'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631214503851-29fa43efb823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    ],
    category: 'Face',
    type: 'Foundation',
    shades: [
      { name: 'Fair', color: '#F5DBCB' },
      { name: 'Medium', color: '#E6B89C' },
      { name: 'Tan', color: '#C68642' },
      { name: 'Deep', color: '#8D5524' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Anjali M.',
        rating: 5,
        date: '2023-06-20',
        comment: 'Finally found my perfect shade! This foundation gives such a beautiful finish without looking cakey. My skin looks naturally glowy all day.',
      },
      {
        id: 2,
        user: 'Kavita P.',
        rating: 4,
        date: '2023-05-15',
        comment: 'Great foundation for my dry skin. It gives a beautiful dewy finish and doesn\'t emphasize dry patches. Lasts about 8 hours before I need to touch up.',
      },
      {
        id: 3,
        user: 'Sonia G.',
        rating: 5,
        date: '2023-04-30',
        comment: 'The best foundation I\'ve ever used! It feels so lightweight but still provides good coverage. My skin looks healthy and radiant.',
      },
    ],
    relatedProducts: ['face-2', 'face-3', 'face-5'],
  },
  'face-2': {
    id: 'face-2',
    name: 'Full Coverage Concealer',
    price: 549,
    description: 'A highly pigmented, full-coverage concealer that covers blemishes, dark circles, and imperfections for a flawless finish.',
    features: [
      'Full-coverage formula',
      'Lightweight and long-wearing',
      'Crease-resistant and non-cakey',
      'Infused with hydrating ingredients',
      'Available in 16 shades',
      'Suitable for all skin types',
    ],
    howToUse: 'Dot onto areas that need coverage and blend using a brush, sponge, or fingertips. Set with powder for a long-lasting finish.',
    ingredients: 'Aqua, Cyclopentasiloxane, Dimethicone, Glycerin, Tocopheryl Acetate, Titanium Dioxide, Iron Oxides.',
    images: [
      'https://images.unsplash.com/photo-1614850523133-65b66b6a6f88?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558371710-37b6a09d4e3a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571689947073-50ad71c2f309?auto=format&fit=crop&w=800&q=80',
    ],
    category: 'Face',
    type: 'Concealer',
    shades: [
      { name: 'Fair', color: '#F8E0C3' },
      { name: 'Light', color: '#EAC4A1' },
      { name: 'Medium', color: '#C79A6A' },
      { name: 'Deep', color: '#8A5A30' },
    ],
    reviews: [
      {
        id: 1,
        user: 'Priya R.',
        rating: 5,
        date: '2023-07-12',
        comment: 'This concealer is a lifesaver! It completely covers my dark circles without feeling heavy. Lasts all day with no creasing.',
      },
      {
        id: 2,
        user: 'Megha S.',
        rating: 4,
        date: '2023-06-25',
        comment: 'Love the coverage and smooth finish. It blends beautifully, but I wish it came in more shades.',
      },],
  'nail-1': {
    id: 'nail-1',
    name: 'Quick Dry Nail Polish',
    price: 249,
    description: 'A fast-drying nail polish that delivers vibrant color and a glossy finish in just one coat.',
    features: [
      'Quick-dry formula',
      'High-shine finish',
      'Chip-resistant',
      'Available in 15 shades',
    ],
    howToUse: 'Apply one or two coats to clean, dry nails. Allow to dry completely before applying a top coat.',
    ingredients: 'Butyl Acetate, Ethyl Acetate, Nitrocellulose, Adipic Acid, Neopentyl Glycol, Trimellitic Anhydride Copolymer.',
    images: [
      'https://images.unsplash.com/photo-1586281380349-632531db3d2f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800',
      'https://images.unsplash.com/photo-1600369673231-1b7159b8f7cc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800'
    ],
    category: 'Nail Polish',
    type: 'Nail Polish',
    shades: [
      { name: 'Cherry Red', color: '#D2042D' },
      { name: 'Ocean Blue', color: '#1E90FF' },
      { name: 'Classic Nude', color: '#E3BC9A' },
    ],
    reviews: [
      { id: 1, user: 'Riya S.', rating: 5, date: '2023-07-10', comment: 'Dries super fast! Love the shine and the staying power is impressive.' },
      { id: 2, user: 'Megha T.', rating: 4, date: '2023-06-25', comment: 'Beautiful shades but needs two coats for full opacity.' },
      { id: 3, user: 'Ankita P.', rating: 5, date: '2023-05-15', comment: 'Lasts over a week without chipping! Will definitely buy more colors.' },
    ],
    relatedProducts: ['nail-2', 'nail-3', 'nail-6'],
  },

  'nail-2': {
    id: 'nail-2',
    name: 'Gel Effect Top Coat',
    price: 349,
    description: 'A high-gloss top coat that gives nails a gel-like finish without the need for a UV lamp.',
    features: [
      'Gel-like shine',
      'Extends wear time of nail polish',
      'Chip-resistant formula',
    ],
    howToUse: 'Apply one coat over dry nail polish for a glossy, long-lasting finish.',
    ingredients: 'Acrylates Copolymer, Butyl Acetate, Ethyl Acetate, Nitrocellulose.',
    images: [
      'https://images.unsplash.com/photo-1612348788102-3977c8d9a73c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800'
    ],
    category: 'Top Coat',
    type: 'Nail Polish',
    relatedProducts: ['nail-1', 'nail-3', 'nail-4'],
  },

  'nail-3': {
    id: 'nail-3',
    name: 'Strengthening Base Coat',
    price: 349,
    description: 'A protective base coat that strengthens nails and prevents breakage.',
    features: [
      'Strengthens weak nails',
      'Protects against staining',
      'Smoothes nail surface for polish application',
    ],
    howToUse: 'Apply one coat before nail polish for added protection and longevity.',
    ingredients: 'Nitrocellulose, Butyl Acetate, Ethyl Acetate, Tocopheryl Acetate.',
    images: [
      'https://images.unsplash.com/photo-1610614815256-7d3176e344b2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800'
    ],
    category: 'Base Coat',
    type: 'Nail Care',
    relatedProducts: ['nail-2', 'nail-4', 'nail-5'],
  },

  'nail-4': {
    id: 'nail-4',
    name: 'Nail Polish Remover',
    price: 199,
    description: 'A gentle yet effective nail polish remover that removes color quickly without drying out nails.',
    features: [
      'Acetone-free formula',
      'Enriched with vitamin E',
      'Works on all nail polish types',
    ],
    howToUse: 'Apply to a cotton pad and wipe over nails until polish is completely removed.',
    ingredients: 'Isopropyl Alcohol, Ethyl Acetate, Glycerin, Fragrance.',
    images: [
      'https://images.unsplash.com/photo-1578474322682-fc49b46b588c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800'
    ],
    category: 'Nail Care',
    type: 'Nail Polish Remover',
    relatedProducts: ['nail-3', 'nail-5', 'nail-6'],
  },

  'nail-5': {
    id: 'nail-5',
    name: 'Cuticle Oil',
    price: 249,
    description: 'A nourishing oil that hydrates and strengthens cuticles for healthy-looking nails.',
    features: [
      'Moisturizes and conditions cuticles',
      'Prevents nail breakage',
      'Absorbs quickly',
    ],
    howToUse: 'Massage a few drops into cuticles and nails daily for best results.',
    ingredients: 'Jojoba Oil, Sweet Almond Oil, Vitamin E, Essential Oils.',
    images: [
      'https://images.unsplash.com/photo-1591360281793-60cb6f1ea82f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800'
    ],
    category: 'Nail Care',
    type: 'Cuticle Oil',
    relatedProducts: ['nail-1', 'nail-3', 'nail-4'],
  },

  'nail-6': {
    id: 'nail-6',
    name: 'Glitter Nail Polish',
    price: 329,
    description: 'A dazzling glitter nail polish that adds sparkle and glamour to any manicure.',
    features: [
      'High-intensity glitter effect',
      'Quick-drying formula',
      'Available in multiple shades',
    ],
    howToUse: 'Apply one or two coats to clean, dry nails for a sparkling finish.',
    ingredients: 'Butyl Acetate, Ethyl Acetate, Nitrocellulose, Polyester Glitter.',
    images: [
      'https://images.unsplash.com/photo-1614680376401-0a8415372201?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800'
    ],
    category: 'Nail Polish',
    type: 'Nail Polish',
    relatedProducts: ['nail-1', 'nail-2', 'nail-5'],
  }

  }
}

export async function generateStaticParams() {
  const products = ['1', '2', '3','4','5','6','7']; // or dynamically fetch IDs
  return [
    { id: "lip-1" },
    {id: "lip-2"},
    {id: "lip-3"},
    {id: "lip-4"},
    {id: "lip-5"},
    {id: "lip-6"},
    { id: "eye-1" },
    { id: "eye-2" },
    { id: "eye-3" },
    { id: "eye-4" },
    { id: "eye-5" },
    { id: "eye-6" },
    { id: "face-1" },
    {id:"face-2"},
    {id: "nail-1"},
    {id: "nail-2"},
    {id: "nail-3"},
    {id: "nail-4"},
    {id: "nail-5"},
    {id: "nail-6"},
    {id: "skin-1"},
  ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // ----- 2) Get product data on the server side -----
  const product = productsData[id];

  // If no product found, show a 404 (optional)
  if (!product) {
    notFound();
  }

  // ----- 3) Pass product data to a CLIENT component -----
  return <ProductPageClient product={product} />;
}

// Get all product IDs for fallback
const allProductIds = Object.keys(productsData);
