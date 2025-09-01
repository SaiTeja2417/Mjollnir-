"use client"
import { Button } from "@/components/ui/button";
import { MapPin,Scan, RotateCcw, Navigation, Instagram, ExternalLink, MessageCircle, Heart,Globe, Star, ChevronRight, ChevronLeft, UsersRound, Route, Recycle, Building } from 'lucide-react';
import { Play, ArrowRight, Bike, Users } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Wrench, HeadphonesIcon, Leaf, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
// import { ImageWithFallback } from "@/app/figma/ImageWithFallback";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageWithFallback from "@/app/figma/ImageWithFallback";
// import BestCard from "@/components/ui/BestCard";

interface Location {
  id: number;
  name: string;
  city: string;
  state: string;
  totalCycles: number;
  totalUsers: number;
  address: string;
  mapUrl: string;
}

interface InstagramPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  type: 'photo' | 'video' | 'carousel';
  hashtags: string[];
  url: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  hasVideo?: boolean;
  videoUrl?: string;
}

export default function App() {

  const [isPaused, setIsPaused] = useState(false);
  const clients = [
    {
      name: 'Amazon',
      logo: 'https://www.mjollnir.in/images/clients/amazon.svg',
      category: 'Corporate',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Nehru Zoological Park',
      logo: 'https://www.mjollnir.in/_next/image?url=%2Fimages%2Fclients%2Fnehru-zoological-park.png&w=128&q=75',
      category: 'Tourism',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      name: 'Bosch',
      logo: 'https://www.mjollnir.in/images/clients/bosch.svg',
      category: 'Corporate',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'The Shri Ram Universal School',
      logo: 'https://tsusnoida.edu.in/wp-content/uploads/2023/09/4-1.jpg',
      category: 'Education',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'Demandbase',
      logo: 'https://www.mjollnir.in/images/clients/demandbase.svg',
      category: 'Corporate',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'NCR Voyix',
      logo: 'https://www.mjollnir.in/images/clients/ncr-voyix.svg',
      category: 'Corporate',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Pega',
      logo: 'https://www.mjollnir.in/images/clients/pega.svg',
      category: 'Corporate',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'TransUnion',
      logo: 'https://www.mjollnir.in/images/clients/transunion.svg',
      category: 'Corporate',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Verity',
      logo: 'https://www.mjollnir.in/_next/image?url=%2Fimages%2Fclients%2Fverity.png&w=128&q=75',
      category: 'Corporate',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'IIT Hyderabad',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'Education',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'BITS Pilani',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'Education',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'IIIT Hyderabad',
      logo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'Education',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'Telangana Tourism',
      logo: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'Tourism',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      name: 'Hyderabad Metro',
      logo: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'Transport',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      name: 'GHMC',
      logo: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'Government',
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      name: 'Apollo Hospitals',
      logo: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'Healthcare',
      color: 'bg-red-50 border-red-200'
    }
  ];

  const duplicatedClients = [...clients, ...clients];

  const steps = [
    {
      icon: MapPin,
      title: 'Find Location',
      description: 'Locate the nearest MJOLLNIR hub using our app or website',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Scan,
      title: 'Scan & Unlock',
      description: 'Scan the QR code on any available bike to unlock and start your ride',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: RotateCcw,
      title: 'Ride & Return',
      description: 'Enjoy your ride and return the bike to any MJOLLNIR station when done',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];



  const promises = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety First",
      description: "Regular maintenance, safety checks, and helmet provision to ensure secure rides for all users.",
      // commitment: "100% safety compliance"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Availability",
      description: "Our cycles and support services are available round the clock for your convenience.",
      // commitment: "Always accessible"
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Maintenance Promise",
      description: "Regular upkeep and immediate repair services to keep our fleet in perfect condition.",
      // commitment: "99.5% uptime guarantee"
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: "Customer Support",
      description: "Dedicated support team available to assist you with any queries or issues.",
      // commitment: "Response within 15 minutes"
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Environmental Impact",
      description: "Every ride contributes to reducing carbon footprint and creating a cleaner environment.",
      // commitment: "Carbon neutral operations"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description: "Premium quality cycles with regular quality checks and performance monitoring.",
      // commitment: "ISO certified processes"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const locations: Location[] = [
    {
      id: 1,
      name: 'IIT Hyderabad Campus',
      city: 'Hyderabad',
      state: 'Telangana',
      totalCycles: 150,
      totalUsers: 2500,
      address: 'IIT Hyderabad, Kandi, Sangareddy',
      mapUrl: 'https://maps.google.com/?q=IIT+Hyderabad'
    },
    {
      id: 2,
      name: 'HITEC City Hub',
      city: 'Hyderabad',
      state: 'Telangana',
      totalCycles: 200,
      totalUsers: 3200,
      address: 'HITEC City, Madhapur, Hyderabad',
      mapUrl: 'https://maps.google.com/?q=HITEC+City+Hyderabad'
    },
    {
      id: 3,
      name: 'Bangalore Central',
      city: 'Bangalore',
      state: 'Karnataka',
      totalCycles: 180,
      totalUsers: 2800,
      address: 'MG Road, Bangalore Central',
      mapUrl: 'https://maps.google.com/?q=MG+Road+Bangalore'
    },
    {
      id: 4,
      name: 'Mumbai University',
      city: 'Mumbai',
      state: 'Maharashtra',
      totalCycles: 120,
      totalUsers: 2100,
      address: 'Fort Campus, Mumbai University',
      mapUrl: 'https://maps.google.com/?q=Mumbai+University+Fort'
    },
    {
      id: 5,
      name: 'Delhi Tech Park',
      city: 'Delhi',
      state: 'Delhi',
      totalCycles: 220,
      totalUsers: 3500,
      address: 'Connaught Place, New Delhi',
      mapUrl: 'https://maps.google.com/?q=Connaught+Place+Delhi'
    },
    {
      id: 6,
      name: 'Chennai IT Corridor',
      city: 'Chennai',
      state: 'Tamil Nadu',
      totalCycles: 160,
      totalUsers: 2600,
      address: 'OMR, Chennai IT Corridor',
      mapUrl: 'https://maps.google.com/?q=OMR+Chennai'
    }
  ];

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.state.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const instagramPosts: InstagramPost[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: 'Good morning Hyderabad! Starting the day with fresh air and sustainable rides. Our MJOLLNIR bikes are ready for your morning commute! Book yours today 🚴‍♂️ #MJOLLNIRIndia #MorningRide #Hyderabad',
      likes: 542,
      comments: 43,
      date: '2 hours ago',
      type: 'photo',
      hashtags: ['MJOLLNIRIndia', 'MorningRide', 'Hyderabad', 'SustainableCommute'],
      url: 'https://instagram.com/p/mjollnir_morning'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '🎊 BIG NEWS! Just launched our 25th smart docking station at IIT Hyderabad! Serving 2,500+ students with eco-friendly mobility. Swipe to see the amazing response from our campus community! 🎓⚡',
      likes: 1247,
      comments: 128,
      date: '1 day ago',
      type: 'carousel',
      hashtags: ['IITHyderabad', 'Milestone', 'SmartDocking', 'CampusLife'],
      url: 'https://instagram.com/p/mjollnir_iit_milestone'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '🏛️ Exploring Charminar with MJOLLNIR! Tourism just got more sustainable and fun. Available at all major tourist spots in Hyderabad. Where will you ride next? 📍✨ #Heritage #Tourism',
      likes: 687,
      comments: 89,
      date: '2 days ago',
      type: 'video',
      hashtags: ['Charminar', 'Tourism', 'Heritage', 'HyderabadTourism'],
      url: 'https://instagram.com/p/mjollnir_heritage'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1544191696-15693072b0f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '🦁 Family Sunday at Nehru Zoological Park! Nothing beats exploring wildlife sustainably with our family-friendly bikes. Special weekend rates available! 🐯🚲 #FamilyTime #NehruZoo',
      likes: 434,
      comments: 67,
      date: '3 days ago',
      type: 'photo',
      hashtags: ['NehruZoo', 'FamilyTime', 'WeekendSpecial', 'Wildlife'],
      url: 'https://instagram.com/p/mjollnir_zoo_family'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '🤝 Proud partnership announcement! Amazon India chooses MJOLLNIR for their employee wellness program at Hyderabad campus. Corporate sustainability goals made easy! 💼🌱 #CorporatePartnership',
      likes: 892,
      comments: 156,
      date: '4 days ago',
      type: 'carousel',
      hashtags: ['Amazon', 'CorporatePartnership', 'EmployeeWellness', 'Sustainability'],
      url: 'https://instagram.com/p/mjollnir_amazon_partnership'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '🔧 Meet our superhero maintenance team! Every bike gets a thorough safety check before your ride. Quality and safety are non-negotiable at MJOLLNIR! 👨‍🔧⚙️ #TeamMJOLLNIR #Quality',
      likes: 298,
      comments: 34,
      date: '5 days ago',
      type: 'video',
      hashtags: ['TeamMJOLLNIR', 'Maintenance', 'Quality', 'Safety'],
      url: 'https://instagram.com/p/mjollnir_maintenance'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '🎓 The Shri Ram Universal School joins the MJOLLNIR family! Empowering 1,200+ students with sustainable mobility solutions. Education + Innovation = Brighter Future! 📚🚲',
      likes: 756,
      comments: 91,
      date: '1 week ago',
      type: 'carousel',
      hashtags: ['ShriRamSchool', 'Education', 'Students', 'Innovation'],
      url: 'https://instagram.com/p/mjollnir_shriram'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1594736797933-d0ca71eeb6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '🌍 Climate Impact Update: This month alone, MJOLLNIR riders prevented 75 tons of CO2 emissions! Each ride saves 2.6kg CO2. Together, we\'re changing the world! 🌱💚 #ClimateAction',
      likes: 1156,
      comments: 203,
      date: '1 week ago',
      type: 'photo',
      hashtags: ['ClimateAction', 'CarbonFootprint', 'Sustainability', 'ImpactReport'],
      url: 'https://instagram.com/p/mjollnir_climate_impact'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '🌙 Night rides made safe! GPS tracking, well-lit stations, and 24/7 support ensure secure rides anytime. Download our app for real-time safety features! 📱🔒 #SafetyFirst',
      likes: 389,
      comments: 45,
      date: '10 days ago',
      type: 'video',
      hashtags: ['SafetyFirst', 'NightRides', 'GPSTracking', 'MJOLLNIRApp'],
      url: 'https://instagram.com/p/mjollnir_night_safety'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1517654203837-16c4c6d5bc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '🚀 Franchise Update: 10 new cities coming soon! Bangalore, Pune, Chennai leading the expansion. ROI of 35%+ proven! Ready to join the revolution? DM us! 💼🌟',
      likes: 623,
      comments: 87,
      date: '2 weeks ago',
      type: 'carousel',
      hashtags: ['FranchiseExpansion', 'Bangalore', 'Pune', 'Chennai'],
      url: 'https://instagram.com/p/mjollnir_expansion'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1553978297-833d09932d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '👶 Little riders, big smiles! Our colorful kids bikes are a hit at Ramoji Film City. Making family adventures more memorable and sustainable! 🎬🌈 #KidsRide #RamojiFilmCity',
      likes: 892,
      comments: 134,
      date: '2 weeks ago',
      type: 'photo',
      hashtags: ['KidsRide', 'RamojiFilmCity', 'FamilyAdventure', 'ColorfulBikes'],
      url: 'https://instagram.com/p/mjollnir_ramoji'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1553635810-19fbcf5a0ac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: '📱 MJOLLNIR App 3.0 is here! New features: Smart route suggestions, carbon impact tracker, social challenges, and more! Update now for the best riding experience! ⬆️✨',
      likes: 445,
      comments: 89,
      date: '3 weeks ago',
      type: 'video',
      hashtags: ['AppUpdate', 'SmartFeatures', 'Technology', 'UserExperience'],
      url: 'https://instagram.com/p/mjollnir_app_update'
    }
  ];

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return '🎥';
      case 'carousel':
        return '📸';
      default:
        return '📷';
    }
  };

  interface StatItem {
  icon: React.ReactNode;  // Better than JSX.Element
  value: string;
  label: string;
  color: string;
}

  // const [roiInputs, setRoiInputs] = useState({
  //   investment: 500000,
  //   location: 'urban',
  //   bikeCount: 50
  // });

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   city: '',
  //   investment: '',
  //   experience: '',
  //   message: ''
  // });

  // const calculateROI = () => {
  //   const { investment, location, bikeCount } = roiInputs;
  //   const locationMultiplier = location === 'urban' ? 1.2 : location === 'campus' ? 1.0 : 0.8;
  //   const monthlyRevenue = bikeCount * 2000 * locationMultiplier;
  //   const monthlyProfit = monthlyRevenue * 0.35; // 35% profit margin
  //   const paybackPeriod = investment / monthlyProfit;
  //   const annualROI = ((monthlyProfit * 12) / investment) * 100;

  //   return {
  //     monthlyRevenue: Math.round(monthlyRevenue),
  //     monthlyProfit: Math.round(monthlyProfit),
  //     paybackPeriod: Math.round(paybackPeriod * 10) / 10,
  //     annualROI: Math.round(annualROI * 10) / 10
  //   };
  // };

  // const problems = [
  //   {
  //     icon: MapPin,
  //     title: 'Urban Mobility Crisis',
  //     description: 'Traffic congestion and limited parking create daily commuting challenges for millions.',
  //     impact: '2.5 hrs/day lost in traffic'
  //   },
  //   {
  //     icon: Building2,
  //     title: 'Campus Transportation Gap',
  //     description: 'Large campuses lack efficient internal transportation, affecting productivity and satisfaction.',
  //     impact: '40% reduction in efficiency'
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: 'Growing Market Demand',
  //     description: 'Increasing demand for sustainable, cost-effective transportation solutions.',
  //     impact: '300% market growth expected'
  //   }
  // ];

  // const process = [
  //   {
  //     step: 1,
  //     title: 'Initial Consultation',
  //     description: 'Discuss your goals, location, and investment capacity with our franchise team.',
  //     icon: Phone,
  //     duration: '1-2 weeks'
  //   },
  //   {
  //     step: 2,
  //     title: 'Site Assessment',
  //     description: 'Our experts evaluate your proposed location for optimal station placement.',
  //     icon: MapPin,
  //     duration: '2-3 weeks'
  //   },
  //   {
  //     step: 3,
  //     title: 'Agreement & Setup',
  //     description: 'Sign the franchise agreement and begin station installation and bike deployment.',
  //     icon: Award,
  //     duration: '3-4 weeks'
  //   },
  //   {
  //     step: 4,
  //     title: 'Launch & Support',
  //     description: 'Grand opening with full marketing support and ongoing operational guidance.',
  //     icon: TrendingUp,
  //     duration: '1 week'
  //   }
  // ];

  // const partners = [
  //   { name: 'IIT Hyderabad', type: 'Educational', logo: '🎓', users: '15K+' },
  //   { name: 'Tech Mahindra', type: 'Corporate', logo: '🏢', users: '25K+' },
  //   { name: 'Mumbai University', type: 'Educational', logo: '🎓', users: '30K+' },
  //   { name: 'Infosys Campus', type: 'Corporate', logo: '🏢', users: '20K+' },
  //   { name: 'HITEC City', type: 'Commercial', logo: '🏬', users: '50K+' },
  //   { name: 'Bangalore IT Hub', type: 'Commercial', logo: '🏬', users: '35K+' }
  // ];

  // const benefits = [
  //   {
  //     icon: TrendingUp,
  //     title: 'Proven Business Model',
  //     description: 'Join a successful and scalable bike-sharing franchise with demonstrated ROI.',
  //     highlight: '35% avg ROI'
  //   },
  //   {
  //     icon: Headphones,
  //     title: '24/7 Support',
  //     description: 'Complete operational support including maintenance, technology, and customer service.',
  //     highlight: '24/7 availability'
  //   },
  //   {
  //     icon: BarChart3,
  //     title: 'Marketing & Branding',
  //     description: 'National marketing campaigns and local promotional support to drive usage.',
  //     highlight: '360° marketing'
  //   },
  //   {
  //     icon: Shield,
  //     title: 'Technology Platform',
  //     description: 'Advanced mobile app, IoT-enabled bikes, and comprehensive analytics dashboard.',
  //     highlight: 'IoT enabled'
  //   }
  // ];

  // const enablementProgram = [
  //   'Comprehensive training for franchise operators',
  //   'On-site setup and installation support',
  //   'Marketing materials and local promotion',
  //   'Ongoing operational guidance and best practices',
  //   'Technology training and troubleshooting',
  //   'Financial planning and performance optimization'
  // ];

  // const roiData = calculateROI();

  // const handleFormSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Here you would typically send the data to your backend
  //   alert('Thank you for your interest! Our franchise team will contact you within 24 hours.');
  // };


  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Computer Science Student',
      company: 'IIT Hyderabad',
      content: 'MJOLLNIR has completely transformed how I move around campus. The bikes are always available, well-maintained, and the app is super user-friendly. I can easily get from my hostel to the academic block in minutes!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b494?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      hasVideo: true,
      videoUrl: 'https://youtube.com/watch?v=example1'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      company: 'Tech Corp, HITEC City',
      content: 'As someone who commutes daily in Hyderabad traffic, MJOLLNIR bikes have been a game-changer. I can avoid traffic jams, get some exercise, and contribute to a cleaner environment. The electric bikes make it even easier!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      hasVideo: false
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      role: 'Tourist',
      company: 'Visiting from UK',
      content: 'During my visit to Hyderabad, MJOLLNIR bikes helped me explore the city like a local. The tourist routes were amazing, and I could visit multiple attractions at my own pace. Highly recommended for travelers!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      hasVideo: true,
      videoUrl: 'https://youtube.com/watch?v=example2'
    },
    {
      id: 4,
      name: 'Amit Patel',
      role: 'Campus Facilities Manager',
      company: 'Mumbai University',
      content: 'Implementing MJOLLNIR on our campus has significantly improved student satisfaction and reduced internal transport costs. The system is reliable, the support team is excellent, and the analytics help us optimize operations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      hasVideo: false
    },
    {
      id: 5,
      name: 'Meera Reddy',
      role: 'Environmental Advocate',
      company: 'Green Future NGO',
      content: 'MJOLLNIR is not just a bike rental service, it\'s a movement towards sustainable urban mobility. I\'ve been using their service for over a year, and it\'s amazing to see how it\'s reducing carbon emissions in our city.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      hasVideo: true,
      videoUrl: 'https://youtube.com/watch?v=example3'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];


  const [stats, setStats] = useState<StatItem[]>([]);

  useEffect(() => {
    // Mock API call - in real implementation, this would fetch from MJOLLNIR APIs
    const fetchStats = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const mockStats: StatItem[] = [
        {
          icon: <Users className="h-8 w-8" />,
          value: "50,000+",
          label: "Total Users",
          color: "text-blue-600"
        },
        {
          icon: <Building className="h-8 w-8" />,
          value: "25",
          label: "Active Campuses",
          color: "text-green-600"
        },
        {
          icon: <Recycle className="h-8 w-8" />,
          value: "125 Tons",
          label: "Carbon Saved",
          color: "text-emerald-600"
        },
        {
          icon: <Bike className="h-8 w-8" />,
          value: "2,500",
          label: "Total Cycles",
          color: "text-orange-600"
        },
        {
          icon: <UsersRound className="h-8 w-8" />,
          value: "500",
          label: "Total Groups",
          color: "text-purple-600"
        },
        {
          icon: <Route className="h-8 w-8" />,
          value: "1.2M",
          label: "Total Rides",
          color: "text-red-600"
        },
        {
          icon: <Globe className="h-8 w-8" />,
          value: "2.5M km",
          label: "Distance Travelled",
          color: "text-indigo-600"
        },
        {
          icon: <MapPin className="h-8 w-8" />,
          value: "15",
          label: "Locations",
          color: "text-pink-600"
        }
      ];

      setStats(mockStats);
    };

    fetchStats();
  }, []);

const [B, setB] = useState(true);
  const [E, setE] = useState(false);
  const [S, setS] = useState(false);
  const [T, setT] = useState(false);

  // ✅ Add type for letter
const handleClick = (letter: "B" | "E" | "S" | "T") => {
    setB(letter === "B");
    setE(letter === "E");
    setS(letter === "S");
    setT(letter === "T");
  };





  return (
    <>




      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Smart Bike Sharing
                  <span className="text-green-600 block">Across India</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Discover convenient, eco-friendly bike rentals at your fingertips.
                  Perfect for campus mobility, city exploration, and sustainable transportation.
                </p>
              </div>

            </div>

            {/* Floating Bike Image */}
            <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
              {/* Main floating bike */}
              <div className="relative z-10">
                <div className="animate-float-gentle hover:pause group">

                  {
                    B == true ? (

                      <ImageWithFallback
                        src="/cycle3.png"
                        alt="MJOLLNIR Hero Bike"
                        className="w-50 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-2xl transition-all duration-700 hover:scale-110 hover:drop-shadow-3xl group-hover:brightness-110"
                      />
                    ) : ""
                  }


                  {
                    E == true ? (

                      <ImageWithFallback
                        src="/cycle3.png"
                        alt="MJOLLNIR Hero Bike"
                        className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-2xl transition-all duration-700 hover:scale-110 hover:drop-shadow-3xl group-hover:brightness-110"
                      />
                    ) : ""
                  }


                  {
                    S == true ? (

                      <ImageWithFallback
                        src="/cycle1.png"
                        alt="MJOLLNIR Hero Bike"
                        className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-2xl transition-all duration-700 hover:scale-110 hover:drop-shadow-3xl group-hover:brightness-110"
                      />
                    ) : ""
                  }

                  {
                    T == true ? (

                      <ImageWithFallback
                        src="/cycle2.png"
                        alt="MJOLLNIR Hero Bike"
                        className="w-50 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-2xl transition-all duration-700 hover:scale-110 hover:drop-shadow-3xl group-hover:brightness-110"
                      />
                    ) : ""
                  }

                </div>
              </div>

              {/* Decorative background circles with floating animation */}
              <div className="absolute -top-4 -right-4 w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20 z-0 animate-float-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-56 h-56 md:w-64 md:h-64 bg-gradient-to-tr from-blue-200 to-blue-300 rounded-full opacity-20 z-0 animate-float-slow" style={{ animationDelay: '2s' }}></div>

              {/* Gentle pulsing rings */}
              <div className="absolute inset-8 border-4 border-dashed border-green-400 rounded-full opacity-30 animate-pulse-gentle"></div>
              <div className="absolute inset-16 border-2 border-dotted border-blue-400 rounded-full opacity-25 animate-pulse-gentle" style={{ animationDelay: '1.5s' }}></div>

              {/* Floating accent elements */}
              <div className="absolute top-1/4 right-8 w-4 h-4 bg-green-500 rounded-full animate-float-slow opacity-60 shadow-lg shadow-green-500/30"></div>
              <div className="absolute bottom-1/4 left-8 w-3 h-3 bg-blue-500 rounded-full animate-float-slow opacity-60 shadow-lg shadow-blue-500/30" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-orange-500 rounded-full animate-float-slow opacity-60 shadow-lg shadow-orange-500/30" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-float-slow opacity-50 shadow-lg shadow-purple-500/30" style={{ animationDelay: '3s' }}></div>

              {/* Additional floating elements for depth */}
              <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-subtle-tilt opacity-40" style={{ animationDelay: '4s' }}></div>
              <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-subtle-tilt opacity-50" style={{ animationDelay: '5s' }}></div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100 to-transparent rounded-full opacity-10 animate-pulse-gentle blur-xl"></div>

              {/* Interactive hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-blue-100 to-green-100 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-700 blur-2xl"></div>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-4  lg:px-8 mt-6">
          <div className="flex justify-between content-center gap-7">
            <Card
              onClick={() => handleClick("B")}
              className={`w-full h-full cursor-pointer hover:shadow-lg transition-shadow ${B ? "border-rose-500 bg-red-50" : "bg-rose-50"}`}
            >
              <CardHeader>
                <CardTitle className="text-center text-7xl">B</CardTitle>
              </CardHeader>
            </Card>

            <Card
              onClick={() => handleClick("E")}
              className={`w-full cursor-pointer hover:shadow-lg transition-shadow ${E ? "border-orange-500 bg-orange-50" : "bg-orange-50"}`}
            >
              <CardHeader>
                <CardTitle className="text-center text-7xl">E</CardTitle>
              </CardHeader>
            </Card>

            <Card
              onClick={() => handleClick("S")}
              className={`w-full cursor-pointer hover:shadow-lg transition-shadow ${S ? "border-cyan-500 bg-cyan-50" : "bg-cyan-50"}`}
            >
              <CardHeader>
                <CardTitle className="text-center text-7xl">S</CardTitle>
              </CardHeader>
            </Card>

            <Card
              onClick={() => handleClick("T")}
              className={`w-full cursor-pointer hover:shadow-lg transition-shadow ${T ? "border-fuchsia-500 bg-fuchsia-50" : "bg-fuchsia-50"}`}
            >
              <CardHeader>
                <CardTitle className="text-center text-7xl">T</CardTitle>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>




      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with MJOLLNIR is simple. Follow these three easy steps to begin your eco-friendly journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center w-full h-full p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="space-y-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${step.bgColor} mb-4`}>
                      <step.icon className={`h-10 w-10 ${step.color}`} />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step number */}
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${step.color} bg-opacity-20`}>
                      <span className={`font-bold ${step.color}`}>{index + 1}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Mobile connection arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4 mb-4">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <Separator />

      <section className="py-16 bg-gray-50 overflow-hidden">
        {/* Heading Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From educational institutions to corporate campuses, tourism boards to healthcare facilities —
              organizations across sectors trust MJOLLNIR for sustainable mobility solutions.
            </p>
          </div>
        </div>

        {/* 🔁 Full-Width Horizontal Scroller */}
        <div
          className="relative w-full px-4 sm:px-6 lg:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 min-w-max"
              animate={{
                x: isPaused ? undefined : [0, -46 * clients.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-60 h-28 flex flex-col items-center justify-center p-2"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <div className="w-full h-20 flex items-center justify-center mb-2 rounded-lg p-2">
                    <ImageWithFallback
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className={`max-w-full max-h-full object-contain transition-all duration-300 drop-shadow-sm ${client.name === 'Nehru Zoological Park'
                        ? 'filter invert'
                        : 'filter grayscale-[0.3] hover:grayscale-0'
                        }`}
                    />
                  </div>
                  <h3 className="text-xs text-gray-600 text-center leading-tight opacity-70 hover:opacity-100 transition-opacity duration-300">
                    {client.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient edges for smooth scroll fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        {/* 📊 Category Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="border border-gray-250 hover:border-green-200 transition-all duration-300 ease-in-out rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-green-600 mb-1">7+</div>
              <div className="text-xs text-gray-600 hover:text-green-700 transition-colors duration-300">Corporate</div>
            </div>
            <div className="border border-gray-250 hover:border-blue-200 transition-all duration-300 ease-in-out rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">4+</div>
              <div className="text-xs text-gray-600 hover:text-blue-700 transition-colors duration-300">Education</div>
            </div>
            <div className="border border-gray-250 hover:border-orange-200 transition-all duration-300 ease-in-out rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-orange-600 mb-1">2+</div>
              <div className="text-xs text-gray-600 hover:text-orange-700 transition-colors duration-300">Tourism</div>
            </div>
            <div className="border border-gray-250 hover:border-purple-200 transition-all duration-300 ease-in-out rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-purple-600 mb-1">1+</div>
              <div className="text-xs text-gray-600 hover:text-purple-700 transition-colors duration-300">Transport</div>
            </div>
            <div className="border border-gray-250 hover:border-indigo-200 transition-all duration-300 ease-in-out rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-indigo-600 mb-1">1+</div>
              <div className="text-xs text-gray-600 hover:text-indigo-700 transition-colors duration-300">Government</div>
            </div>
            <div className="border border-gray-250 hover:border-red-200 transition-all duration-300 ease-in-out rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-red-600 mb-1">1+</div>
              <div className="text-xs text-gray-600 hover:text-red-700 transition-colors duration-300">Healthcare</div>
            </div>
          </div>
        </div>
      </section>


      <Separator />

      <section id="locations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Rental Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find MJOLLNIR bike rental stations across India. Choose from our growing network of locations.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <Input
              placeholder="Search by city or location name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <Card key={location.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    {location.name}
                  </CardTitle>
                  <p className="text-gray-600">{location.city}, {location.state}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Bike className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Total Cycles</span>
                    </div>
                    <span className="font-semibold">{location.totalCycles}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Total Users</span>
                    </div>
                    <span className="font-semibold">{location.totalUsers.toLocaleString()}</span>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-gray-600 mb-3">{location.address}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(location.mapUrl, '_blank')}
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No locations found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Separator />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="h-8 w-8 text-pink-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Follow Our Journey
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our Instagram community @mjollnirindia and stay connected with daily updates, behind-the-scenes content,
              partnership announcements, and inspiring stories from riders across India.
            </p>
          </div>

          {/* Updated Instagram Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">18.5K+</div>
              <div className="text-gray-600">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">1,200+</div>
              <div className="text-gray-600">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">95K+</div>
              <div className="text-gray-600">Likes</div>
            </div>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {instagramPosts.slice(0, 10).map((post) => (
              <Card key={post.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <ImageWithFallback
                    src={post.image}
                    alt="Instagram post"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center space-y-2">
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{post.comments}</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => window.open('https://www.instagram.com/mjollnirindia/', '_blank')}
                      >
                        View Post
                      </Button>
                    </div>
                  </div>

                  {/* Post Type Badge */}
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      {getPostTypeIcon(post.type)}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Recent Posts with Details */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Latest Posts</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instagramPosts.slice(0, 3).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <ImageWithFallback
                      src={post.image}
                      alt="Instagram post"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {getPostTypeIcon(post.type)}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-700 line-clamp-3">
                        {post.caption}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {post.hashtags.slice(0, 3).map((hashtag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            #{hashtag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{post.date}</span>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open('https://www.instagram.com/mjollnirindia/', '_blank')}
                      >
                        View on Instagram
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
              <Instagram className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Join Our Instagram Community
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Follow @mjollnirindia for daily inspiration, user stories, sustainability tips,
                and exclusive behind-the-scenes content from our team across India.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                onClick={() => window.open('https://www.instagram.com/mjollnirindia/', '_blank')}
              >
                <Instagram className="h-5 w-5 mr-2" />
                Follow @mjollnirindia
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />



      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our community of riders about their experiences with MJOLLNIR bike sharing.
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevTestimonial}
                    className="p-2 hover:bg-gray-100"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <div className="flex gap-1">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextTestimonial}
                    className="p-2 hover:bg-gray-100"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                <div className="text-center">
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                    {currentTestimonial.content}
                  </blockquote>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                        <AvatarFallback>{currentTestimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>

                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900">{currentTestimonial.name}</h4>
                        <p className="text-gray-600">{currentTestimonial.role}</p>
                        <p className="text-sm text-gray-500">{currentTestimonial.company}</p>
                      </div>
                    </div>

                    {currentTestimonial.hasVideo && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() => window.open(currentTestimonial.videoUrl, '_blank')}
                      >
                        <Play className="h-4 w-4" />
                        Watch Video
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                        <p className="text-xs text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>

                    {testimonial.hasVideo && (
                      <Button size="sm" variant="ghost" className="p-1">
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>







      <Separator />

      <section className="py-20 bg-gray-50 font-codec-pro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Promise to You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the best cycling experience with unwavering quality and service standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promises.map((promise, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {promise.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{promise.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{promise.description}</p>
                  {/* <div className="bg-primary/5 rounded-lg p-3"> */}
                  {/* <div className="text-sm font-semibold text-primary">{promise.commitment}</div> */}
                  {/* </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional promise section */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MJOLLNIR Guarantee</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We stand behind our service with concrete commitments and measurable outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Service Level Agreement</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 99.5% uptime guarantee on all cycles</li>
                  <li>• Maximum 15-minute response time for support</li>
                  <li>• Daily safety and maintenance checks</li>
                  <li>• Real-time tracking and availability updates</li>
                  <li>• Immediate replacement for faulty cycles</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">User Experience Promise</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Seamless app experience across all devices</li>
                  <li>• Transparent pricing with no hidden costs</li>
                  <li>• Easy booking and return process</li>
                  <li>• Regular user feedback integration</li>
                  <li>• Continuous service improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}




      <section className="py-20 bg-white font-codec-pro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact by Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is making a real difference in sustainable mobility across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className={`flex justify-center mb-4 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional stats visualization */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-700">User Satisfaction</div>
                <div className="text-sm text-gray-500 mt-1">Based on user feedback</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-700">Service Availability</div>
                <div className="text-sm text-gray-500 mt-1">Round the clock support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15min</div>
                <div className="text-gray-700">Avg Response Time</div>
                <div className="text-sm text-gray-500 mt-1">For maintenance requests</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Mobility?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already making a positive impact with MJOLLNIR.
            Start your sustainable journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4">
              Download Mobile App
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary px-8 py-4">
              Explore Corporate Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>


    </>
  );
}