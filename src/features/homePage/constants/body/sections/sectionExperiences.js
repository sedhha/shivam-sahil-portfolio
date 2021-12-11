import { nanoid } from 'nanoid';
import { sectionIds } from '../../miscMappings';

export const sectionExperiences = {
  id: sectionIds.sectionExperiences,
  heading: 'Work Experience and Co-Curicular',
  showSection: true,
  headingStyle: { marginTop: '-12rem' },
  experienceContent: {
    experienceElements: [
      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/optum.jpg',
          additionalStyling: {},
          alt: 'optum',
          isWebImage: true,
        },
        companyName: 'Optum (UHG)',
        dates: 'Oct 2021 - Present',
        designation: 'Software Engineer',
        href: 'https://www.optum.com/',
      },
      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/yoptima.jpg',
          additionalStyling: {},
          alt: 'yoptima',
          isWebImage: true,
        },
        companyName: 'Yoptima',
        dates: 'Jan 2020 - Oct 2021',
        designation: 'Software Engineer',
        href: 'https://www.yoptima.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/eckovation.png',
          additionalStyling: {},
          alt: 'eckovation',
          isWebImage: true,
        },
        companyName: 'Eckovation',
        dates: 'Jul 2019 - Jul 2020',
        designation: 'Programming & Robotics Mentor (Part Time)',
        href: 'https://www.eckovation.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/transtutors.png',
          additionalStyling: {},
          alt: 'transtutors',
          isWebImage: true,
        },
        companyName: 'Transtutors',
        dates: 'March 2020 - Present',
        designation: 'Freelancing Tutor (Part Time)',
        href: 'https://www.transtutors.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/airindia.png',
          additionalStyling: {},
          alt: 'airindia',
          isWebImage: true,
        },
        companyName: 'AirIndia',
        dates: 'May 2019 - June 2019',
        designation: 'Aircraft Maintenance Trainee (Internship)',
        href: 'https://www.airindia.in/about-airindia.htm',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/drdo.jpg',
          additionalStyling: {},
          alt: 'drdo',
          isWebImage: true,
        },
        companyName: 'DRDO',
        dates: 'June 2019 - Aug 2019',
        designation: 'R&D Intern (Internship)',
        href: 'https://www.drdo.gov.in/',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/roverx.png',
          additionalStyling: {},
          alt: 'rover',
          isWebImage: true,
        },
        companyName: 'Rover-X',
        dates: 'September 2016 - July 2019',
        designation: 'Founding Member and Science Team Lead',
        href: 'http://www.teamroverx.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/vibexus.png',
          additionalStyling: {},
          alt: 'vibexus',
          isWebImage: true,
        },
        companyName: 'Vibexus',
        dates: 'June 2020 - Aug 2020',
        designation: 'Wordpress Developer (Part Time)',
        href: 'https://www.instagram.com/vibexus_grid',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/chegg.png',
          additionalStyling: {},
          alt: 'chegg',
          isWebImage: true,
        },
        companyName: 'Chegg',
        dates: 'Oct 2019 - July 2020',
        designation: 'Subject Matter Expert: ME (Part Time)',
        href: 'https://www.chegg.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/crunchytricks.jpg',
          additionalStyling: {},
          alt: 'crunchytricks',
          isWebImage: true,
        },
        companyName: 'Crunchy Tricks',
        dates: 'July 2019 - Aug 2019',
        designation: 'Digital Marketing Intern (Part Time)',
        href: 'http://www.crunchytricks.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/vitradio.jpg',
          additionalStyling: {},
          alt: 'vit_radio',
          isWebImage: true,
        },
        companyName: 'Vit Radio',
        dates: 'June 2018 - June 2019',
        designation: 'Radio Show Host',
        href: 'https://www.instagram.com/vitradio/',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/wrytin.png',
          additionalStyling: {},
          alt: 'wrytin',
          isWebImage: true,
        },
        companyName: 'Wrytin',
        dates: 'May 2019 - June 2019',
        designation: 'Content Writer (Part Time)',
        href: 'https://wrytin.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/experiences/delhispeaking.png',
          additionalStyling: {},
          alt: 'delhispeaking',
          isWebImage: true,
        },
        companyName: 'Delhi Speaking',
        dates: 'May 2019 - September 2019',
        designation: 'Content Marketing Intern (Part Time)',
        href: 'https://delhispeaking.in/',
      },
    ],
  },
};
