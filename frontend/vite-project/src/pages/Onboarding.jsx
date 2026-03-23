import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Discover Events",
    desc: "Explore technical and cultural fests",
    icon: "🚀",
  },
  {
    title: "Easy Registration",
    desc: "Register in seconds",
    icon: "🎟️",
  },
  {
    title: "Campus Community",
    desc: "Connect with students",
    icon: "🤝",
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-6 text-white bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
      
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <div className="text-7xl mb-6">{data[step].icon}</div>
        <h1 className="text-3xl font-bold">{data[step].title}</h1>
        <p className="mt-2 opacity-80">{data[step].desc}</p>
      </div>

      <div className="w-full space-y-4">
        <div className="flex justify-center space-x-2">
          {data.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full ${
                step === i ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            step < data.length - 1
              ? setStep(step + 1)
              : navigate("/role")
          }
          className="w-full py-3 bg-white text-pink-600 font-bold rounded-2xl"
        >
          {step === data.length - 1 ? "Get Started" : "Next"}
        </button>
      </div>
    </div>
  );
}