'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [active, setActive] = useState<string | null>('home');
    return (
        <>
            {/* Header */}
            <header className="backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 font-codec-pro">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Image alt='logo' src={"/logoblackk.png"} width={180} height={180} />
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-8">

                            <Link onClick={() => { setActive('home') }} className={active == 'home' ? "text-primary text-xl " : "hover:text-red-500 text-xl font-semi-bold"} href={"/"}>
                                Home
                            </Link>
                            {/* <Link onClick={() => { setActive('bikes') }} className={active == 'bikes' ? "text-primary text-xl" : "hover:text-green-500 text-xl font-semi-bold"} href={"/home/bikes"}>
                Bikes
              </Link> */}

                            {/* <Link
                href="/home/services"
                onClick={() => setActive("services")}
                className={active === "services" ? "text-primary underline" : "hover:text-blue-500"}
              >
                Services
              </Link> */}

                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className='text-xl  font-medium bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ring-0 shadow-none'>Services</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <NavigationMenuLink asChild className="w-35 cursor-pointer">
                                                <Link onClick={() => { setActive('solutions') }} className={active == 'solutions' ? "text-primary " : "hover:text-indigo-500"} href="/home/solutions">Solutions</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild className="w-35 cursor-pointer">
                                                <Link onClick={() => { setActive('corporate') }} className={active == 'corporate' ? "text-primary " : "hover:text-red-500"} href="/home/corporate">Corporate</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild className="w-35 cursor-pointer">
                                                <Link onClick={() => { setActive('leaderboard') }} className={active == 'eventbooking' ? "text-primary " : "hover:text-yellow-500"} href="/home/eventbooking">Event Booking</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild className="w-35 cursor-pointer">
                                                <Link onClick={() => { setActive('franchise') }} className={active == 'franchise' ? "text-primary " : "hover:text-pink-500"} href="/home/franchise">Franchise</Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>



                            <Link onClick={() => { setActive('leaderboard') }} className={active == 'leaderboard' ? "text-primary text-xl " : "hover:text-indigo-500 text-xl font-semi-bold"} href={"/home/leaderboard"}>
                                Leaderboard
                            </Link>
                            {/* <Link onClick={()=>{setActive('solutions')}} className= {active == 'solutions' ? "text-primary underline" : "hover:text-green-500"} href={"/home/solutions"}>
                Solutions
              </Link> */}
                            <Link onClick={() => { setActive('about') }} className={active == 'about' ? "text-primary text-xl " : "hover:text-yellow-500 text-xl font-semi-bold"} href={"/home/about"}>
                                About
                            </Link>
                            <Link onClick={() => { setActive('faqs') }} className={active == 'faqs' ? "text-primary text-xl " : "hover:text-yellow-500 text-xl font-semi-bold"} href={"/home/faqs"}>
                                FAQs
                            </Link>
                            <Link
                                href="/home/contact"
                                onClick={() => setActive('contact')}
                                className="bg-black text-white rounded-[20px] px-6 py-2 font-bold hover:bg-gray-800 transition"
                            >
                                Contact us
                            </Link>

                        </nav>

                        {/* Mobile Nav Button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary">Home</Link>
                                {/* <Link href="/home/bikes" className="block px-3 py-2 text-gray-700 hover:text-primary">Bikes</Link> */}
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className='text-md  font-small text-gray-700 pl-3 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ring-0 shadow-none'>Services</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <NavigationMenuLink asChild className="w-35 cursor-pointer">
                                                    <Link onClick={() => { setActive('solutions') }} className={active == 'solutions' ? "text-primary " : "hover:text-indigo-500"} href="/home/solutions">Solutions</Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="w-35 cursor-pointer">
                                                    <Link onClick={() => { setActive('corporate') }} className={active == 'corporate' ? "text-primary " : "hover:text-red-500"} href="/home/corporate">Corporate</Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="w-35 cursor-pointer">
                                                    <Link onClick={() => { setActive('leaderboard') }} className={active == 'eventbooking' ? "text-primary " : "hover:text-yellow-500"} href="/home/eventbooking">Event Booking</Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="w-35 cursor-pointer">
                                                    <Link onClick={() => { setActive('franchise') }} className={active == 'franchise' ? "text-primary " : "hover:text-pink-500"} href="/home/franchise">Franchise</Link>
                                                </NavigationMenuLink>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                {/* <Link href="/home/services" className="block px-3 py-2 text-gray-700 hover:text-primary">Services</Link> */}
                                {/* <Link href="" className="block px-3 py-2 text-gray-700 hover:text-primary">Partners</Link> */}
                                <Link href="/home/leaderboard" className="block px-3 py-2 text-gray-700 hover:text-primary">Leaderboard</Link>
                                <Link href="/home/about" className="block px-3 py-2 text-gray-700 hover:text-primary">About</Link>
                                <Link href="/home/contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</Link>
                                {/* <Button className="w-full mt-2 bg-primary hover:bg-primary/90">Get Started</Button> */}
                            </div>
                        </div>
                    )}
                </div>
            </header>

        </>
    )

}





