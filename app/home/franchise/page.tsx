"use client"
import ImageWithFallback from "@/app/figma/ImageWithFallback";
// import { ImageWithFallback } from "@/app/figma/ImageWithFallback";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award,BarChart3, Building2, Calculator, CheckCircle, DollarSign, Globe, Headphones, MapPin, Phone, Shield, Target, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Franchise(){

    const [roiInputs, setRoiInputs] = useState({
        investment: 500000,
        location: 'urban',
        bikeCount: 50
      });
    
      // const [formData, setFormData] = useState({
      //   name: '',
      //   email: '',
      //   phone: '',
      //   city: '',
      //   investment: '',
      //   experience: '',
      //   message: ''
      // });
    
      const calculateROI = () => {
        const { investment, location, bikeCount } = roiInputs;
        const locationMultiplier = location === 'urban' ? 1.2 : location === 'campus' ? 1.0 : 0.8;
        const monthlyRevenue = bikeCount * 2000 * locationMultiplier;
        const monthlyProfit = monthlyRevenue * 0.35; // 35% profit margin
        const paybackPeriod = investment / monthlyProfit;
        const annualROI = ((monthlyProfit * 12) / investment) * 100;
    
        return {
          monthlyRevenue: Math.round(monthlyRevenue),
          monthlyProfit: Math.round(monthlyProfit),
          paybackPeriod: Math.round(paybackPeriod * 10) / 10,
          annualROI: Math.round(annualROI * 10) / 10
        };
      };
    
      const problems = [
        {
          icon: MapPin,
          title: 'Urban Mobility Crisis',
          description: 'Traffic congestion and limited parking create daily commuting challenges for millions.',
          impact: '2.5 hrs/day lost in traffic'
        },
        {
          icon: Building2,
          title: 'Campus Transportation Gap',
          description: 'Large campuses lack efficient internal transportation, affecting productivity and satisfaction.',
          impact: '40% reduction in efficiency'
        },
        {
          icon: TrendingUp,
          title: 'Growing Market Demand',
          description: 'Increasing demand for sustainable, cost-effective transportation solutions.',
          impact: '300% market growth expected'
        }
      ];
    
      const process = [
        {
          step: 1,
          title: 'Initial Consultation',
          description: 'Discuss your goals, location, and investment capacity with our franchise team.',
          icon: Phone,
          duration: '1-2 weeks'
        },
        {
          step: 2,
          title: 'Site Assessment',
          description: 'Our experts evaluate your proposed location for optimal station placement.',
          icon: MapPin,
          duration: '2-3 weeks'
        },
        {
          step: 3,
          title: 'Agreement & Setup',
          description: 'Sign the franchise agreement and begin station installation and bike deployment.',
          icon: Award,
          duration: '3-4 weeks'
        },
        {
          step: 4,
          title: 'Launch & Support',
          description: 'Grand opening with full marketing support and ongoing operational guidance.',
          icon: TrendingUp,
          duration: '1 week'
        }
      ];
    
      const partners = [
        { name: 'IIT Hyderabad', type: 'Educational', logo: '🎓', users: '15K+' },
        { name: 'Tech Mahindra', type: 'Corporate', logo: '🏢', users: '25K+' },
        { name: 'Mumbai University', type: 'Educational', logo: '🎓', users: '30K+' },
        { name: 'Infosys Campus', type: 'Corporate', logo: '🏢', users: '20K+' },
        { name: 'HITEC City', type: 'Commercial', logo: '🏬', users: '50K+' },
        { name: 'Bangalore IT Hub', type: 'Commercial', logo: '🏬', users: '35K+' }
      ];
    
      const benefits = [
        {
          icon: TrendingUp,
          title: 'Proven Business Model',
          description: 'Join a successful and scalable bike-sharing franchise with demonstrated ROI.',
          highlight: '35% avg ROI'
        },
        {
          icon: Headphones,
          title: '24/7 Support',
          description: 'Complete operational support including maintenance, technology, and customer service.',
          highlight: '24/7 availability'
        },
        {
          icon: BarChart3,
          title: 'Marketing & Branding',
          description: 'National marketing campaigns and local promotional support to drive usage.',
          highlight: '360° marketing'
        },
        {
          icon: Shield,
          title: 'Technology Platform',
          description: 'Advanced mobile app, IoT-enabled bikes, and comprehensive analytics dashboard.',
          highlight: 'IoT enabled'
        }
      ];
    
      const enablementProgram = [
        'Comprehensive training for franchise operators',
        'On-site setup and installation support',
        'Marketing materials and local promotion',
        'Ongoing operational guidance and best practices',
        'Technology training and troubleshooting',
        'Financial planning and performance optimization'
      ];
    
      const roiData = calculateROI();
    
      // const handleFormSubmit = (e: React.FormEvent) => {
      //   e.preventDefault();
      //   console.log('Form submitted:', formData);
      //   // Here you would typically send the data to your backend
      //   alert('Thank you for your interest! Our franchise team will contact you within 24 hours.');
      // };

    return(
        <>
        <section id="franchise" className="py-10 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Franchise Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive franchise program can help you build a successful 
            sustainable mobility business in your region.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-5 ">
            <TabsTrigger className="xl:text-xl lg:text-xl md:text-sm sm-text:sm" value="overview">Overview</TabsTrigger>
            <TabsTrigger className="xl:text-xl lg:text-xl md:text-sm sm-text:sm" value="problem">Problem</TabsTrigger>
            <TabsTrigger className="xl:text-xl lg:text-xl md:text-sm sm-text:sm" value="process">Process</TabsTrigger>
            <TabsTrigger className="xl:text-xl lg:text-xl md:text-sm sm-text:sm" value="partners">Partners</TabsTrigger>
            <TabsTrigger className="xl:text-xl lg:text-xl md:text-sm sm-text:sm" value="roi">ROI </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-12">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Transform Mobility in Your City
                </h3>
                <p className="text-lg text-gray-600">
                  MJOLLNIR offers a comprehensive franchise opportunity in the rapidly growing 
                  sustainable mobility sector. With proven technology, established operations, 
                  and strong market demand, its the perfect time to join our mission.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">25+</div>
                    <div className="text-sm text-gray-600">Active Locations</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">50K+</div>
                    <div className="text-sm text-gray-600">Daily Rides</div>
                  </div>
                </div>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Request Franchise Information
                </Button>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Franchise opportunity"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Partner Benefits</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.map((benefit, index) => {
                    const hoverColors = [
                      'hover:border-gradient-to-br hover:from-blue-50 hover:to-blue-300 hover:border-blue-300',
                      'hover:border-gradient-to-br hover:from-green-50 hover:to-green-300 hover:border-green-300',
                      'hover:border-gradient-to-br hover:from-purple-50 hover:to-purple-300 hover:border-purple-300',
                      'hover:border-gradient-to-br hover:from-orange-50 hover:to-orange-300 hover:border-orange-300'
                    ];
                    const iconColors = [
                      'group-hover:text-blue-600',
                      'group-hover:text-green-600',
                      'group-hover:text-purple-600',
                      'group-hover:text-orange-600'
                    ];
                    const badgeColors = [
                      'bg-blue-100 text-blue-800',
                      'bg-green-100 text-green-800',
                      'bg-purple-100 text-purple-800',
                      'bg-orange-100 text-orange-800'
                    ];
                    return (
                      <Card key={index} className={`group text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${hoverColors[index % 4]}`}>
                        <CardContent className="p-6">
                          <benefit.icon className={`h-12 w-12 text-green-600 mx-auto mb-4 transition-colors duration-300 ${iconColors[index % 4]}`} />
                          <h4 className={`font-semibold mb-2 text-gray-900 transition-colors duration-300 group-hover:text-${iconColors[index % 4].split('-')[2]}-600`}>{benefit.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{benefit.description}</p>
                          <Badge className={`text-xs ${badgeColors[index % 4]}`}>{benefit.highlight}</Badge>
                        </CardContent>
                      </Card>
                  );
                })}
              </div>
            </div>

            {/* Enablement Program */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Partner Enablement Program
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {enablementProgram.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="problem" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Problems MJOLLNIR Solves
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The mobility sector faces significant challenges that create massive opportunities 
                for innovative solutions like MJOLLNIR.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <problem.icon className="h-16 w-16 text-red-500 mx-auto mb-6" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h4>
                    <p className="text-gray-600 mb-4">{problem.description}</p>
                    <Badge variant="outline" className="text-red-600 border-red-200">
                      {problem.impact}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Solution Impact</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-600">40%</div>
                  <div className="text-gray-600">Reduction in Traffic Congestion</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">60%</div>
                  <div className="text-gray-600">Lower Transportation Costs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">80%</div>
                  <div className="text-gray-600">Improvement in Air Quality</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="process" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Franchise Process Overview</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our streamlined franchise process ensures a smooth journey from initial consultation to successful launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="h-8 w-8 text-green-600" />
                      </div>
                      <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 -mt-2">
                        <span className="font-bold">{step.step}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                      <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                    </CardContent>
                  </Card>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-green-300"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Investment Ranges</h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-4">
                  <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">Starter Package</div>
                  <div className="text-2xl font-bold text-blue-600">₹5-15L</div>
                  <div className="text-sm text-gray-600">15-30 bikes</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold">Growth Package</div>
                  <div className="text-2xl font-bold text-green-600">₹15-35L</div>
                  <div className="text-sm text-gray-600">30-70 bikes</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold">Enterprise Package</div>
                  <div className="text-2xl font-bold text-purple-600">₹35L+</div>
                  <div className="text-sm text-gray-600">70+ bikes</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="partners" className="space-y-10">
            <div className="text-center mb-14">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted Partners</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our network of successful partners across educational institutions, 
                corporate campuses, and commercial areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{partner.logo}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{partner.type}</Badge>
                          <Badge className="bg-green-100 text-green-800">{partner.users} users</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Partner Success Stories
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold text-lg">IIT</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">IIT Hyderabad</h5>
                      <p className="text-sm text-gray-500">Educational Campus</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    MJOLLNIR transformed our campus mobility with 87% increased satisfaction
                  </p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">+87% Satisfaction</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">-60% Costs</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-lg">TC</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Tech City Hub</h5>
                      <p className="text-sm text-gray-500">Commercial Zone</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Created sustainable commuting for thousands, supporting green initiatives.
                  </p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">5K+ Users</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Carbon Neutral</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold text-lg">MU</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Mumbai Uni</h5>
                      <p className="text-sm text-gray-500">University Campus</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Reduced campus congestion by 70% with our bike-sharing solution.
                  </p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">-70% Traffic</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">15K Students</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="roi" className="space-y-8">
            <div className="text-center mb-12">
              <Calculator className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">ROI Calculator</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Calculate your potential return on investment based on location, investment amount, and fleet size.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle>Investment Parameters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Initial Investment (₹)
                    </label>
                    <Input
                      type="number"
                      value={roiInputs.investment}
                      onChange={(e) => setRoiInputs({...roiInputs, investment: Number(e.target.value)})}
                      placeholder="500000"
                      className="text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location Type
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-md text-lg"
                      value={roiInputs.location}
                      onChange={(e) => setRoiInputs({...roiInputs, location: e.target.value})}
                    >
                      <option value="urban">Urban/Metro City (+20% premium)</option>
                      <option value="campus">Campus/Corporate (base rate)</option>
                      <option value="suburban">Suburban/Tier-2 City (-20% discount)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Bikes
                    </label>
                    <Input
                      type="number"
                      value={roiInputs.bikeCount}
                      onChange={(e) => setRoiInputs({...roiInputs, bikeCount: Number(e.target.value)})}
                      placeholder="50"
                      className="text-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">ROI Projections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-green-600">
                        ₹{roiData.monthlyRevenue.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Monthly Revenue</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">
                        ₹{roiData.monthlyProfit.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Monthly Profit</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-purple-600">
                        {roiData.paybackPeriod} months
                      </div>
                      <div className="text-sm text-gray-600">Payback Period</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-orange-600">
                        {roiData.annualROI}%
                      </div>
                      <div className="text-sm text-gray-600">Annual ROI</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Assumptions:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Average revenue per bike: ₹2,000/month</li>
                      <li>• Operating margin: 35%</li>
                      <li>• Location factor applied</li>
                      <li>• Includes maintenance & support costs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-sm text-yellow-800">
                <strong>Disclaimer:</strong> These are estimated projections based on average performance data. 
                Actual results may vary based on location, market conditions, and operational efficiency. 
                Please consult with our franchise team for detailed financial projections specific to your situation.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
        </>
    )
}
