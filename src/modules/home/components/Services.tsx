import Router from 'next/router';
import { BiRocket as RocketIcon } from 'react-icons/bi';

import Button from '@/common/components/elements/Button';
import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

const Services = () => {
  return (
    <section className='space-y-5'>
      
      <Card className='p-8 bg-neutral-100 border dark:border-none rounded-xl space-y-4'>
        <div className='flex gap-2 items-center'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'>Lets work together!</h3>
        </div>
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
        Currently on the lookout for a Software Engineer / Full Stack Developer roles starting March 2025. Eager to leverage my skills in contributing to innovative projects. Please feel free to reach out to me, and let's discuss how my expertise aligns with your organization's goals..
        </p>
        <Button
          data-umami-event='Click Contact Button'
          onClick={() => Router.push('/contact')}
        >
          Contact me
        </Button>
      </Card>
    </section>
  );
};

export default Services;
