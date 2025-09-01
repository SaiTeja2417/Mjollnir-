'use client';
import {
  Flexiblecolors,
  Font16Black,
  Font16Green,
  Font24Black,
  FoundationalColors,
} from '@/components/StyledText';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import axios from 'axios';
// import { log } from "console";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface LocationItem {
  city: string;
  locations: string[];
}

export default function Signup() {
  const intialplayloads = {
    address: '',
    business_name: '',
    city: '',
    email: '',
    full_name: '',
    location: '',
    password: '',
    phone: '',
  };

  const [city, setcity] = useState<string[]>([]);
  const [location, setlocation] = useState<LocationItem[]>([]);
  const [token, setToken] = useState('');
  const [signup, setsignup] = useState(intialplayloads);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setsignup((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const GetLocations = async () => {
      try {
        const response = await axios.get(
          'https://vendor.lyzn.coffeecodes.in/v1/location/get_all',
          {
            headers: {
              // Authorization: `Bearer ${token}`,
              'x-mjollnir-admin': 'Mjollnir1234',
            },
          },
        );
        console.log(response);
        const data: LocationItem[] = response.data.locations;
        setcity(data.map((item) => item.city));
        setlocation(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      GetLocations();
    }
  }, [token]);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://vendor.lyzn.coffeecodes.in/v1/vendor/register',
        signup,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative hidden h-screen w-full bg-black md:block">
            <Image
              alt="Logo Desktop"
              className="object-contain p-12"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              src="/Logo.png"
            />
          </div>

          {/* Mobile Image (below md) */}
          <div className="relative mt-12 block h-20 w-full md:hidden">
            <Image
              alt="Logo Mobile"
              className="object-contain p-5"
              fill
              sizes="100vw"
              src="/Logoblack.png"
            />
          </div>

          <div className="grid w-full max-w-2xl items-center gap-1.5 justify-self-center">
            <div className="content-center p-5">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <Font24Black>Sign Up</Font24Black>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form action="" onSubmit={handleSignup}>
                    <Input
                      className="mt-3 mb-4 h-12"
                      name="email"
                      onChange={handleChange}
                      placeholder="Email"
                      style={{ border: '1px solid #E0E0E0', fontSize: '16px' }}
                      type="email"
                      value={signup.email}
                    />
                    <Input
                      className="mt-3 mb-4 h-12"
                      name="phone"
                      onChange={handleChange}
                      placeholder="Phone"
                      style={{ border: '1px solid #E0E0E0', fontSize: '16px' }}
                      type="text"
                      value={signup.phone}
                    />
                    <Input
                      className="mt-3 mb-4 h-12"
                      name="full_name"
                      onChange={handleChange}
                      placeholder="Full Name"
                      style={{ border: '1px solid #E0E0E0', fontSize: '16px' }}
                      type="text"
                      value={signup.full_name}
                    />
                    <Input
                      className="mt-3 mb-4 h-12"
                      name="address"
                      onChange={handleChange}
                      placeholder="Address"
                      style={{ border: '1px solid #E0E0E0', fontSize: '16px' }}
                      type="text"
                      value={signup.address}
                    />
                    <Input
                      className="mt-3 mb-4 h-12"
                      name="password"
                      onChange={handleChange}
                      placeholder="Password"
                      style={{ border: '1px solid #E0E0E0', fontSize: '16px' }}
                      type="password"
                      value={signup.password}
                    />
                    <Input
                      className="mt-3 mb-4 h-12"
                      name="business_name"
                      onChange={handleChange}
                      placeholder="Business Name"
                      style={{ border: '1px solid #E0E0E0', fontSize: '16px' }}
                      type="text"
                      value={signup.business_name}
                    />

                    <Select
                      onValueChange={(value) => {
                        setsignup((prev) => ({ ...prev, city: value }));
                      }}
                    >
                      <SelectTrigger
                        className="mt-3 w-full"
                        style={{ height: '50px' }}
                      >
                        <SelectValue placeholder="City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {city.map((cityName, index) => (
                            <SelectItem key={index} value={cityName}>
                              {cityName}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Select
                      onValueChange={(value) =>
                        setsignup((prev) => ({ ...prev, location: value }))
                      }
                    >
                      <SelectTrigger
                        className="mt-3 w-full"
                        style={{ height: '50px' }}
                      >
                        <SelectValue placeholder="Locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {location
                            .find((item) => item.city === signup.city)
                            ?.locations.map((loc, index) => (
                              <SelectItem key={index} value={loc}>
                                {loc}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    {/* <Input className="h-12 mb-4 mt-3" name="locations" onChange={handleChange} placeholder="Location" style={{ border: "1px solid #E0E0E0", fontSize: "16px" }} type="text" value={signup.locations} /> */}

                    <Button
                      className="text-md mt-3 mb-3 h-12 w-full cursor-pointer"
                      style={{ color: Flexiblecolors.AntiFlashWhite }}
                      type="submit"
                    >
                      Next
                    </Button>
                  </form>
                  <div className="flex gap-2">
                    <Font16Black>Already have an account?</Font16Black>

                    <Font16Green>
                      <Link className="cursor-pointer underline" href={'/'}>
                        Login
                      </Link>
                    </Font16Green>
                  </div>

                  <p className="text-center text-sm text-gray-400">
                    By clicking continue, you agree to our
                    <span
                      className="text-center"
                      style={{ color: FoundationalColors.VampireBlack }}
                    >
                      {' '}
                      Terms of Service{' '}
                    </span>
                  </p>
                  <p className="text-center text-sm text-gray-400">
                    and
                    <span style={{ color: FoundationalColors.VampireBlack }}>
                      {' '}
                      Privacy Policy
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
