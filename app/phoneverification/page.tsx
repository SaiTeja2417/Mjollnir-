'use client';

import { FoundationalColors } from '@/components/StyledText';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import axios from 'axios';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function PhoneVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryPhone = searchParams.get('phone');
    const queryEmail = searchParams.get('email');
    if (queryPhone) setPhone(queryPhone);
    if (queryEmail) setEmail(queryEmail);
  }, [searchParams]);

  const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = { email, otp, phone };
    console.log('Sending payload:', payload);
    try {
      const response = await axios.post(
        'https://vendor.lyzn.coffeecodes.in/v1/vendor/verify_otp',
        payload,
      );
      console.log('Response status:', response.status);
      console.log('Response data:', response.data);
      if (response.status === 200) {
        const token = response.data?.token;
        if (token) {
          localStorage.setItem('authToken', token); // ✅ Save token
          toast.success(response.data.message);
          router.push('/home/homepage');
        } else {
          toast.error('Token not received');
        }
        router.push('home/homepage');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log('Verification Error', error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Left Image - Desktop */}
        <div className="relative hidden h-screen w-full bg-black md:block">
          <Image
            alt="Logo Desktop"
            className="object-contain p-12"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            src="/Logo.png"
          />
        </div>

        {/* Mobile Image */}
        <div className="relative mt-12 block h-20 w-full md:hidden">
          <Image
            alt="Logo Mobile"
            className="object-contain p-5"
            fill
            sizes="100vw"
            src="/Logoblack.png"
          />
        </div>

        {/* OTP Form Section */}
        <div className="grid w-full max-w-2xl items-center gap-1.5 justify-self-center">
          <Card className="m-4 bg-black md:bg-white">
            <CardHeader>
              <CardTitle className="text-center">
                <p className="text-2xl text-white md:text-black">
                  Phone Verification
                </p>
              </CardTitle>
              <CardDescription>
                <p className="text-md text-center text-white md:text-black">
                  Please type the verification code sent to +91 1234567890
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleOtpSubmit}>
                <div className="flex w-full justify-center">

                <InputOTP
                className='flex justify-self-center'
                maxLength={6}
                onChange={(value: string) => setOtp(value)}
                value={otp}
                >
                  <InputOTPGroup className="">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <InputOTPSlot
                        className="otpp mx-1 h-12 w-12 bg-black text-xl text-white rounded-r-lg rounded-l-lg  "
                        index={index}
                        key={index}
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                        </div>

                <Button
                  className="text-md mt-6 mb-3 h-12 w-full cursor-pointer"
                  style={{ backgroundColor: FoundationalColors.MjollnirGreen }}
                  type="submit"
                >
                  Verify OTP
                </Button>
              </form>

              <p className="text-md mt-2 text-center text-white md:text-black">
                If you didn’t receive a code!
              </p>
              <p
                className="text-md cursor-pointer text-center"
                style={{ color: FoundationalColors.MjollnirGreen }}
              >
                Resend
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
