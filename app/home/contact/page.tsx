"use client"
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, GraduationCap, Wrench, Phone, Mail, MapPin } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
// import { Calendar, Clock, Users } from "lucide-react";

export default function GetInTouch() {
  

  const [selectedForm, setSelectedForm] = useState("corporate");
  

  return (
    <>
      <section id="contact" className="py-20 bg-white font-codec-pro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your mobility experience? Contact us today to get started
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-gray-600">+91 40 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-600">contact@mjollnir@/componentscom</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Headquarters</p>
                      <p className="text-sm text-gray-600">Hyderabad, Telangana, India</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Business Hours</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-primary font-semibold">24/7 Customer Support Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Forms */}
            <div className="lg:col-span-2">
              <Tabs value={selectedForm} onValueChange={setSelectedForm}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="corporate" className="flex items-center space-x-2">
                    <Building className="h-4 w-4" />
                    <span>Corporate</span>
                  </TabsTrigger>
                  <TabsTrigger value="campus" className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Campus</span>
                  </TabsTrigger>
                  <TabsTrigger value="services" className="flex items-center space-x-2">
                    <Wrench className="h-4 w-4" />
                    <span>Services</span>
                  </TabsTrigger>
                </TabsList>

                {/* Corporate Inquiry Form */}
                <TabsContent value="corporate">
                  <Card>
                    <CardHeader>
                      <CardTitle>Corporate Partnership Inquiry</CardTitle>
                      <CardDescription>
                        Interested in bringing MJOLLNIR to your organization? Lets discuss your needs@/components
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="corp-company">Company Name *</Label>
                            <Input id="corp-company" placeholder="Your company name" />
                          </div>
                          <div>
                            <Label htmlFor="corp-contact">Contact Person *</Label>
                            <Input id="corp-contact" placeholder="Your full name" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="corp-email">Email *</Label>
                            <Input id="corp-email" type="email" placeholder="contact@company@/componentscom" />
                          </div>
                          <div>
                            <Label htmlFor="corp-phone">Phone *</Label>
                            <Input id="corp-phone" placeholder="+91 12345 67890" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label  htmlFor="corp-employees">Number of Employees</Label>
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="50-200">50-200</SelectItem>
                                <SelectItem value="200-500">200-500</SelectItem>
                                <SelectItem value="500-1000">500-1000</SelectItem>
                                <SelectItem value="1000+">1000+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="corp-industry">Industry</Label>
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="technology">Technology</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="corp-location">Office Location *</Label>
                          <Input id="corp-location" placeholder="City, State" />
                        </div>

                        <div>
                          <Label htmlFor="corp-requirements">Partnership Requirements</Label>
                          <Textarea
                            id="corp-requirements"
                            placeholder="Tell us about your corporate mobility needs, expected usage, timeline, and any specific requirements@/components"
                            rows={4}
                          />
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Submit Corporate Inquiry
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Campus Inquiry Form */}
                <TabsContent value="campus">
                  <Card>
                    <CardHeader>
                      <CardTitle>Campus Partnership Inquiry</CardTitle>
                      <CardDescription>
                        Bring sustainable mobility to your educational institution or campus@/components
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="campus-name">Institution Name *</Label>
                            <Input id="campus-name" placeholder="University/College name" />
                          </div>
                          <div>
                            <Label htmlFor="campus-contact">Contact Person *</Label>
                            <Input id="campus-contact" placeholder="Your full name" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="campus-email">Email *</Label>
                            <Input id="campus-email" type="email" placeholder="contact@institution@/componentsedu" />
                          </div>
                          <div>
                            <Label htmlFor="campus-phone">Phone *</Label>
                            <Input id="campus-phone" placeholder="+91 12345 67890" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="campus-students">Student Population</Label>
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="500-1000">500-1000</SelectItem>
                                <SelectItem value="1000-5000">1000-5000</SelectItem>
                                <SelectItem value="5000-10000">5000-10000</SelectItem>
                                <SelectItem value="10000+">10000+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="campus-type">Institution Type</Label>
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="university">University</SelectItem>
                                <SelectItem value="college">College</SelectItem>
                                <SelectItem value="technical">Technical Institute</SelectItem>
                                <SelectItem value="research">Research Institution</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="campus-location">Campus Location *</Label>
                          <Input id="campus-location" placeholder="City, State" />
                        </div>

                        <div>
                          <Label htmlFor="campus-requirements">Campus Requirements</Label>
                          <Textarea
                            id="campus-requirements"
                            placeholder="Describe your campus layout, expected usage patterns, integration needs, and any specific requirements@/components"
                            rows={4}
                          />
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Submit Campus Inquiry
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Cycle Services Form */}
                <TabsContent value="services">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cycle Services Request</CardTitle>
                      <CardDescription>
                        Need maintenance, support, or have questions about our services?
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="service-name">Full Name *</Label>
                            <Input id="service-name" placeholder="Your full name" />
                          </div>
                          <div>
                            <Label htmlFor="service-email">Email *</Label>
                            <Input id="service-email" type="email" placeholder="your@/componentsemail@example@/componentscom" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="service-phone">Phone</Label>
                            <Input id="service-phone" placeholder="+91 12345 67890" />
                          </div>
                          <div>
                            <Label htmlFor="service-type">Service Type *</Label>
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="maintenance">Cycle Maintenance</SelectItem>
                                <SelectItem value="technical">Technical Support</SelectItem>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="feedback">Feedback</SelectItem>
                                <SelectItem value="complaint">Complaint</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="service-location">Location/Campus</Label>
                          <Input id="service-location" placeholder="Which campus or location?" />
                        </div>

                        <div>
                          <Label htmlFor="service-priority">Priority Level</Label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger >
                            <SelectContent>
                              <SelectItem value="low">Low - General inquiry</SelectItem>
                              <SelectItem value="medium">Medium - Service needed soon</SelectItem>
                              <SelectItem value="high">High - Urgent assistance required</SelectItem>
                              <SelectItem value="emergency">Emergency - Immediate help needed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="service-details">Service Details *</Label>
                          <Textarea
                            id="service-details"
                            placeholder="Please describe your service request, issue, or inquiry in detail@/components"
                            rows={4}
                          />
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Submit Service Request
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <Separator />


      

    </>


  );
}