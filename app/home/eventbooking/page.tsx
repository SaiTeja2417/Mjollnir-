"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Mail, MapPin, Phone, Users } from "lucide-react";
import { useState } from "react";

export default function EventBooking() {

  // const [eventType, setEventType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // const eventTypes = [
  //     { value: "corporate", label: "Corporate Event", description: "Team building, company outings" },
  //     { value: "wedding", label: "Wedding/Celebration", description: "Weddings, anniversaries, parties" },
  //     { value: "festival", label: "Festival/Cultural", description: "Cultural events, festivals" },
  //     { value: "sports", label: "Sports Event", description: "Cycling competitions, marathons" },
  //     { value: "community", label: "Community Event", description: "Social gatherings, fundraisers" },
  //     { value: "tourism", label: "Tourism/Sightseeing", description: "City tours, heritage walks" }
  // ];

  const timeSlots = [
    "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  return (
    <>
      <section className="py-10 bg-gray-50 font-codec-pro">
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
  )
}


