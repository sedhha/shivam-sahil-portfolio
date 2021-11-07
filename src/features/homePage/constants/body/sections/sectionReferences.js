import { nanoid } from 'nanoid';
import { sectionIds } from '../../miscMappings';
import { getIcon, iconsMap } from '../../miscMappings';

const socialHandleSize = { size: 30 };

export const sectionReferences = {
  showSection: true,
  id: sectionIds.sectionReferences_sectionId,
  heading: 'What others have to say about me?',
  headingStyle: { marginTop: '1rem', marginBottom: '1rem' },
  backgroundSpecs: {
    imageGrade1: 'rgba(130,231,242,.8)',
    imageGrade2: 'rgba(100,166,255,.8)',
    backgroundUrl: 'web/images/hero.png',
  },
  userTestimonials: [
    {
      displayUri: 'web/images/referrals/bhushan.jpg',
      isWebImage: false,
      name: 'Bhushan Kshire',
      heading: 'Great Decision Maker',
      headingStyle: { marginBottom: '1.5rem' },
      socialHandles: [
        {
          href: 'https://www.linkedin.com/in/bhushan-kshire-069105148/',
          id: 'userTestimonials__socialHandle__bhushan__' + nanoid(),
          icon: getIcon(iconsMap.linkedin, {
            ...socialHandleSize,
            color: 'blue',
          }),
        },
      ],
      content: `Shivam is a great team player and a quick learner. During my tenure with him for a year and a half, I found Shivam learning technologies quickly with little to no support. What amazed me is his professional maturity, strong decision-making skills, and tendency to go the extra mile to achieve goals. His can-do attitude and diverse tech skills always helped us to deliver projects within timelines.
			No doubt he would be a valuable asset for any organization.`,
    },
    {
      displayUri: 'web/images/referrals/mridula.jpg',
      isWebImage: false,
      name: 'Mridula',
      heading: 'Hardworking and extremely skilled',
      headingStyle: { marginBottom: '1.5rem' },
      socialHandles: [
        {
          href: 'https://in.linkedin.com/in/mridula-pathak-942527141',
          id: 'userTestimonials__socialHandle__mridula__' + nanoid(),
          icon: getIcon(iconsMap.linkedin, {
            ...socialHandleSize,
            color: 'blue',
          }),
        },
      ],
      content: `It gives me immense pleasure to recommend Shivam Sahil. He was hired as Mentor for the MATLAB Course at Eckovation in July 2019. He was able to solve all the course-related queries and helped students to complete their course as well as finish internship projects which have numerous real-world problems.
                He is hardworking and sincere towards his work. He was also responsible for the evaluation of assignments and providing proper feedback and guidance to the students during the course curriculum. On a personal level, I found Shivam knowledgeable, focused and inquisitive towards his work.`,
    },
    {
      displayUri: 'web/images/referrals/johnRajan.jpg',
      isWebImage: false,
      name: 'John Rajan',
      heading: 'Multi talented and Active',
      headingStyle: { marginBottom: '1.5rem' },
      socialHandles: [
        {
          href: 'https://www.linkedin.com/in/john-rajan-amaladas-728042136/',
          id: 'userTestimonials__socialHandle__john__' + nanoid(),
          icon: getIcon(iconsMap.linkedin, {
            ...socialHandleSize,
            color: 'blue',
          }),
        },
      ],
      content: `Shivam Sahil is my proctee. He is a multi talented student who participated in many events in India and abroad. He involved himself in a research work: "Application of blockchain technology in waste water management system" under my supervision. His academic performance is excellent.`,
    },
  ],
};
