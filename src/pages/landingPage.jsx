import React from 'react';
import ButtonGroup from '@/components/ButtonComponents/ButtonGroup.jsx';
import landingPageImage from '@/assets/Image1.png';
import FeatureCard from '@/components/FeatureCard.jsx';
import Footer from '@/components/LayoutComponents/Footer.jsx';
import Header from '@/components/LayoutComponents/Header.jsx';
import { ShoppingCart, Shield, CheckCircle } from "lucide-react";




const features = [
  {
    icon: ShoppingCart,
    title: "Choose Your Plan",
    description: "Select the perfect data and voice package that fits your needs.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Complete your purchase through our secure payment gateway.",
  },
  {
    icon: CheckCircle,
    title: "Activate Instantly",
    description: "Scan the QR code with your phone to activate your eSIM immediately.",
  },
];


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
     
        <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Header />
         <ButtonGroup type="large"> Buy New eSIM </ButtonGroup>
      </div>
    </header>



      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        
          <div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Virtual SIM<br />Purchase Portal
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Get Connected Instantly. Your Digital SIM is Just a Click Away.
            </p>
            <div className="flex items-center gap-4">
             <ButtonGroup>Buy New eSIM</ButtonGroup>

            </div>
          </div>
          

    
           <div className="relative">
            <img
              src={landingPageImage}
              alt="Virtual SIM illustration"
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>



        <section className="container mx-auto px-4 py-16">
         <h2 className="text-3xl font-bold mb-12">Easy as 1-2-3</h2>
        <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
                ))}
        </div>
        </section>






      <Footer />

      
    </div>
  );
}