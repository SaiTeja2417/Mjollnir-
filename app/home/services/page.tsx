"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building, Users, Target, Handshake, MessageSquare, Activity, Camera, MapPin, Building2, GraduationCap, ChevronDown, Mail, Phone, Clock, Calendar, } from "lucide-react";
// import { ImageWithFallback } from "@/app/figma/ImageWithFallback";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ImageWithFallback from "@/app/figma/ImageWithFallback";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function CorporateTieups() {
  // const corporatePartners = [
  //   { name: "Amazon", logo: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
  //   { name: "Cognizant", logo: "https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo.jpg" },
  //   { name: "Capgemini", logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=100&fit=crop" },
  //   { name: "Accenture", logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/accenture-logo.png" }
  // ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Employee Wellness",
      description: "Promote healthy commuting and employee wellbeing through cycling initiatives"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Carbon Reduction",
      description: "Meet sustainability goals by reducing corporate carbon footprint"
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Campus Integration",
      description: "Seamless integration with corporate campuses and office complexes"
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Partnership Benefits",
      description: "Custom solutions, branding opportunities, and preferential rates"
    }
  ];

  //   const partnerLogos = [
  //   { name: "Microsoft", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop" },
  //   { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop" },
  //   { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop" },
  //   { name: "Flipkart", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop" },
  //   { name: "Infosys", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
  //   { name: "TCS", logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=100&fit=crop" },
  //   { name: "Wipro", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop" },
  //   { name: "HCL", logo: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=100&fit=crop" },
  //   { name: "Tech Mahindra", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop" },
  //   { name: "Cognizant", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop" },
  //   { name: "IBM", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop" },
  //   { name: "Accenture", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop" }
  // ];

  // Duplicate the array to create seamless infinite scroll
  // const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  const [openSolution, setOpenSolution] = useState<string | null>(null);

  const solutions = [
    {
      id: 'campus',
      title: 'Campus Mobility Solution',
      icon: GraduationCap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      shortDescription: 'Comprehensive bike-sharing systems designed specifically for educational institutions.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      detailedDescription: 'Our campus mobility solution transforms how students and faculty navigate large educational campuses. With strategically placed stations and a robust fleet management system, we ensure seamless transportation across campus premises.',
      features: [
        'Strategic station placement across campus',
        'Student ID integration for easy access',
        'Real-time bike availability tracking',
        'Maintenance and support included',
        'Custom branding options',
        'Usage analytics and reporting'
      ],
      benefits: [
        'Reduced campus congestion',
        'Improved student satisfaction',
        'Eco-friendly transportation',
        'Cost-effective mobility solution'
      ]
    },
    {
      id: 'intra-campus',
      title: 'Intra-campus Mobility Solution',
      icon: Building2,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      shortDescription: 'Detailed intra-campus connectivity for seamless movement within large institutional premises.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      detailedDescription: 'Designed for large corporate campuses, research facilities, and institutional complexes, our intra-campus solution provides efficient transportation between buildings, departments, and facilities within a single campus.',
      features: [
        'Multiple pickup/drop points',
        'Integration with campus security systems',
        'Employee access management',
        'Route optimization algorithms',
        'Weather-resistant bike stations',
        'Mobile app with campus map integration'
      ],
      benefits: [
        'Increased employee productivity',
        'Reduced internal transport costs',
        'Enhanced campus connectivity',
        'Improved employee wellness'
      ]
    },
    {
      id: 'personal',
      title: 'Personal Cycle Service - Hyderabad',
      icon: MapPin,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      shortDescription: 'Personal bike rental service across Hyderabad for daily commuting and leisure rides.',
      image: 'https://www.mjollnir.in/_next/image?url=%2Fimages%2Fgallery%2F1.jpeg&w=3840&q=75',
      detailedDescription: 'Our personal cycle service in Hyderabad offers flexible bike rentals for individuals looking for convenient, eco-friendly transportation options across the city.',
      features: [
        'City-wide bike station network',
        'Flexible rental durations',
        'Multiple bike types available',
        'Mobile app for easy booking',
        'GPS tracking for safety',
        '24/7 customer support'
      ],
      benefits: [
        'Cost-effective urban mobility',
        'Reduced carbon footprint',
        'Health and fitness benefits',
        'Traffic congestion reduction'
      ]
    },
    {
      id: 'tourism',
      title: 'Tourism-based Rentals',
      icon: Camera,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      shortDescription: 'Specialized bike rental services for tourists exploring cities and attractions.',
      image: 'https://www.mjollnir.in/_next/image?url=%2Fimages%2Fgallery%2F6.jpeg&w=828&q=75',
      detailedDescription: 'Enhance your travel experience with our tourism-focused bike rental service. Explore cities, parks, and tourist attractions at your own pace with our specially curated routes and bikes.',
      features: [
        'Tourist-friendly bike designs',
        'Curated sightseeing routes',
        'Multilingual mobile app',
        'Tourist hotspot partnerships',
        'Guided tour options',
        'Safety equipment included'
      ],
      benefits: [
        'Authentic local experiences',
        'Flexible exploration schedules',
        'Environmentally conscious travel',
        'Cost-effective sightseeing'
      ]
    },
    {
      id: 'activity',
      title: 'Activity & Mobility Use-cases',
      icon: Activity,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      shortDescription: 'Versatile mobility solutions for events, activities, and special use cases.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      detailedDescription: 'Our activity and mobility solutions cater to special events, corporate activities, fitness programs, and unique transportation needs across various scenarios.',
      features: [
        'Event-specific bike deployments',
        'Corporate team building packages',
        'Fitness challenge programs',
        'Temporary station setups',
        'Custom branding for events',
        'Group booking discounts'
      ],
      benefits: [
        'Enhanced event experiences',
        'Team building opportunities',
        'Flexible deployment options',
        'Memorable activity integration'
      ]
    }
  ];

  //  const [eventType, setEventType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // const eventTypes = [
  //   { value: "corporate", label: "Corporate Event", description: "Team building, company outings" },
  //   { value: "wedding", label: "Wedding/Celebration", description: "Weddings, anniversaries, parties" },
  //   { value: "festival", label: "Festival/Cultural", description: "Cultural events, festivals" },
  //   { value: "sports", label: "Sports Event", description: "Cycling competitions, marathons" },
  //   { value: "community", label: "Community Event", description: "Social gatherings, fundraisers" },
  //   { value: "tourism", label: "Tourism/Sightseeing", description: "City tours, heritage walks" }
  // ];

  const timeSlots = [
    "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  return (
    <>

    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types of Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored mobility solutions for diverse needs - from educational institutions to tourism and personal transportation.
          </p>
        </div>

        <div className="space-y-6">
          {solutions.map((solution) => (
            <Card key={solution.id} className="overflow-hidden">
              <Collapsible
                open={openSolution === solution.id}
                onOpenChange={() => setOpenSolution(openSolution === solution.id ? null : solution.id)}
              >
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-gray-50 transition-colors">
                    <CardTitle className="flex items-center justify-between text-left">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${solution.bgColor}`}>
                          <solution.icon className={`h-6 w-6 ${solution.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{solution.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">{solution.shortDescription}</p>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${openSolution === solution.id ? 'rotate-180' : ''}`} />
                    </CardTitle>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                          {solution.detailedDescription}
                        </p>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {solution.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${solution.color.replace('text-', 'bg-')}`}></div>
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {solution.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${solution.color.replace('text-', 'bg-')}`}></div>
                                <span className="text-gray-700 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <Button className={`${solution.color.replace('text-', 'bg-')} hover:opacity-90`}>
                            Learn More About This Solution
                          </Button>
                        </div>
                      </div>

                      <div className="relative">
                        <ImageWithFallback
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-80 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </section>


    <section id="corporate-tieups" className="py-20 bg-gray-50 font-codec-pro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate Partnerships</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join leading corporations in Hyderabad and beyond in creating sustainable mobility solutions for your workforce
          </p>
        </div>

        {/* Existing Corporate Collaborations */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Corporate Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {corporatePartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <ImageWithFallback
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-contain"
                  />
              </div>
            ))}
          </div>
        </div> */}

        {/* Benefits of Corporate Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Partnership Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tie-up Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Partnership Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="text-lg font-semibold mb-2">Initial Consultation</h4>
              <p className="text-gray-600">Discuss your corporate mobility needs and employee requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="text-lg font-semibold mb-2">Custom Solution Design</h4>
              <p className="text-gray-600">We create a tailored cycling solution for your organization</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="text-lg font-semibold mb-2">Implementation & Support</h4>
              <p className="text-gray-600">Full deployment with ongoing maintenance and support</p>
            </div>
          </div>
        </div>

        {/* What Partners Receive */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Partners Receive</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">Exclusive Benefits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom branding on cycles and stations</li>
                  <li>• Preferential pricing for employees</li>
                  <li>• Dedicated support team</li>
                  <li>• Usage analytics and reporting</li>
                  <li>• Marketing collaboration opportunities</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">Services Included</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24/7 cycle maintenance</li>
                  <li>• Mobile app integration</li>
                  <li>• Employee onboarding support</li>
                  <li>• Safety training programs</li>
                  <li>• Performance tracking dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Inquiry Form */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-8">Corporate Partnership Inquiry</h3>
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Your company name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="contact-person">Contact Person</Label>
              <Input id="contact-person" placeholder="Your full name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="contact@company.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+91 12345 67890" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="employees">Number of Employees</Label>
              <Input id="employees" placeholder="500" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="location">Office Location</Label>
              <Input id="location" placeholder="Hyderabad, Telangana" className="mt-1" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="requirements">Partnership Requirements</Label>
              <Textarea 
                id="requirements" 
                placeholder="Tell us about your corporate mobility needs..."
                className="mt-1"
                rows={4}
                />
            </div>
            <div className="md:col-span-2 text-center">
              <Button className="bg-primary hover:bg-primary/90 px-8 py-3">
                <MessageSquare className="mr-2 h-4 w-4" />
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>

        <Separator/>    
          
    {/* <section id="partnerships" className="py-20 bg-gray-50 font-codec-pro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partnerships</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations worldwide to provide sustainable mobility solutions
          </p>
        </div>

        Infinite scrolling logos
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            {duplicatedLogos.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 w-48 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <ImageWithFallback
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        Partnership categories
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">IT</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Technology Partners</h3>
            <p className="text-gray-600">Leading IT companies implementing smart mobility solutions for their workforce</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🏢</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Corporate Partners</h3>
            <p className="text-gray-600">Enterprise organizations promoting sustainable commuting for employees</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🏛️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Government Partners</h3>
            <p className="text-gray-600">Public sector collaborations for smart city mobility initiatives</p>
          </div>
        </div>
      </div>
    </section> */}

    <section className="py-20 bg-gray-50 font-codec-pro">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Booking</h2>
            <p className="text-xl text-gray-600">
              Book MJOLLNIR cycles for your special events in Hyderabad
            </p>
            <div className="flex items-center justify-center mt-4 text-primary">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Available in Hyderabad</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Event Information */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Event Services</CardTitle>
                  <CardDescription>What we provide for events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Group Bookings</p>
                      <p className="text-sm text-gray-600">10-100+ cycles available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Flexible Scheduling</p>
                      <p className="text-sm text-gray-600">Half-day to multi-day bookings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Dedicated Support</p>
                      <p className="text-sm text-gray-600">On-site assistance during events</p>
                    </div>
                  </div>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Contact for Booking</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">+91 40 1234 5678</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm">events@mjollnir.com</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Safety helmets for all riders</li>
                    <li>• Basic maintenance toolkit</li>
                    <li>• Route planning assistance</li>
                    <li>• Emergency contact support</li>
                    <li>• Insurance coverage</li>
                  </ul>
                </div> */}
                </CardContent>
              </Card>


            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Book Cycles for Your Event</CardTitle>
                  <CardDescription>
                    Fill out this form and well get back to you with availability and pricing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Event Details */}
                    <div>
                      <Label className="mb-1" htmlFor="event-name">Event Name *</Label>
                      <Input id="event-name" placeholder="Name of your event" />
                    </div>

                    {/* <div>
                    <Label htmlFor="event-type">Event Type *</Label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-sm text-gray-500">{type.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div> */}

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className='mb-1' htmlFor="event-date">Event Date *</Label>
                        <Input
                          id="event-date"
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label className='mb-1' htmlFor="event-time">Start Time *</Label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className='mb-1' htmlFor="duration">Duration (hours) *</Label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2 hours</SelectItem>
                            <SelectItem value="4">4 hours</SelectItem>
                            <SelectItem value="6">6 hours</SelectItem>
                            <SelectItem value="8">8 hours (Full day)</SelectItem>
                            <SelectItem value="12">12 hours</SelectItem>
                            <SelectItem value="24">24 hours</SelectItem>
                            <SelectItem value="custom">Custom duration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="mb-1" htmlFor="quantity">Number of Cycles *</Label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select quantity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10-20">10-20 cycles</SelectItem>
                            <SelectItem value="20-30">20-30 cycles</SelectItem>
                            <SelectItem value="30-50">30-50 cycles</SelectItem>
                            <SelectItem value="50-75">50-75 cycles</SelectItem>
                            <SelectItem value="75-100">75-100 cycles</SelectItem>
                            <SelectItem value="100+">100+ cycles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Location and gistn number */}
                    <div className="grid md:grid-cols-2 gap-4">

                      <div>
                        <Label className="mb-1" htmlFor="location">GSTIN Number</Label>
                        <Input id="location" placeholder="Enter GSTIN Number" />
                      </div>

                      <div>
                        <Label className="mb-1" htmlFor="location">Event Location *</Label>
                        <Input id="location" placeholder="Venue address in Hyderabad" />
                      </div>
                    </div>
                    


                    {/* Contact Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className='mb-1' htmlFor="contact-name">Contact Person *</Label>
                        <Input id="contact-name" placeholder="Your full name" />
                      </div>
                      <div>
                        <Label className='mb-1' htmlFor="contact-phone">Phone Number *</Label>
                        <Input id="contact-phone" placeholder="+91 12345 67890" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className='mb-1' htmlFor="contact-email">Email *</Label>
                        <Input id="contact-email" type="email" placeholder="your.email@example.com" />
                      </div>
                      <div>
                        <Label className='mb-1' htmlFor="organization">Organization</Label>
                        <Input id="organization" placeholder="Company/Organization name" />
                      </div>
                    </div>

                    {/* Special Requirements */}
                    <div>
                      <Label className='mb-1' htmlFor="requirements">Special Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Any special requirements, route preferences, additional services needed, etc."
                        rows={4}
                      />
                    </div>

                    {/* Budget */}
                    <div>
                      <Label className='mb-1' htmlFor="budget">Expected Budget Range</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                          <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                          <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                          <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="above-100k">Above ₹1,00,000</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> This is a booking inquiry form. Our team will contact you within 24 hours
                        to confirm availability, provide exact pricing, and finalize the booking details.
                      </p>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 py-3">
                      Submit Event Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


    
    
    </>
  );
}