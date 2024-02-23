import { BsFillBootstrapFill } from 'react-icons/bs';
import { FaJava } from 'react-icons/fa';
import {
  SiGooglecloud,
  SiFirebase,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiGo,
  SiReact,
  SiRedux,
  SiAndroidstudio,
  SiStyledcomponents,
  SiFlutter,
  SiTypescript,
  SiWebpack,
  SiHtml5,
  SiMysql,
  SiMongodb,
  SiAzuredevops,
  SiDocker,
  SiLinux,
  SiPython,
  SiAmazonaws,
  SiKubernetes,
  SiSpringboot,
  SiCsharp,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  AWS: <SiAmazonaws size={iconSize}  />,
  'C#': <SiCsharp size={iconSize} className='text-purple-700' />,
  SpringBoot: <SiSpringboot size={iconSize} className='text-green-500' />,
  Kubernetes: <SiKubernetes size={iconSize} className='text-blue-600' />,
  GCP: <SiGooglecloud size={iconSize}  />,
  HTML5: <SiHtml5 size={iconSize} className='text-orange-500' />,
  Java: <FaJava size={iconSize} className='text-red-600' />,
  MySQL: <SiMysql size={iconSize} className='text-blue-500' />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,
  GO: <SiGo size={iconSize}  />,
  AndroidStudio: <SiAndroidstudio size={iconSize}  />,
  Flutter: <SiFlutter size={iconSize}  />,
  Azure: <SiAzuredevops size={iconSize} className='text-blue-600' />,
  Docker: <SiDocker size={iconSize} className='text-blue-400' />,
  Linux: <SiLinux size={iconSize} className='text-white-400' />,
  Python: <SiPython size={iconSize} className='text-yellow-400' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-300' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-600' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-indigo-500' />
  ),
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-400' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-400' />,
  Redux: <SiRedux size={iconSize} className='text-purple-600' />,
  Webpack: <SiWebpack size={iconSize} className='text-blue-400' />,
  'Styled Components': (
    <SiStyledcomponents size={iconSize} className='text-pink-500' />
  ),

};
