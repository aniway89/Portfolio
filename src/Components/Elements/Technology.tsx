
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaPython, FaReact } from "react-icons/fa";
import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiMui, SiNextdotjs, SiShadcnui } from "react-icons/si";

function Technology() {
  return (
    <div className="Technology ">
     
            <div className="Tcard flex gap-2 text-2xl items-center">
                <FaReact/>
                <div className="Technology-name text-lg ">
                    React
                </div>
            </div>

            <div className="Tcard flex gap-2 text-2xl items-center">
                <BiLogoTypescript />
                <div className="Technology-name text-lg ">
                    TypeScript
                </div>
            </div>
            <div className="Tcard flex gap-2 text-2xl items-center">
                <FaJsSquare />
                <div className="Technology-name text-lg ">
                    JavaScript
                </div>
            </div>
            <div className="Tcard flex gap-2 text-2xl items-center">
                <FaHtml5 />
                <div className="Technology-name text-lg ">
                    HTML
                </div>

            </div>

            <div className="Tcard flex gap-2 text-2xl items-center">
                                <FaCss3Alt />
                <div className="Technology-name text-lg ">
                    CSS
                </div>
            </div>
            <div className="Tcard flex gap-2 text-2xl items-center">
                <SiNextdotjs />
                <div className="Technology-name text-lg ">
                    Next.js
                </div>
            </div>
            <div className="Tcard flex gap-2 text-2xl items-center">
                <RiTailwindCssFill />
                <div className="Technology-name text-lg ">
                    Tailwind CSS
                </div>
            </div>
            <div className="Tcard flex gap-2 text-2xl items-center">
                <SiShadcnui />
                <div className="Technology-name text-lg ">
                    Shadcn/Ui
                </div>
            </div>
            <div className="Tcard flex gap-2 text-2xl items-center">
                <SiFramer />
                <div className="Technology-name text-lg ">
                   Framer
                </div>
            </div>
            <div className="Tcard flex gap-2 text-2xl items-center">
                <SiMui />
                <div className="Technology-name text-lg ">
                    Mui
                </div>
            </div>

            <div className="Tcard flex gap-2 text-2xl items-center">
                <IoLogoFirebase />
                <div className="Technology-name text-lg ">
                    FireBase
                </div>
            </div>
            <div className="Tcard flex gap-2 text-2xl items-center">
                <RiSupabaseFill />
                <div className="Technology-name text-lg ">
                    Supabase
                </div>
            </div>


            <div className="Tcard flex gap-2 text-2xl items-center">
               <FaPython />
                <div className="Technology-name text-lg ">
                   Python
                </div>
            </div>
            <div className="Tcard flex gap-2 text-2xl items-center">
               <FaGitAlt />
                <div className="Technology-name text-lg ">
                   Git
                </div>
            </div>
            <div className="Tcard flex gap-2 text-2xl items-center">
               <FaGithub />
                <div className="Technology-name text-lg ">
                   Github
                </div>
            </div>
            
            <div className="Tcard flex gap-2 text-2xl items-center">
                <IoLogoFigma />
                <div className="Technology-name text-lg ">
                   Figma
                </div>
            </div>

    </div>
  )
}

export default Technology
