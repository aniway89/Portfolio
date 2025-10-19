
import { IoIosCode,  } from "react-icons/io"
import { RxLaptop} from "react-icons/rx";
import AchievementsList from "../UI/AchivementsList"
import { CiMedal } from "react-icons/ci"
import { VscSymbolColor } from "react-icons/vsc";
import {RiMovie2AiLine}  from "react-icons/ri"



function Achivements() {
  return (
    <div className="achivements-igot flex-col items-baseline mt-20">
        <div className="Achive text-2xl text-left"> Achivements</div>
        <div className="achivements pl-3 mt-4 flex justify-between gap-">

       <AchievementsList 
        icon={CiMedal}
        title="1st in 10th Grade"
        description={<>Got <strong>1st position</strong> in 10th class among <strong>64</strong> students.</>}
        date="12 March 2025"
      />
      
      {/* Hackathon Achievement */}
      <AchievementsList 
        icon={RxLaptop}
        title="Get top 10 in online hackathon"
        description={<>Got the <strong>9/800 th place</strong> in the online global hackathon</>}
        date="7 October 2025"
      />
      
      {/* Learning Achievement */}
      <AchievementsList 
        icon={IoIosCode}
        title="Learn React Libraries"
        description="Learned few new libraries for react"
        date="20 February 2025"
      />
      
      {/* Digital Art Competition */}
      <AchievementsList 
        icon={VscSymbolColor}
        title="3rd Place in Digital Art Competition"
        description={<>Secured <strong>3rd position</strong> in regional digital art competition</>}
        date="22 February 2025"
      />
      
      {/* Local Hackathon */}
      <AchievementsList 
        icon={RxLaptop}
        title="4th Place in 72-Hour Hackathon"
        description={<>Achieved <strong>4th place</strong> in local 72-hour coding marathon</>}
        date="3 December 2024"
      />
      
      {/* Editing Competition */}
      <AchievementsList 
        icon={RiMovie2AiLine}
        title="1st in Online Editing Challenge"
        description={<>Won <strong>1st place</strong> in national video editing competition</>}
        date="27 June 2025"
      />
        </div>
    </div>
  )
}

export default Achivements
