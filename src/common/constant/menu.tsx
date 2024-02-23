import { BiRocket as ContactIcon } from 'react-icons/bi';
import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
} from 'react-icons/bs';
import {
  FiCoffee as ProjectIcon,
  FiPocket as HomeIcon,
  FiUser as ProfileIcon,
} from 'react-icons/fi';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
    type: 'Pages',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
    type: 'Pages',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Email',
    href: 'mailto:harikrishnan8rk@gmail.com',
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Contact: Email',
    className: '!bg-red-700 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/harikrishnan8rk/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
    className: '!bg-blue-700 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/harikrish8/?hl=en',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
    className:
      'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Github',
    href: 'https://github.com/iamdevhk',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: '!bg-black border border dark:border-neutral-700',
    type: 'Link',
  },
];


