import React from 'react';
import classes from './Footer.module.scss';
import { BsTriangle } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { getFooter } from '../../HomePageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getIconByName } from '../../constants/miscMappings';
import { Link } from 'react-scroll';
import { sectionIds } from '../../constants/miscMappings';
import { pushDataToBackend } from '../../slice/socketSlice';
import { updateActions } from '../../slice/dataSlice';

const Footer = () => {
  const { networks, copyrightDetails } = useSelector(getFooter);
  const dispatch = useDispatch();
  return (
    <footer className={classes.Footer}>
      <IconContext.Provider
        //value={{ color: "blue", className: "global-class-name" }}
        value={{ className: classes.IconStyling }}>
        <div className={classes.GotoTop}>
          <Link
            to={sectionIds.topHeader_sectionId}
            smooth
            duration={1000}
            onClick={() => {
              dispatch(updateActions('footerActions__knowMoretoTop__'));
              dispatch(pushDataToBackend());
            }}>
            <BsTriangle />
          </Link>
        </div>
      </IconContext.Provider>
      <p className={classes.SocialHandles}>
        {networks.map((element) => (
          <a
            href={element.url}
            key={element.id}
            target={'_blank'}
            rel='noreferrer'
            onClick={() => {
              dispatch(
                updateActions(
                  'footerActions__footer_social__' + element.identifierName
                )
              );
              dispatch(pushDataToBackend());
            }}>
            {getIconByName(element.name, {
              className: classes.networkIcon,
            })}
          </a>
        ))}
      </p>
      <hr className={classes.RulerLine} />
      <p className={classes.CopyRightContent}>
        &copy; {copyrightDetails.name + ' ' + new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

/*
<footer className="footer navbar-static-bottom">
			<span className="back-to-top">
				<Link to={sectionIds.topHeader_sectionId} smooth duration={1000}>
					<i className="fa fa-angle-up fa-2x" aria-hidden="true" />
				</Link>
			</span>

			<p className="footer__text">
				© {new Date().getFullYear() + " Shivam Sahil"}
			</p>
		</footer>
*/
