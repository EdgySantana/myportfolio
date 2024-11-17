// pages/project/[id].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { workSlider } from '../../components/WorkSlider';
import styles from './id.module.css';  // This imports the CSS module correctly
import { useEffect } from 'react';

const Projects = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Add a specific class to the body
    document.body.classList.add('project-page');
    return () => {
      // Clean up by removing the class when leaving the page
      document.body.classList.remove('project-page');
    };
  }, []);

  // Find the project data based on the `id`
  const project = workSlider.slides
    .flatMap(slide => slide.images)
    .find(image => image.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className={styles.pageWrapper} flex flex-col min-h-screen> {/* Applying the CSS module here */}
        <div
            className='flex-grow container w-full max-w-screen-xl p-10 mt-40 min-h-screen px-10 overflow-y-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
            {/* Top Section with Two Columns */}
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {/* Project Details Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity:0, y: 50 }}
                    transition={{duration: 1.8}}
                className='flex flex-col gap-2 border w-full px-8 transition-all items-center justify-center overflow-hidden hover:border-accent rounded-xl'>
                {/* Logo */}
                <div className='mt-0'>
                    <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={30}
                    height={30}
                    />
                </div>
                <div>
                    <h1 className='text-white text-2xl font-bold mb-4'>
                    {project.title}
                    </h1>
                </div>

                {/* Description */}
                <p className='mb-2 text-lg text-white'>
                    <strong>Description:</strong> {project.description}
                </p>

                {/* Subdescription */}
                <p className='text-white'>
                    <em>{project.subdescription}</em>
                </p>
                </motion.div>

                {/* Video Section */}
                <motion.div
                    initial={{ opacity: 0, y:- 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity:0, y: -50 }}
                    transition={{duration: 2}}className='flex items-center justify-center border p-0 rounded-xl'>
                        <video
                            src={project.video}
                            controls
                            controlsList="nodownload" 
                            autoPlay
                            className='w-full h-auto object-cover rounded-xl'
                        />
                </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 3 }}
                className="relative flex flex-col align-center justify-center mt-8 w-full border border-gray-700 p-10 bg-purple-700 rounded-xl"
                >
                <div className="max-w-screen-xl mx-auto px-4 lg:px-10"> {/* Aligns content with above section */}
                    <h2 className="text-xl text-white font-bold mb-4">Details:</h2>
                    {/* Additional Information */}
                    <p className="text-white">
                    <em>{project.info}</em>
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default Projects;

// // pages/project/[id].js
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { workSlider } from '../../components/WorkSlider';
// import styles from './id.module.css';  // Importing the CSS module correctly

// const Projects = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Find the project data based on the `id`
//   const project = workSlider.slides
//     .flatMap(slide => slide.images)
//     .find(image => image.id === id);

//   if (!project) {
//     return <p>Project not found</p>;
//   }

//   return (
//     <div className={styles.pageWrapper}> {/* Applying the CSS module here */}
//         <div
//             className='container w-full max-w-screen-xl p-10 mt-40 min-h-screen px-10 overflow-y-auto'
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//         >
//             {/* Top Section with Two Columns */}
//             <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6'>
//                 {/* Project Details Section */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity:0, y: 50 }}
//                     transition={{duration: 1.8}}
//                     className='flex flex-col gap-2 border w-full px-8 transition-all items-center justify-center overflow-hidden hover:border-accent rounded-lg'
//                 >
//                     {/* Logo */}
//                     <div className='mt-0'>
//                         <Image
//                             src={project.logo}
//                             alt={`${project.title} logo`}
//                             width={30}
//                             height={30}
//                         />
//                     </div>
//                     <h1 className='text-white text-2xl font-bold mb-4'>{project.title}</h1>
//                     <p className='mb-2 text-lg text-white'>
//                         <strong>Description:</strong> {project.description}
//                     </p>
//                     <p className='text-white'>
//                         <em>{project.subdescription}</em>
//                     </p>
//                 </motion.div>

//                 {/* Video Section */}
//                 <motion.div
//                     initial={{ opacity: 0, y:- 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity:0, y: -50 }}
//                     transition={{duration: 2}}
//                     className='flex items-center justify-center border p-0 rounded-lg'
//                 >
//                     <video
//                         src={project.video}
//                         controls
//                         controlsList="nodownload" 
//                         autoPlay
//                         className='w-full h-auto object-cover rounded-xl'
//                     />
//                 </motion.div>
//             </div>

//             {/* Bottom Section */}
//             <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity:0, x: -50 }}
//                 transition={{duration: 3}}
//                 className='flex xl:flex-row flex-col items-center justify-center bottom-8 w-full px-10 max-w-screen-xl border border-gray-700 p-10 rounded-lg bg-purple-700 overflow-y-auto'
//             >
//                 {/* Add content here for the bottom container */}
//                 <h2 className='text-xl text-white font-bold mb-4'>
//                     Details: 
//                 </h2>
//                 {/* Additional Information */}
//                 <p className='text-white'>
//                     <em>{project.info}</em>
//                 </p>
//             </motion.div>
//         </div>
//     </div>
//   );
// };

// export default Projects;
