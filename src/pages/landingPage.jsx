import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '@/components/ButtonComponents/ButtonGroup.jsx';
import landingPageImage from '@/assets/Image1.png';
import FeatureCard from '@/components/Card/FeatureCard.jsx';
import Footer from '@/components/Layout/Footer.jsx';
import Header from '@/components/Layout/Header.jsx';
import { ShoppingCart, Shield, CheckCircle, Zap, Smartphone, Wifi, ShieldCheck, Bolt, Clock, Signal } from "lucide-react";



const features = [
  {
    icon: ShoppingCart,
    title: "Choose Your Plan",
    description: "Select from flexible data plans that match your usage. No contracts, no hidden fees.",
    accentColor: "from-blue-500 to-cyan-400"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Bank-level encryption with multiple payment options. Your data is always protected.",
    accentColor: "from-green-500 to-emerald-400"
  },
  {
    icon: CheckCircle,
    title: "Activate Instantly",
    description: "QR code activation in seconds. No shipping, no waiting, instant connectivity.",
    accentColor: "from-purple-500 to-pink-400"
  },
];

const benefits = [
  { icon: Zap, text: "High-Speed 5G/LTE Data" },
  { icon: Smartphone, text: "Digital Instant Delivery" },
  { icon: Wifi, text: "No Physical SIM Required" },
  { icon: ShieldCheck, text: "Secure & Encrypted" },
  { icon: Bolt, text: "Instant Activation" },
  { icon: Clock, text: "24/7 Customer Support" },
];

 export default function LandingPage() {


   const navigate = useNavigate(); 

  const handleGetESIMClick = () => {
    navigate('/choose-number'); 
  };


  return (
    <div className="min-h-screen bg-linear-to-r from-gray-50 via-white to-blue-50">
      
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Header />
          <ButtonGroup type="large" className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={handleGetESIMClick}>
            Get eSIM Now
          </ButtonGroup>
        </div>
      </header>

      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-linear-to-r from-blue-50 to-cyan-50 rounded-full text-blue-600 font-medium text-sm mb-2">
              <Zap className="w-4 h-4" />
              Instant Digital SIM
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-linear-to-r  from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Digital eSIM
              </span>
              <br />
              <span className="text-gray-900">For Seamless</span>
              <br />
              <span className="text-gray-900">Connectivity</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Experience instant activation, affordable data plans, and reliable connectivity wherever you go.
            </p>



            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {benefits.map((benefit, index) => (   
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="text-sm sm:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>

         
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ButtonGroup className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                onClick={handleGetESIMClick}>
                <Zap className="w-5 h-5 mr-2" />
                 Get eSIM Now
              </ButtonGroup>
              
            </div>
          </div>

      
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={landingPageImage}
                alt="eSIM Connectivity"
                className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
          
              <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent"></div>
            </div>
            
            {/*  Stats Card */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 sm:p-6 w-[90%] max-w-sm">
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Reliability</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">5G</div>
                  <div className="text-xs sm:text-sm text-gray-600">High Speed</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section  */}
      <section className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get Connected in{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Digital SIM activation made simple, secure, and instant.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full pt-6 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-100"
                iconClassName={`bg-gradient-to-br ${feature.accentColor} p-3 rounded-2xl text-white`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-8">
        <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Trusted by Thousands of Users
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">4.9★</div>
              <div className="text-xs sm:text-sm text-gray-600">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-xs sm:text-sm text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-xs sm:text-sm text-gray-600">Network Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">Instant</div>
              <div className="text-xs sm:text-sm text-gray-600">Activation</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12">
        <div className="bg-linear-to-r from-cyan-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready for Instant Connectivity?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Join thousands of users who switched to digital SIM. No shipping, no waiting.
          </p>
          <ButtonGroup className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
           onClick={handleGetESIMClick}>
            <Signal className="w-6 h-6 mr-2" />
            Get Your eSIM Now
          </ButtonGroup>
        </div>
      </section>

      <Footer />
    </div>
  );
}