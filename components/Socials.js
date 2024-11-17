// links
import Link from 'next/link';

//icons
import {RiGithubFill, RiLinkedinFill
} from 'react-icons/ri';

//tableau icon
import {SiTableau
} from 'react-icons/si';

//Kaggle icon
import {FaKaggle
} from 'react-icons/fa';


const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/EdgySantana'} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      <Link href={'https://www.kaggle.com/edmundosantana'} className='hover:text-accent transition-all duration-300'>
        <FaKaggle />
      </Link>
      <Link href={'https://www.linkedin.com/in/edmundosantana'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinFill />
      </Link>
      <Link href={'https://public.tableau.com/app/profile/edgysan/vizzes'} className='hover:text-accent transition-all duration-300'>
        <SiTableau />
      </Link>
      
    </div>
  );
};

export default Socials;
