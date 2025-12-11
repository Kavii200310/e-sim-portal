import React from 'react';
import { ShieldCheck, Lock } from "lucide-react";

const SecureBadgeFooter = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-12 mb-6">
            <div className="flex items-center gap-6 text-gray-500 text-xs font-medium mb-4">
                <div className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-gray-400" />
                    <span>PCI DSS Compliant</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center gap-1.5">
                    <Lock size={14} className="text-gray-400" />
                    <span>SSL Secure</span>
                </div>
            </div>
            <div className="flex gap-2 text-[10px] text-gray-400">
                <span className="hover:text-gray-500 cursor-pointer transition-colors">Terms & Conditions</span>
                <span>•</span>
                <span className="hover:text-gray-500 cursor-pointer transition-colors">Privacy Policy</span>
            </div>
        </div>
    );
};

export default SecureBadgeFooter;
