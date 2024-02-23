import { TbSchool as EducationIcon } from 'react-icons/tb';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { ACHIEVEMENTS  } from '@/common/constant/achievements';

import Achievements from './Achievements';

const AchievementsList = () => {
  return (
    <section className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading
          title='Achievements'
          icon={<EducationIcon size={22} className='mr-1' />}
        />
        <SectionSubHeading>
          <p className='dark:text-neutral-400'>Achievements</p>
        </SectionSubHeading>
      </div>

      <div className='grid md:grid-cols-1 gap-4'>
        
          <Achievements  />
       
      </div>
    </section>
  );
};

export default AchievementsList;
