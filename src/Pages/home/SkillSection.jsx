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
        icon: SiMongodb,
        color: '#023430'
    },
    {
        skill: 'Express.js',
        level: 67,
        icon: SiExpress,
        color: 'gray'
    },
    {
        skill: 'Tailwind CSS',
        level: 85,
        icon: SiTailwindcss,
        color: '#38bdf8'
    },
    {
        skill: 'Firebase',
        level: 69,
        icon: SiFirebase,
        color: '#ff9100'
    },
    {
        skill: 'Next.js',
        level: 64,
        icon: SiNextdotjs,
        color: '#212121'
    },
    {
        skill: 'JavaScript',
        level: 90,
        icon: DiJavascript,
        color: '#efd81d'
    },
    {
        skill: 'React',
        level: 80,
        icon: DiReact,
        color: '#087ea4'
    },
    {
        skill: 'CSS',
        level: 85,
        icon: DiCss3,
        color: '#2862e9'
    },
    {
        skill: 'Node.js',
        level: 75,
        icon: DiNodejs,
        color: '#3c823b'
    },
    {
        skill: 'Material-UI',
        level: 78,
        icon: SiMaterialdesignicons,
        color: '#207196'
    }
];

const otherSklill = [
    {
        skill: 'Wordpress',
        level: 70,
        icon: BsWordpress,
        color: '#207196'
    },
    {
        skill: 'Adobe Illustrator',
        level: 90,
        icon: SiAdobeillustrator,
        color: '#310000'
    },
    {
        skill: 'Figma',
        level: 85,
        icon: FiFigma,
        color: '#9260f5'
    },
];
const SkillSection = () => {
    const shortedTechnicalSkill = [...technicalSkills].sort((a, b) => a.skill.localeCompare(b.skill));
    const sortedOtherSkills = [...otherSklill].sort((a, b) => a.skill.localeCompare(b.skill));
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">

            <div className="mt-5 border-t shadow border-black rounded-md p-6 pt-0">
                <Subtitle title={'Technical'} />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {shortedTechnicalSkill.map((item, index) => (
                        <SkillBar key={index} skill={item.skill} level={item.level} icon={item.icon} color={item.color} />
                    ))}
                </div>
            </div>
            <div className="mt-5 border-t shadow border-black rounded-md p-6 pt-0">
                <Subtitle title={'Tools'} />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {sortedOtherSkills.map((item, index) => (
                        <SkillBar key={index} skill={item.skill} level={item.level} icon={item.icon} color={item.color} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillSection;