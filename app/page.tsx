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
// import { Divider } from "@/components/ui/Divider";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Login() {
  const router = useRouter();
  const intialplayloads = {
    // email: "",
    phone: '',
  };

  const [login, setlogin] = useState(intialplayloads);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setlogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://vendor.lyzn.coffeecodes.in/v1/vendor/login',
        login,
      );
      console.log('success', response.data);
      if (response.status === 200) {
        toast.success(response.data.message);
        router.push(
          `/phoneverification?phone=${encodeURIComponent(login.phone)}`,
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (error: unknown) {
      console.error('Login failed:', error);

      let message = 'Login failed. Please try again.';

      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data?.message || message;
      }

      toast.error(message);
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
                    <Font24Black>Login</Font24Black>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form action="" onSubmit={handleLogin}>
                    <Label className="text-md font-codecbold" htmlFor="phone">
                      Phone
                    </Label>
                    <Input
                      className="h-12"
                      name="phone"
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      style={{ border: '1px solid #E0E0E0', fontSize: '16px' }}
                      type="text"
                      value={login.phone}
                    />
                    {/* <Link href={"/phoneverification"}> */}
                    <Button
                      className="text-md mt-4 mb-3 h-12 w-full cursor-pointer"
                      style={{ color: Flexiblecolors.AntiFlashWhite }}
                      type="submit"
                    >
                      Login
                    </Button>
                    {/* </Link> */}
                  </form>

                  <div className="flex gap-2">
                    <Font16Black>Dont have an account?</Font16Black>

                    <Font16Green>
                      <Link
                        className="cursor-pointer underline"
                        href={'/signup'}
                      >
                        Signup
                      </Link>
                    </Font16Green>
                  </div>

                  <p className="mt-4 text-center text-sm text-gray-400">
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
