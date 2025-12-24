import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

const SecureBadgeFooter = () => {
    return (
        <div className="mt-8 flex flex-col items-center space-y-4 text-xs text-gray-500">
            <div className="flex space-x-6">
                <div className="flex items-center space-x-1">
                    <ShieldCheck className="w-4 h-4 text-gray-400" />
                    <span>PCI DSS Compliant</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Lock className="w-4 h-4 text-gray-400" />
                    <span>SSL Secure</span>
                </div>
            </div>
            <div className="flex space-x-2">
                <a href="#" className="hover:underline">Terms & Conditions</a>
                <span>•</span>
                <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
        </div>
    );
};

export default SecureBadgeFooter;
