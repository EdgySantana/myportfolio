// links
import Link from 'next/link';

//icons
import {RiGithubFill, RiLinkedinFill
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/EdgySantana'} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      <Link href={'https://www.linkedin.com/in/edmundosantana'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinFill />
      </Link>
    </div>
  );
};

export default Socials;
