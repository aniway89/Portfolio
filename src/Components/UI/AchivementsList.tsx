import { CiMedal } from "react-icons/ci";


// Define the props interface
interface AchievementProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  date: string;
  iconColor?: string;
}

function AchievementsList({ 
  icon: Icon = CiMedal, 
  title, 
  description, 
  date, 
}: AchievementProps) {
  return (
    <div className="achievementcard flex-col items-start p-4 justify-between mt-3 cursor-pointer ">
        <div className=" flex items-start justify-between ">
          <div className={`icon-lol flex items-center justify-center w-15 h-15 mb-4`}>
            <Icon className="text-3xl" />
          </div>
        <div className="date-lol text-xs text-gray-400 mr-3 text-nowrap ">{date}</div>
        </div>
          <div className="mid flex-col text-left">
            <div className="Title text-l font-semibold text-white mb-1">
                {title}
            </div>
            <div className="description text-xs text-gray-300 text-wrap ">
                {description}
            </div>
          </div>
    </div>
  )
}

export default AchievementsList;