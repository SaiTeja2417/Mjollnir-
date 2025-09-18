// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white font-codec-pro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">MJOLLNIR</div>
            <p className="text-gray-300 mb-6">
              Pioneering sustainable mobility solutions for a greener tomorrow. Making cycling accessible, 
              convenient, and impactful across India.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              {/* <li><Link href="/home/bikes" className="hover:text-primary transition-colors">Bikes</Link></li> */}
              <li><Link href="/home/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/home/leaderboard" className="hover:text-primary transition-colors">Leaderboard</Link></li>
              <li><Link href="/home/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/home/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/home/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="/home/corporate" className="hover:text-primary transition-colors">Corporate</Link></li>
              <li><Link href="/home/eventbooking" className="hover:text-primary transition-colors">Event Booking</Link></li>
              <li><Link href="/home/franchise" className="hover:text-primary transition-colors">Franchise</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="space-y-3 text-gray-300 mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 40 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@mjollnir.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Hyderabad, Telangana</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 MJOLLNIR. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="text-gray-400 text-sm">
              Made with ❤️ for sustainable mobility
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}