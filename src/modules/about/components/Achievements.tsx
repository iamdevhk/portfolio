import { ACHIEVEMENTS } from '@/common/constant/achievements';

const Achievements = () => {
  return (
    <section
      className='space-y-4 leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'
      dangerouslySetInnerHTML={{ __html: ACHIEVEMENTS }}
    />
  );
};

export default Achievements;