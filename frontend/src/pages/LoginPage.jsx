import React, { useState } from "react";
import Header from "@/components/Layout/Header.jsx";
import Footer from "@/components/Layout/Footer.jsx";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Smartphone, Globe, CheckCircle } from "lucide-react";

const LoginPage = () => {
  const [language, setLanguage] = useState("english");
  const [isLoading, setIsLoading] = useState(false);
  const [showSLUDIOption, setShowSLUDIOption] = useState(true);

  const handleSLUDILogin = () => {
    setIsLoading(true);
    
    console.log("Redirecting to SLUDI authentication...");
    
  
  };

 

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">

      
      <div className="w-full max-w-md mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
        
          
        
          <div className="text-left">
           <Header/>
          </div>
        </div>
        
        <div className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-600 rounded-lg p-3 mb-6">
          <div className="flex items-center justify-center gap-2">
            <Globe className="h-5 w-5 text-white" />
            <span className="text-white font-semibold text-sm">
              Trusted by Sri Lanka Department of Telecommunications
            </span>
          </div>
        </div>
      </div>

      <Card className="w-full max-w-md shadow-lg border-2 border-gray-100">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <Smartphone className="h-12 w-12 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Welcome to Telco E-Sim Portal
          </CardTitle>
          <CardDescription className="text-gray-600">
            Secure access to your digital E-Sim services
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="language" className="text-gray-700">Select Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-full border-2 border-gray-200">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="sinhala">සිංහල</SelectItem>
               
              </SelectContent>
            </Select>
          </div>

          {showSLUDIOption && (
            <div className="space-y-4">
             
              <Button
                onClick={handleSLUDILogin}
                disabled={isLoading}
                className="w-full bg-linear-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white py-6 text-lg font-semibold shadow-lg transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Connecting to SLUDI...
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 h-5 w-5" />
                    Sign in with SLUDI
                  </>
                )}
              </Button>

              <Alert className="bg-blue-50 border-blue-200">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-700 text-sm">
                  <strong>Trusted Authentication.</strong> Verified through Sri Lankan digital identity system
                </AlertDescription>
          </Alert>

            <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">First time user?</p>
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-800 font-semibold"
              onClick={() => setShowSLUDIOption(!showSLUDIOption)}
            >
              Click here to chain verified SLUDI digital identity
            </Button>
          </div>
        </div>
        
      )}








    </CardContent>
    </Card>

        
           
            
         
       

      <div className="mt-8 text-center space-y-2">
         <Footer />
      </div>
    </div>
  );
};

export default LoginPage;