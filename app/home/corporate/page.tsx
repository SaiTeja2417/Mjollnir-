import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building, Handshake, MessageSquare, Target, Users } from "lucide-react";


export const Corporate = ()=>{

    const corporatePartners = [
    { name: "Amazon", logo: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" },
    { name: "Cognizant", logo: "https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo.jpg" },
    { name: "Capgemini", logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=100&fit=crop" },
    { name: "Accenture", logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/accenture-logo.png" }
  ];

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

    const partnerLogos = [
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop" },
    { name: "Flipkart", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop" },
    { name: "Infosys", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "TCS", logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=100&fit=crop" },
    { name: "Wipro", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop" },
    { name: "HCL", logo: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=100&fit=crop" },
    { name: "Tech Mahindra", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop" },
    { name: "Cognizant", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop" },
    { name: "IBM", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop" },
    { name: "Accenture", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop" }
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];


    return(
        <>

        <section id="corporate-tieups" className="py-20  font-codec-pro">
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
        
        </>
    )
}

export default Corporate
