import React, { Component } from 'react';
import classes from './mapping.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default class SlidingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      previousPosition: 0,
      totalItems: this.props.renderArrayOfComponents.length || 0,
      showClass: 'SwipeEffectShowToLeft',
    };
  }

  onSwapClickHandler = (swapToLeft) => {
    let newPosition;
    let prevPosition = this.state.currentPosition;

    if (swapToLeft) {
      newPosition = this.state.currentPosition - 1;
    } else {
      newPosition = this.state.currentPosition + 1;
    }
    if (newPosition < 0) {
      newPosition = this.state.totalItems - 1;
    }
    if (newPosition >= this.state.totalItems) {
      newPosition = 0;
    }

    this.setState({
      ...this.state,
      currentPosition: newPosition,
      previousPosition: prevPosition,
    });
  };
  render() {
    const { imageGrade1, imageGrade2, backgroundUrl, isWebUrl } =
      this.props.backgroundSpecs;
    const sections = this.props.renderArrayOfComponents;
    const renderElement = sections.map((ele, index) => {
      let renderer = null;
      if (index === this.state.currentPosition) {
        renderer = (
          <div
            key={this.props.uniqueId + index}
            className={[
              classes.FlexBoxContainer,
              classes[this.state.showClass],
            ].join(' ')}>
            {ele}
          </div>
        );
      } else {
        const currPos = this.state.currentPosition;
        const prevPos = this.state.previousPosition;
        let hideClass;
        if (currPos === 0 && prevPos === currPos) {
          if (index === sections.length - 1) {
            hideClass = 'SwipeEffectHideToLeft';
          } else hideClass = 'SwipeEffectHideToRight';
        } else {
          const prevPointer = currPos <= 0 ? sections.length - 1 : currPos - 1;

          if (index === prevPointer) {
            hideClass = 'SwipeEffectHideToLeft';
          } else {
            hideClass = 'SwipeEffectHideToRight';
          }
        }

        renderer = (
          <div
            key={this.props.uniqueId + index}
            className={[classes.FlexBoxContainer, classes[hideClass]].join(
              ' '
            )}>
            {ele}
          </div>
        );
      }

      return renderer;
    });

    const urlImage = isWebUrl
      ? `${backgroundUrl}?raw=true`
      : `${process.env.PUBLIC_URL}/${backgroundUrl}`;
    return (
      <div
        style={{
          backgroundImage: `linear-gradient(
			to right bottom,
			${imageGrade1 || 'rgba(126,213,111,.8)'},
			${imageGrade2 || 'rgba(40,180,133,.8)'}),
			url('${urlImage}')`,
        }}
        className={classes.SlidingContainer}>
        {renderElement}
        <div
          className={classes.LeftNavigate}
          onClick={() => {
            this.onSwapClickHandler(true);
            this.props.onTestimonialActionHandler('goLeftButton_testimonial');
          }}>
          <AiOutlineLeft className={classes.NavigatorIconClass} />
        </div>

        <div
          className={classes.RightNavigate}
          onClick={() => {
            this.onSwapClickHandler(false);
            this.props.onTestimonialActionHandler('goRightButton_testimonial');
          }}>
          <AiOutlineRight className={classes.NavigatorIconClass} />
        </div>
      </div>
    );
  }
}
