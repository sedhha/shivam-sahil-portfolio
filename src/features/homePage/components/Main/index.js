import React from 'react';
import classes from './Main.module.scss';
import {
  MappingAbout,
  MapFeaturesSection,
  MapProjects,
  MapTestimonials,
  MapExperienceandCocurricular,
  MappingVideos,
  MappingParticipants,
} from './mappingFunctions/mapping';

import { useSelector, useDispatch } from 'react-redux';
import { getMainContent } from '../../HomePageSlice';
import { updateActions } from '../../slice/dataSlice';
import { pushDataToBackend } from '../../slice/socketSlice';

export default function Main() {
  const dispatch = useDispatch();
  //Complete Main Body
  const {
    sectionAbout,
    sectionExperiences,
    sectionFeatures,
    sectionProjects,
    sectionReferences,
    sectionVideos,
    sectionParticipations,
  } = useSelector(getMainContent);

  const onFollowUpButtonClick = (buttonTerm) => {
    dispatch(updateActions('navButtonActions__about__' + buttonTerm));
    dispatch(pushDataToBackend());
  };

  const onProjectsButtonCallback = (buttonTerm) => {
    dispatch(updateActions('projectActions__projects__' + buttonTerm));
    dispatch(pushDataToBackend());
  };

  const onTestimonialActionHandler = (action) => {
    dispatch(updateActions('testimonialActions__testimonal__' + action));
    dispatch(pushDataToBackend());
  };

  const onWorkExperienceHandler = (action) => {
    dispatch(updateActions('workExperienceActions__work__' + action));
    dispatch(pushDataToBackend());
  };

  const onParticipationActionHandler = (action) => {
    dispatch(updateActions('participationActions__participations__' + action));
    dispatch(pushDataToBackend());
  };

  const onVideoClickHandler = (action) => {
    dispatch(updateActions('VideoViewActions__videoView__' + action));
    dispatch(pushDataToBackend());
  };

  return (
    <main className={classes.mainBody}>
      <MappingAbout
        mainContent={sectionAbout}
        classes={classes}
        onFollowUpButtonClick={onFollowUpButtonClick}
      />
      <MapFeaturesSection sectionFeatures={sectionFeatures} classes={classes} />
      <MapProjects
        sectionProjects={sectionProjects}
        classes={classes}
        onClickCallback={onProjectsButtonCallback}
      />
      <MapTestimonials
        testimonialComponent={sectionReferences}
        classes={classes}
        onTestimonialActionHandler={onTestimonialActionHandler}
      />
      <MapExperienceandCocurricular
        exprerienceContent={sectionExperiences}
        classes={classes}
        onWorkExperienceHandler={onWorkExperienceHandler}
      />

      <MappingParticipants
        sectionsParticipations={sectionParticipations}
        onParticipationActionHandler={onParticipationActionHandler}
      />

      <MappingVideos
        sectionVideos={sectionVideos}
        onVideoClickHandler={onVideoClickHandler}
      />
    </main>
  );
}
