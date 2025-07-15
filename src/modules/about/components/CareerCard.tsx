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
  function calculateMonthDifference(start: string, end?: string | null): string {
    const [startYear, startMonth] = start.split('-').map(Number);

    let endYear: number, endMonth: number;
    let isCurrent = false;

    if (end) {
        [endYear, endMonth] = end.split('-').map(Number);
    } else {
        const now = new Date();
        endYear = now.getFullYear();
        endMonth = now.getMonth() + 1; // 0-based to 1-based
        isCurrent = true;
    }

    const monthsDifference = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

    if (monthsDifference <= 0 || isNaN(monthsDifference)) return '';

    let duration: string;
    if (monthsDifference >= 12) {
        const years = Math.floor(monthsDifference / 12);
        const remainingMonths = monthsDifference % 12;
        duration = `${years} year${years > 1 ? 's' : ''}${
            remainingMonths ? ` and ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}` : ''
        }`;
    } else {
        duration = `${monthsDifference} month${monthsDifference !== 1 ? 's' : ''}`;
    }

    return isCurrent ? `${duration} (Present)` : duration;
}

  function formatMonthYear(inputDate: string | null | undefined): string {
    if (!inputDate) return '';
    const [year, month] = inputDate.split('-');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const monthIndex = parseInt(month, 10) - 1;
    if (isNaN(monthIndex) || isNaN(parseInt(year))) return '';
    return `${monthNames[monthIndex]} ${year}`;
  }

  const durationString =
    start_date ? calculateMonthDifference(start_date, end_date) : '';

  const startFormatted = formatMonthYear(start_date);
  const endFormatted = end_date ? formatMonthYear(end_date) : 'Present';

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
              <span>{startFormatted}</span> - <span>{endFormatted}</span>
            </div>
            {durationString && (
              <span className='text-neutral-500 dark:text-neutral-500'>
                ~ {durationString}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CareerCard;
