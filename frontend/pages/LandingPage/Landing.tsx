import { ArrowRight, Sparkles } from "lucide-react";
import TextType from '../../components/TextType/TextType'

export default function Landing(){
    return(
        <section className="fixed inset-0 flex items-center overflow-hidden">
            {/* Light Background */}
            <div className="absolute inset-0 bg-gray-50" />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-80 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            
            {/* Content */}
            <div className="w-full relative z-10 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl">
                    
                    {/* Main Heading */}
                    <TextType 
                        text={["JustAStartUp"]}
                        typingSpeed={200}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-6xl md:text-8xl lg:text-8xl font-bold tracking-tight mb-6 leading none text-left"
                    />
                    
                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-12 leading-relaxed text-left">
                        We accelerate ambitious founders from idea to market.
                        Join our next cohort and transform your vision into reality.
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="text-lg px-8 py-6 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all hover:scale-105 group flex items-center justify-center">
                            Apply Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <button className="text-lg px-8 py-6 border border-gray-300 text-black rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}