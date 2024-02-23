import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { BsBuildings as CompanyIcon } from 'react-icons/bs';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { CareerProps } from '@/common/types/careers';

const CareerCard = ({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  link,
}: CareerProps) => {
  function calculateMonthDifference(date1: string | null, date2: string | null): string {
    if (date1 === null || date2 === null) {
        throw new Error('Both dates must be provided.');
    }

    const [year1, month1] = date1.split('-').map(Number);
    const [year2, month2] = date2.split('-').map(Number);
    const monthsDifference: number = (year2 - year1) * 12 + (month2 - month1);
    if (monthsDifference >= 12) {
        const years: number = Math.floor(monthsDifference / 12);
        const remainingMonths: number = monthsDifference % 12;

        return `${years} year${years > 1 ? 's' : ''} and ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    } else {
        return `${monthsDifference} month${monthsDifference !== 1 ? 's' : ''}`;
    }
}
function formatMonthYear(inputDate: string): string {
  const [year, month] = inputDate.split('-');
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const monthName = monthNames[parseInt(month, 10) - 1];
  return `${monthName} ${year}`;
}
  const differenceString: string = calculateMonthDifference(start_date, end_date);
  
  return (
    <Card className='flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-900'>
      {logo ? (
        <Image src={logo} width={55} height={55} alt={company} />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className='space-y-1'>
        <h6>{position}</h6>
        <div className='text-sm text-neutral-600 dark:text-neutral-400 space-y-2'>
          <div className='flex items-center gap-1 md:gap-2'>
            <a
              href={link || '#'}
              target='_blank'
              data-umami-event={`Click Career Company Name: ${company}`}
            >
              <span className='underline cursor-pointer hover:text-dark hover:dark:text-white'>
                {company}
              </span>
            </a>
            <span className='text-neutral-300 dark:text-neutral-700'>•</span>
            <span>{location}</span>
          </div>
          <div className='flex flex-col md:text-[13px]'>
            <div className='flex gap-1'>
              <span>{formatMonthYear(start_date)}</span> -{' '}
              <span>{end_date ? formatMonthYear(end_date) : 'Present'}</span>
            </div>
            <span className='text-neutral-500 dark:text-neutral-500'>
              ~ {differenceString}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CareerCard;