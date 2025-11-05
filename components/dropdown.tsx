"use client"; 

import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ toggleContent, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="cursor-pointer"
            >
                {toggleContent}
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transform transition ease-out duration-200"
                    role="menu"
                    aria-orientation="vertical"
                >
                    <div className="py-1" role="none">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href || '#'}
                                onClick={(e) => {
                                    if (item.action) {
                                        item.action(e);
                                    }
                                    setIsOpen(false);
                                }}
                                className={`block px-4 py-2 text-sm ${item.isDestructive
                                        ? 'text-red-600 hover:bg-red-500 hover:text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    } transition duration-150`}
                                role="menuitem"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;