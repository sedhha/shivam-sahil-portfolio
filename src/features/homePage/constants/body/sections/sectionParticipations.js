import { nanoid } from 'nanoid';
import { sectionIds } from '../../miscMappings';

export const sectionParticipations = {
  id: sectionIds.sectionParticipations,
  showSection: true,
  heading: 'Events And Participations',
  headingStyle: {},
  background: {
    bgImageUrl:
      'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/hero2.jpg',
    bgWebImage: true,
  },
  elements: [
    {
      id: nanoid(),
      eventName: 'MegaHack 2022',
      labelTag: 'Global NGO Prize',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/app-overview.gif',
      isWebImage: true,
      imgAlt: 'MegaHack 2022, Global NGO Price',
      style: { left: '-35%', top: '2%' },
    },
    {
      id: nanoid(),
      eventName: 'UIPath Innovation RPA Hack 2021',
      labelTag: 'Bright Idea Finalist',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_silver',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/intellipick.jpg',
      isWebImage: true,
      imgAlt: 'UiPath RPA 2021 Bright Idea Finalist',
      style: { left: '-35%', top: '2%' },
    },
    {
      id: nanoid(),
      eventName: 'UW BlockChain Hack',
      labelTag: '2 Time Winner',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/uw_bc.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
      style: { left: '-35%', top: '2%' },
    },
    {
      id: nanoid(),
      eventName: 'Flutterthon 2020',
      labelTag: 'Winner',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/flutterthon.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
    },
    {
      id: nanoid(),
      eventName: 'Autodesk Designation',
      labelTag: 'Winner',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/fusion360.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
    },
    {
      id: nanoid(),
      eventName: 'PennApps XX',
      labelTag: 'Winner',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/projects/thirdeye.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
    },
    {
      id: nanoid(),
      eventName: 'Hack Harvard',
      labelTag: 'Winner',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/projects/agrobuddy.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
    },
    {
      id: nanoid(),
      eventName: 'Summer BioFest VIT',
      labelTag: 'Winner',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/biofest.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
    },
    {
      id: nanoid(),
      eventName: 'Robots For Humanity',
      labelTag: 'Winner',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/r4h.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
    },
    {
      id: nanoid(),
      eventName: 'ASME Mechanical Conference',
      labelTagNeeded: true,
      labelTag: 'Winner',
      labelClassName: 'winner',
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/mech_conf.jpg',
      isWebImage: true,
      imgAlt: 'ASME Mechanical Conference',
    },
    {
      id: nanoid(),
      eventName: 'ASME Reverse Engineering',
      labelTag: 'Winner',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/reverse_engineering.jpg',
      isWebImage: true,
      imgAlt: 'ASME Reverse Engineering',
    },
    {
      id: nanoid(),
      eventName: 'ASME Formula Balloon',
      labelTag: 'First Runner Up',
      badgeClass: 'HonorLabel_gold',
      labelTagNeeded: true,
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/formula_balloon.jpg',
      isWebImage: true,
      imgAlt: 'Formula Balloon',
      style: { left: '-30%', top: '2%', fontSize: '1.3rem' },
    },
    {
      id: nanoid(),
      eventName: 'Junior Mathematics Olympiad',
      labelTag: '28th All India Rank',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_gold',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/jmo.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
      style: { left: '-30%', top: '4%', fontSize: '1.2rem' },
    },

    {
      id: nanoid(),
      eventName: 'Indian Rover Challenge 2019',
      labelTag: '4th Rank (Global)',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_silver',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/irc2019.jpg',
      isWebImage: true,
      imgAlt: 'ASME Reverse Engineering',
      style: { left: '-34%', top: '-2%', fontSize: '1.2rem' },
    },
    {
      id: nanoid(),
      eventName: 'LVPEI EyeCare Hack',
      labelTag: 'Best AT&T Category Award',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_silver',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/lvpei.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
      style: { left: '-35%', top: '9%', fontSize: '1.3rem' },
    },
    {
      id: nanoid(),
      eventName: 'Select Makeathon',
      labelTag: 'Top 10 Qualifier',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_silver',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/selectMakeathon.jpg',
      isWebImage: true,
      imgAlt: 'ASME Reverse Engineering',
      style: { left: '-35%', top: '-2%', fontSize: '1.4rem' },
    },

    {
      id: nanoid(),
      eventName: 'Spark Blockchain University Hackathon',
      labelTag: 'Honorable Mention: LivePeer API',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_brown',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/projects/waterchain.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
      style: { left: '-35%', top: '7%', fontSize: '1rem' },
    },
    {
      id: nanoid(),
      eventName: 'University Rover Challenge 2018',
      labelTag: '19th Global Rank',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_brown',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/rx2018.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
      style: { left: '-35%', top: '-3%', fontSize: '1.2rem' },
    },
    {
      id: nanoid(),
      eventName: 'Indian Rover Challenge 2018',
      labelTag: 'Event Co-ordinator',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_brown',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/irc2018.jpg',
      isWebImage: true,
      imgAlt: 'ASME Reverse Engineering',
      style: { left: '-30%', top: '7%', fontSize: '1.3rem' },
    },
    {
      id: nanoid(),
      eventName: 'Science Olympiad Foundation',
      labelTag: '3 Times Silver/Bronze Medalist',
      labelTagNeeded: true,
      badgeClass: 'HonorLabel_brown',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/sof.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
      style: { left: '-35%', top: '7%', fontSize: '1rem' },
    },

    {
      id: nanoid(),
      eventName: 'Design to Print',
      labelTagNeeded: false,
      labelTag: 'Participant',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/designtoprint.jpg',
      isWebImage: true,
      imgAlt: 'ASME Reverse Engineering',
    },
    {
      id: nanoid(),
      eventName: 'Dover Hackathon',
      labelTagNeeded: false,
      labelTag: 'Participant',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/doverHack.jpg',
      isWebImage: true,
      imgAlt: 'Dover Hackathon',
    },
    {
      id: nanoid(),
      eventName: 'ASME eFest',
      labelTagNeeded: false,
      labelTag: 'Participant',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/efest_asme.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
    },
    {
      id: nanoid(),
      eventName: 'SBU Hacks',
      labelTagNeeded: false,
      labelTag: 'Participant',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/sbuhacks.jpg',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
    },
    {
      id: nanoid(),
      eventName: 'Raccoons Virtual Hackathon',
      labelTagNeeded: false,
      labelTag: 'Participant',
      imgSource:
        'https://github.com/sedhha/gitpractice/blob/master/webpf/web/images/events/raccoons.png',
      isWebImage: true,
      imgAlt: 'ASME eFest Asia Pacific 2017',
    },
  ],
};
