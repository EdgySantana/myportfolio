
// next image
import Image from 'next/image';

const Board = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image 
        src={'../../coffeedashboard.png'}
        width={650} 
        height={478} 
        alt='' 
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Board;