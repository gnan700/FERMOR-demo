import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 text-center md:text-left">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-xl tracking-tight text-foreground flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              Fermor.
            </Link>
            <p className="text-sm text-muted">Making finance simpler, clearer, and easier to use for everyone.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="#" className="hover:text-accent transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Security</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="#" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
          <div className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Fermor. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span className="text-sm font-medium text-muted">Fermor is a financial technology company, not a bank.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
