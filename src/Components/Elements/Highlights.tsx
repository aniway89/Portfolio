
import { GoCalendar, GoCodeSquare, GoFileDirectory, GoMortarBoard, GoTerminal, GoTrophy } from "react-icons/go";

import { FaRegUser } from "react-icons/fa6";
import { CiMedal } from "react-icons/ci";

// Single Highlight Card Component (Black & White Dark Version)
interface HighlightCardProps {
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  text: string;
}

function HighlightCard({ icon: Icon, number, text }: HighlightCardProps) {
  return (
    <div className="highlight-card flex flex-col items-center justify-center p-6 bg-black    rounded-lg hover:border-gray-600 transition-all duration-300 hover:scale-100 group">
      <div className="icon mb-3 text-white group-hover:text-white">
        <Icon className="text-3xl" />
      </div>
      <div className="number text-xl font-semibold text-gray-200 hover:text-white mb-1">
        {number}
      </div>
      <div className="text text-gray-400 text-center text-sm group-hover:text-gray-200">
        {text}
      </div>
    </div>
  );
}

// Main Highlights Component
function Highlights() {
  return (
    <div className="highlights-section my-12">
      <h2 className="text-2xl text-left text-white mb-8 text-center">
        Highlights & Milestones
      </h2>
      
      {/* Main Highlights Grid */}
      <div className="highlights-grid grid grid-cols-2 md:grid-cols-4 gap-4">
        <HighlightCard 
          icon={GoFileDirectory}
          number="10+"
          text="Projects Built"
        />
        
        <HighlightCard 
          icon={GoTerminal}
          number="15+"
          text="Technologies Mastered"
        />
        
        <HighlightCard 
          icon={GoTrophy}
          number="Top 10"
          text="Global Hackathon"
        />
        
        <HighlightCard 
          icon={FaRegUser}
          number="15"
          text="Years Young Builder"
        />
      </div>

      {/* Additional Stats Row */}
      <div className="additional-stats grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <HighlightCard 
          icon={CiMedal}
          number="13+"
          text="Competition Wins"
        />
        
        <HighlightCard 
          icon={GoCalendar}
          number="2023"
          text="Coding Journey Started"
        />
        
        <HighlightCard 
          icon={GoMortarBoard}
          number="1st"
          text="Academic Rank"
        />
        
        <HighlightCard 
          icon={GoCodeSquare}
          number="Developer"
          text="Stack Developer"
        />
      </div>
    </div>
  );
}

export default Highlights;