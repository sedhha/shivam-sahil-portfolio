import React from 'react';
import classes from './Participations.module.scss';
import { getMainHeading } from '../../utility';

export function MappingParticipants(props) {
  const { sectionsParticipations, onParticipationActionHandler } = props;
  const participatioHeading = getMainHeading(
    sectionsParticipations.heading,
    sectionsParticipations.headingStyle,
    classes
  );
  return sectionsParticipations.showSection ? (
    <section
      className={classes.SectionDefinition}
      id={sectionsParticipations.id}>
      {participatioHeading}
      <div
        className={[
          classes.participationGrid,
          classes.SectionDefinition_withBg,
          classes.StyledScrollBarClass,
        ].join(' ')}
        style={{
          backgroundImage:
            'linear-gradient(to right bottom, rgba(130, 231, 242, 0.8), rgba(100, 166, 255, 0.8)), url(/web/images/composition/cover-1.jpg)',
        }}>
        {sectionsParticipations.elements.map((ele) => {
          return (
            <div
              key={ele.id}
              className={classes.participationGrid_item}
              onClick={() => onParticipationActionHandler(ele.eventName)}>
              {ele.labelTagNeeded && (
                <div
                  // style={ele.style || {}}
                  className={[
                    classes.HonorLabel,
                    ele.labelTagNeeded ? classes[ele.badgeClass] : null,
                  ].join(' ')}>
                  {ele.labelTag}
                </div>
              )}
              <div className={classes.ImageItem}>
                <img
                  className={classes.ImageItem_img}
                  src={process.env.PUBLIC_URL + ele.imgSource}
                  alt={ele.imgAlt}
                />
              </div>
              <label className={classes.ImageItem_Label}>{ele.eventName}</label>
            </div>
          );
        })}
      </div>
    </section>
  ) : null;
}
