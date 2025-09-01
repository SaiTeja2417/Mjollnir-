"use client"
import { ImageWithFallback } from "@/app/figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import { Card, CardContent, CardHeader, CardTitle } from "/ui/card";
// import { ImageWithFallback } from "@/figma/ImageWithFallback";
import { Target, Eye, Heart, Calendar, Users, Building, Recycle, Bike, UsersRound, Route, Globe, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

export default function AboutMjollnir() {
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
  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "MJOLLNIR was founded with a vision to revolutionize urban mobility through sustainable cycling solutions."
    },
    {
      year: "2021", 
      title: "First Campus Launch",
      description: "Successfully launched our first campus deployment in Hyderabad, serving 500+ users daily."
    },
    {
      year: "2022",
      title: "Corporate Partnerships",
      description: "Expanded to major corporate campuses, partnering with leading tech companies across India."
    },
    {
      year: "2023",
      title: "Scale & Growth",
      description: "Reached 25 campuses and 50,000+ users, saving over 100 tons of CO₂ emissions."
    },
    {
      year: "2024",
      title: "Smart Technology",
      description: "Introduced AI-powered analytics and IoT-enabled cycles for enhanced user experience."
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding across major Indian cities with a goal to impact 1 million users by 2026."
    }
  ];

  const team = [
    {
      name: "Arjun Patel",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Former sustainability consultant with 10+ years in green technology"
    },
    // {
    //   name: "Priya Krishnan",
    //   role: "CTO",
    //   image: "https://images.unsplash.com/photo-1494790108755-2616b95b9ece?w=300&h=300&fit=crop&crop=face",
    //   bio: "Tech leader specializing in IoT and smart city solutions"
    // },
    // {
    //   name: "Rajesh Kumar",
    //   role: "COO",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    //   bio: "Operations expert with experience in scaling mobility platforms"
    // }
  ];

  return (
    <>
    <section id="about" className="py-20 bg-white font-codec-pro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About MJOLLNIR</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering sustainable mobility solutions for a greener tomorrow
          </p>
        </div>



        {/* Brand Story */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                MJOLLNIR was born from a simple yet powerful idea: to make sustainable transportation accessible, 
                convenient, and impactful. Named after the legendary hammer that never misses its target, we aim 
                to hit our mark in creating a cleaner, healthier urban environment.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Starting in the tech corridors of Hyderabad, we recognized that employees wanted eco-friendly 
                commuting options but lacked convenient access. Our solution bridged this gap by providing 
                smart, maintained, and strategically located cycling infrastructure.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, MJOLLNIR serves thousands of users across multiple campuses, saving tons of CO₂ emissions 
                while promoting healthier lifestyles and building stronger communities.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="MJOLLNIR team and vision"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be Indias leading sustainable mobility platform, transforming how people commute 
                  and interact with their urban environment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To provide accessible, reliable, and smart cycling solutions that reduce carbon emissions 
                  while promoting health and community building.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sustainability, Innovation, Community, and Reliability drive everything we do 
                  in our mission to create positive environmental impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-20 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-full ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
              <CardTitle>{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">{milestone.year}</CardTitle>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">{milestone.title}</h4>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team (Optional) */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Leadership Team</h3>
          <div className="grid  gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center w-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-bold text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>


        <Separator/>

    

    </>
  );
}