import React from 'react';
import styles from './Footer.module.css';
import facebookIcon from '../components/icons/facebook.svg';
import linkedinIcon from '../components/icons/linkedin.svg';
import instagramIcon from '../components/icons/instagram.svg';
import youtubeIcon from '../components/icons/youtube.svg';
import mastercardIcon from '../components/icons/visa.svg';
import visaIcon from '../components/icons/mastercard.svg';
import vtexIcon from '../components/icons/Vtex_Logo.svg';
import maeztraIcon from '../components/icons/Maeztra_Logo.svg';
import Paragraph from '../components/Paragraph/Paragraph';

const BottomFooter = () => {
  return (
    <div className={styles.divBottomFooter}>
      <div>
        <ul>
          <li>
            <a href="/">
              <img src={facebookIcon} alt="Facebook Icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={instagramIcon} alt="Instagram Icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={youtubeIcon} alt="Youtube Icon" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">
              <img src={visaIcon} alt="Visa Icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={mastercardIcon} alt="Mastercard Icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={visaIcon} alt="Visa Icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={mastercardIcon} alt="Mastercard Icon" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Paragraph size="10px">Powered by</Paragraph>
            <img src={vtexIcon} alt="vtexIcon" />
          </li>
          <li>
            <Paragraph size="10px">Developed by</Paragraph>
            <img src={maeztraIcon} alt="maeztraIcon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomFooter;
