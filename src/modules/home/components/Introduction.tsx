const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
          <h1>Hey, I'm Hari</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
            <li>
              Seattle, Washington, USA
            </li>
          </ul>
        </div>
      </div>

      <p className='leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300'>
      Software Engineer at Amazon with 2.5 years of prior industry experience and a Master’s in Computer Science. I’m passionate about full-stack development, cloud computing, and AI. A curious, self-driven individual, I thrive on staying ahead in this ever-evolving tech landscape. Let’s code the future!
      </p>
    </section>
  );
};

export default Introduction;
