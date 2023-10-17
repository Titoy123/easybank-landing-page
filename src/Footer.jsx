import {ButtonInvite} from './Primary'
import logoFooter from '/images/logo-dark.svg'
import facebookIcon from '/images/icon-facebook.svg'
import youtubeIcon from '/images/icon-youtube.svg'
import twitterIcon from '/images/icon-twitter.svg'
import pinterestIcon from '/images/icon-pinterest.svg'
import instagramIcon from '/images/icon-instagram.svg'

export default function Footer() {
    return (
        <div className='bg-dark-blue py-10 lg:grid lg:grid-flow-col lg:justify-around overflow-hidden'>
         <div>
        <LogoFooter/>
        <SocialMediaContainer/>
        </div>
        <div>
            <FooterLinkContainer/>
        </div>
        <div className="flex flex-col gap-7">
            <ButtonInvite/>
            <CopyrightCircle/>
        </div>
        </div>
    )
}

const LogoFooter = () => <img src={logoFooter} alt='Logo dark mode ' className='m-auto mb-8 lg:mb-12'/>

const SocialMediaIcon = ({ iconUrl, altIcon }) => {
  return (
    <img
      src={iconUrl}
      alt={altIcon}
      className='hover-color'
    />
  );
};

const SocialMediaContainer = () => {
    return (
        <div className='flex justify-center items-center gap-3 mb-8'>
            
            <SocialMediaIcon iconUrl={facebookIcon} alt="Facebook icon" />
            <SocialMediaIcon iconUrl={youtubeIcon} alt="Youtube icon"/>
            <SocialMediaIcon iconUrl={twitterIcon} alt="Twitter icon"/>
            <SocialMediaIcon iconUrl={pinterestIcon} alt="Pinterest icon"/>
            <SocialMediaIcon iconUrl={instagramIcon} alt="Instagram icon"/>
        </div>
    )
}

const FooterLink = ({ linkName }) => (
    <li className='mb-4'>
      <a href="#" className='hover:text-lime-green cursor-pointer'>{linkName}</a>
    </li>
  );
  
  const FooterLinkContainer = () => {
    return (
      <ul className='text-white text-[0.875rem] font-light flex flex-col items-center gap-5 mb-11 overflow-hidden '>
      <div className="flex flex-col text-center font-light lg:flex-row lg:text-left lg:gap-x-20 lg:mr-80">
        <div>
          <FooterLink linkName="About Us" />
          <FooterLink linkName="Contact" />
          <FooterLink linkName="Blog" />
        </div>
        <div className='self-center'>
          <FooterLink linkName="Careers" />
          <FooterLink linkName="Support" />
          <FooterLink linkName="Privacy Policy" />
        </div>
      </div>
    </ul>
    )
  }
  
const CopyrightCircle = () => <p className='text-grayish-blue text-xs text-center lg:mr-10 '>&copy; Easybank. All Rights Reserved</p>