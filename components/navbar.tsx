"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShoppingBag, 
  User, 
  Search, 
  Menu, 
  X,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import { useAuth } from '@/context/auth-context';
import CartSidebar from '@/components/cart-sidebar';
import AuthModal from '@/components/auth-modal';

const navItems = [
  { name: 'LIPS', href: '/category/lips' },
  { name: 'EYES', href: '/category/eyes' },
  { name: 'FACE', href: '/category/face' },
  { name: 'NAILS', href: '/category/nails' },
  { name: 'SKIN', href: '/category/skin' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { toggleCart, totalItems } = useCart();
  const { isAuthenticated, toggleAuthModal, user, logout } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Mock search suggestions based on input
    if (query.length > 1) {
      const mockSuggestions = [
        `${query} lipstick`,
        `${query} eyeshadow`,
        `${query} foundation`,
        `${query} nail polish`,
      ].filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()));
      
      setSearchSuggestions(mockSuggestions);
    } else {
      setSearchSuggestions([]);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          {/* Logo */}
          <Link href="/" className="mr-4 flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">Gloss&Glam</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground font-bold" : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search, User, Cart icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {isSearchOpen ? (
                <div className="absolute right-0 top-0 w-72 flex items-center">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    autoFocus
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-0"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                      setSearchSuggestions([]);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  
                  {/* Search suggestions */}
                  {searchSuggestions.length > 0 && (
                    <div className="absolute top-full right-0 w-full mt-1 bg-background border rounded-md shadow-lg z-50">
                      <ul className="py-1">
                        {searchSuggestions.map((suggestion, index) => (
                          <li key={index} className="px-4 py-2 hover:bg-muted cursor-pointer">
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              )}
            </div>
            
            <div className="relative">
              <Button variant="ghost" size="icon" onClick={isAuthenticated ? toggleUserMenu : toggleAuthModal}>
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              
              {/* User dropdown menu */}
              {isAuthenticated && isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm border-b">
                      <p className="font-medium">{user?.name || user?.email}</p>
                    </div>
                    <Link href="/account/profile" className="block px-4 py-2 text-sm hover:bg-muted">
                      My Profile
                    </Link>
                    <Link href="/account/orders" className="block px-4 py-2 text-sm hover:bg-muted">
                      My Orders
                    </Link>
                    <Link href="/account/wishlist" className="block px-4 py-2 text-sm hover:bg-muted">
                      Wishlist
                    </Link>
                    <button 
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-muted"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <Button variant="ghost" size="icon" onClick={toggleCart} className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-16">
          <nav className="container py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2 text-lg",
                      pathname === item.href ? "font-bold" : ""
                    )}
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar />
      
      {/* Auth Modal */}
      <AuthModal />
    </>
  );
}