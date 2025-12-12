import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t py-8 px-6 md:px-12 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-500">
                <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Contact Us</a>
            </div>
            <div className="text-center mt-6 text-xs text-slate-400">
                &copy; 2023 Telco Lanka PLC. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
