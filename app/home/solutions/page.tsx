"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';
import { ChevronDown, GraduationCap, Building2, MapPin, Camera, Activity } from 'lucide-react';
import ImageWithFallback from '@/app/figma/ImageWithFallback';


export default function Solutions() {
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

  return (
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
  );
}