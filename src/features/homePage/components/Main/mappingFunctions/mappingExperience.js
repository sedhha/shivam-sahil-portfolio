import { getMainHeading } from './utility';
const getExperienceContent = (
  experienceElements,
  classes,
  updateWorkExperienceActions
) => {
  //console.log(experienceElements);
  return experienceElements.map((element) => {
    return (
      <a
        className={classes['section-gridbox__anchortag']}
        target={'_blank'}
        rel={'noreferrer'}
        href={element.href || 'https://www.google.com/'}
        key={element.id}
        onClick={() => updateWorkExperienceActions(element.companyName)}>
        <div className={classes['section-gridbox__gridElement']}>
          <img
            className={classes['section-gridbox__gridElement--img']}
            src={
              element.image.isWebImage
                ? `${element.image.src}?raw=true`
                : element.image.src
            }
            alt={element.image.alt || 'img'}
          />
          <div>
            <p className={classes['section-gridbox__gridElement--date-widget']}>
              {element.companyName || 'Company Name'}
            </p>
            <p className={classes['section-gridbox__gridElement--date-widget']}>
              {element.dates}
            </p>
            <p className={classes['section-gridbox__gridElement--designation']}>
              {element.designation}
            </p>
          </div>
        </div>
      </a>
    );
  });
};

export const MapExperienceandCocurricular = ({
  exprerienceContent,
  classes,
  onWorkExperienceHandler,
}) => {
  if (!exprerienceContent.showSection) return null;
  const sectionHeading = getMainHeading(
    exprerienceContent.heading,
    exprerienceContent.headingStyle,
    classes
  );

  const experienceElements = getExperienceContent(
    exprerienceContent.experienceContent.experienceElements,
    classes,
    onWorkExperienceHandler
  );
  return (
    <section
      key={'experience_Section'}
      className={classes['section-experience']}>
      {sectionHeading}

      <div className={classes['section-gridbox']}>{experienceElements}</div>
    </section>
  );
};
