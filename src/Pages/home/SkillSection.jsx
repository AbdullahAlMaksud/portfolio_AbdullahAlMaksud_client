import { SiAdobeillustrator, SiExpress, SiFirebase, SiMaterialdesignicons, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import SkillBar from "./SkillBar";
import { DiCss3, DiJavascript, DiNodejs, DiReact } from "react-icons/di";
import { BsWordpress } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import Subtitle from "../../components/Subtitle";

const technicalSkills = [
    {
        skill: 'MongoDB',
        level: 70,
        icon: SiMongodb
    },
    {
        skill: 'Express.js',
        level: 67,
        icon: SiExpress
    },
    {
        skill: 'Tailwind CSS',
        level: 85,
        icon: SiTailwindcss
    },
    {
        skill: 'Firebase',
        level: 69,
        icon: SiFirebase
    },
    {
        skill: 'Next.js',
        level: 64,
        icon: SiNextdotjs
    },
    {
        skill: 'JavaScript',
        level: 90,
        icon: DiJavascript
    },
    {
        skill: 'React',
        level: 80,
        icon: DiReact
    },
    {
        skill: 'CSS',
        level: 85,
        icon: DiCss3
    },
    {
        skill: 'Node.js',
        level: 75,
        icon: DiNodejs
    },
    {
        skill: 'Material-UI',
        level: 78,
        icon: SiMaterialdesignicons
    }
];

const otherSklill = [
    {
        skill: 'Wordpress',
        level: 70,
        icon: BsWordpress
    },
    {
        skill: 'Adobe Illustrator',
        level: 90,
        icon: SiAdobeillustrator
    },
    {
        skill: 'Figma',
        level: 85,
        icon: FiFigma
    },
];
const SkillSection = () => {
    const shortedTechnicalSkill = [...technicalSkills].sort((a, b) => a.skill.localeCompare(b.skill));
    const sortedOtherSkills = [...otherSklill].sort((a, b) => a.skill.localeCompare(b.skill));
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">

            <div className="mt-5 border-t shadow border-black rounded-md p-6 pt-0">
                <Subtitle title={'Technical'} />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {shortedTechnicalSkill.map((item, index) => (
                        <SkillBar key={index} skill={item.skill} level={item.level} icon={item.icon} />
                    ))}
                </div>
            </div>
            <div className="mt-5 border-t shadow border-black rounded-md p-6 pt-0">
                <Subtitle title={'Tools'} />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {sortedOtherSkills.map((item, index) => (
                        <SkillBar key={index} skill={item.skill} level={item.level} icon={item.icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillSection;