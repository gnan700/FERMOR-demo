"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-surface/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-foreground flex items-center gap-2">
          <div className="w-7 h-7 bg-accent rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold">F</span>
          </div>
          Fermor.
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Features</Link>
          <Link href="#security" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Security</Link>
          <Link href="#about" className="text-sm font-medium text-muted hover:text-foreground transition-colors">About</Link>
        </div>
        
        <div className="hidden md:block">
          <Button variant="primary">
            Get Started
          </Button>
        </div>

        <button 
          className="md:hidden p-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-surface px-4 py-6 flex flex-col gap-4 shadow-lg absolute w-full left-0">
          <Link href="#features" className="text-base font-medium text-muted hover:text-foreground" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#security" className="text-base font-medium text-muted hover:text-foreground" onClick={() => setIsOpen(false)}>Security</Link>
          <Link href="#about" className="text-base font-medium text-muted hover:text-foreground" onClick={() => setIsOpen(false)}>About</Link>
          <div className="pt-4 mt-2 border-t border-border flex flex-col gap-3">
            <Button variant="secondary" className="w-full">Sign In</Button>
            <Button variant="primary" className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
