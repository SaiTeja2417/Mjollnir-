"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

function PhoneVerificationContent() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryPhone = searchParams.get("phone");
    const queryEmail = searchParams.get("email");
    if (queryPhone) setPhone(queryPhone);
    if (queryEmail) setEmail(queryEmail);
  }, [searchParams]);

  const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = { email, otp, phone };
    console.log("Sending payload:", payload);
    try {
      const response = await axios.post(
        "https://vendor.lyzn.coffeecodes.in/v1/vendor/verify_otp",
        payload
      );
      console.log("Response status:", response.status);
      console.log("Response data:", response.data);
      if (response.status === 200) {
        const token = response.data?.token;
        if (token) {
          localStorage.setItem("authToken", token); // ✅ Save token
          toast.success(response.data.message);
          router.push("/home/homepage");
        } else {
          toast.error("Token not received");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Verification Error", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Phone Verification
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Enter the OTP sent to <span className="font-medium">{phone}</span>
        </p>
        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default function PhoneVerification() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PhoneVerificationContent />
    </Suspense>
  );
}
