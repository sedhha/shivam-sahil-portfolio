import { nanoid } from 'nanoid';
import SlidingContainer from '../../Main/mappingFunctions/uiComponents/container';
import { getMainHeading } from './utility';
const getUserTestimonials = (
  testimonialContent,
  classes,
  onTestimonialActionHandler
) => {
  const testimonials = testimonialContent.map((element) => {
    const socialMediaIcons = getSocialHandles(
      element.socialHandles,
      classes,
      onTestimonialActionHandler,
      element.name
    );
    const pbreaks = element.content.split('\n').map((pElement) => (
      <p key={nanoid()} className={classes['story__paras']}>
        {pElement}
      </p>
    ));
    return (
      <div className={classes.TestimonialRow}>
        <div className={classes.story}>
          <p className={classes.story_displayElement}>{element.name}</p>
          <img
            className={classes.story_image}
            src={
              element.isWebImage
                ? `${element.displayUri}?raw=true`
                : `${process.env.PUBLIC_URL}/${element.displayUri}`
            }
            alt={'reference'}
          />
        </div>
        <p
          className={classes.ElementTitleParaHeading}
          style={element.headingStyle || {}}>
          {element.positionAtTimeOfReferal}
        </p>
        <p className={classes.ElementHeading}>{element.heading}</p>
        {pbreaks}
        {socialMediaIcons}
      </div>
    );
  });

  return testimonials;
};

const getSocialHandles = (
  socialDetails,
  classes,
  onSocialClickHandler,
  socialPersonName
) => {
  socialDetails = socialDetails || [];
  const socials = socialDetails.map((element) => (
    <a
      key={element.id}
      href={element.href}
      target='_blank'
      rel='noreferrer'
      onClick={() => onSocialClickHandler(socialPersonName)}>
      <div className={classes['social_icon']}>{element.icon}</div>
    </a>
  ));
  return <div className={classes['rowElement']}>{socials}</div>;
};

export const MapTestimonials = ({
  testimonialComponent,
  classes,
  onTestimonialActionHandler,
}) => {
  if (!testimonialComponent.showSection) return null;
  else {
    const sectionHeading = getMainHeading(
      testimonialComponent.heading,
      testimonialComponent.headingStyle,
      classes
    );
    const sectionContents = getUserTestimonials(
      testimonialComponent.userTestimonials,
      classes,
      onTestimonialActionHandler
    );
    return (
      <section
        key={testimonialComponent.id}
        id={testimonialComponent.id}
        className={classes['section-stories']}>
        {sectionHeading}
        <SlidingContainer
          backgroundSpecs={testimonialComponent.backgroundSpecs}
          renderArrayOfComponents={sectionContents}
          uniqueId={testimonialComponent.id}
          onTestimonialActionHandler={onTestimonialActionHandler}
        />
      </section>
    );
  }
};
