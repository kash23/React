import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Menu = () => {
    const [activeSection, setActiveSection] = useState('home'); // Default to 'home'

    const sections = ['home', 'about', 'services', 'contact'];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections]);

    return (
        <div className="text-bg-light text-center fixed-top">
            <div className="justify-content-center d-flex gap-4 gap-sm-5 gap-md-5 gap-lg-5">
                {sections.map(section => (
                    <p key={section} className="m-0 p-lg-3">
                        <a 
                            className={`underline ${activeSection === section ? 'active' : ''}`} 
                            href={`#${section}`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Menu;
