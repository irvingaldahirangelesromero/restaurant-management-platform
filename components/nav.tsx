import Image from "next/image";
import Logo from "@/public/assets/logo.png"
export default function Nav({ children }) {


    return (
        <header className="fixed top-0 left-0 right-0 z-10">
            <nav className={`shadow-lg backdrop-blur-sm bg-white/80 border-b border-gray-100`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <Image
                                src={Logo}
                                width={100}
                                alt="Picture of the author"
                            />
                        </div>
                        
                        <div className={`flex items-center space-x-3`}>
                            {children}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
  );
}