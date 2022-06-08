import { useSpring, animated, flip, config } from 'react-spring'
import { FormattedMessage } from 'react-intl'
import josue from '../Icons/Layer 0.png'

import Figures from "./Figures"

function FirstSection() {
    const propsMain = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      reverse: flip,
      delay: 200,
      config: config.molasses,
    })

    const propsSecondary = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      reverse: flip,
      delay: 1100,
      config: config.molasses,
    })
    
    return(
      <>
        <section className='firstSection' id='inicio'>      
            <div className='firstSectionContainer'>


                
                <animated.div className='firstSectionInfo'style={propsMain}>
                        <h1><FormattedMessage id="first.greet" defaultMessage="Hi, I'm"/><span style={{color:'#201992', marginLeft:'12px'}}>Jos</span>!</h1>  
                        <h2><FormattedMessage id="first.description" values={{br: <br />}}/></h2>
                        <animated.div className='firstSectionButtons' style={propsSecondary}>
                            <img src={josue} alt='josue'/>
                            <a id='firstSectionContact'  className='firstSectionInfoButton' href='#'><FormattedMessage id="nav.contact" defaultMessage="Contact"/> <svg style={{marginLeft: '7px'}}width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 4.75H22.5V19.75H1.5V4.75Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.1609 5.29999L14.0169 11.564C13.4386 12.0088 12.7295 12.25 11.9999 12.25C11.2703 12.25 10.5611 12.0088 9.98286 11.564L1.83887 5.29999" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                            </a>
                            <a id='firstSectionDownload' className='firstSectionInfoButton' href='https://drive.google.com/file/d/1Imyt_ji2lLqpd4z2uuIW6VRfGMOLRyE1/view' target='_blank'><FormattedMessage id="first.download" defaultMessage="Download CV"/> <svg style={{marginLeft: '7px'}}width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_136_48)">
<path d="M5.25098 9.25L12 16L18.75 9.25H15V2.5C15 2.30109 14.921 2.11032 14.7803 1.96967C14.6397 1.82902 14.4489 1.75 14.25 1.75H9.74998C9.5511 1.75 9.3603 1.82902 9.21966 1.96967C9.07902 2.11032 8.99998 2.30109 8.99998 2.5V9.25H5.25098Z" stroke="#333333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.251 17.5V20.5C23.251 20.8978 23.093 21.2794 22.8116 21.5606C22.5303 21.842 22.1488 22 21.751 22H2.25098C1.85315 22 1.47162 21.842 1.19032 21.5606C0.909013 21.2794 0.750977 20.8978 0.750977 20.5V17.5" stroke="#333333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_136_48">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
                            </a>
                        </animated.div>
                </animated.div>

                <animated.div className='firstSectionFigures' style={propsMain}>
                    <Figures></Figures>
                    <animated.div className='firstSectionSocials' style={propsSecondary}>
                    <a href='https://www.linkedin.com/in/josuebravodi/' className='firstSectionSocialsButton' target="_blank" rel="noreferrer">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.75 33.75H2.25V14.25H9.75V33.75ZM23.25 20.25C22.4543 20.25 21.6913 20.5661 21.1287 21.1287C20.5661 21.6913 20.25 22.4544 20.25 23.25V33.75H12.75V14.25H20.25V16.4775C21.9245 15.0584 24.0403 14.2656 26.235 14.235C30.678 14.235 33.75 17.535 33.75 23.7675V33.75H26.25V23.25C26.25 22.4544 25.9339 21.6913 25.3713 21.1287C24.8087 20.5661 24.0457 20.25 23.25 20.25ZM9.75 7.50003C9.75 8.24169 9.53004 8.96673 9.11802 9.58341C8.70594 10.2001 8.12028 10.6808 7.43508 10.9646C6.74982 11.2484 5.99584 11.3227 5.26841 11.178C4.54099 11.0333 3.8728 10.6761 3.34835 10.1517C2.82391 9.62721 2.46675 8.95905 2.32205 8.23161C2.17736 7.50417 2.25163 6.75021 2.53546 6.06495C2.81928 5.37974 3.29993 4.79407 3.91661 4.38202C4.5333 3.96997 5.25832 3.75003 6 3.75003C6.99456 3.75003 7.94838 4.14512 8.65164 4.84838C9.3549 5.55164 9.75 6.50547 9.75 7.50003Z" stroke="#201992" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </a>

                    <a href='https://www.behance.net/josuebravodi' className='firstSectionSocialsButton' target="_blank" rel="noreferrer">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_60)">
      <path d="M18.7501 23.9565C18.8222 22.8297 18.5321 21.7094 17.9222 20.7593C17.3123 19.809 16.4146 19.0787 15.3601 18.675C16.231 18.2846 16.9584 17.632 17.4408 16.8084C17.9232 15.9848 18.1366 15.0312 18.0511 14.0805C18.0511 9.37203 14.1781 8.29353 11.3566 8.25003H0.750122V30.75H10.6381C17.8651 30.75 18.7501 26.016 18.7501 23.9565ZM5.25012 12.15H11.2501C11.8469 12.15 12.4192 12.3871 12.8411 12.809C13.2631 13.231 13.5001 13.8033 13.5001 14.4C13.5001 14.9968 13.2631 15.5691 12.8411 15.9911C12.4192 16.413 11.8469 16.65 11.2501 16.65H5.25012V12.15ZM5.25012 20.25H11.2501C12.0451 20.2524 12.8067 20.5692 13.3688 21.1313C13.9309 21.6935 14.2477 22.4551 14.2501 23.25C14.2477 24.045 13.9309 24.8066 13.3688 25.3688C12.8067 25.9308 12.0451 26.2476 11.2501 26.25H5.25012V20.25Z" stroke="#201992" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M23.2501 6.75H32.2501V9.75H23.2501V6.75Z" stroke="#201992" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M30.9632 26.2503C30.7669 26.2504 30.5784 26.3273 30.4382 26.4648C29.6165 27.0383 28.6319 27.3317 27.6302 27.3018C27.0939 27.3364 26.5565 27.2546 26.0548 27.0619C25.5531 26.8691 25.099 26.5702 24.7238 26.1854C24.3486 25.8006 24.0611 25.3392 23.881 24.8328C23.701 24.3265 23.6327 23.7871 23.6807 23.2518H34.5002C34.6991 23.2518 34.8899 23.1728 35.0306 23.0321C35.1712 22.8915 35.2502 22.7008 35.2502 22.5018C35.2217 13.8378 29.0897 13.5018 27.7502 13.5018C23.8622 13.5003 19.5002 15.4113 19.5002 22.2363C19.5002 29.4108 24.6887 30.7503 27.7502 30.7503C29.0928 30.8496 30.4379 30.5939 31.6504 30.0088C32.8628 29.4238 33.9 28.5301 34.6577 27.4173C34.7332 27.3044 34.7767 27.1732 34.7834 27.0376C34.7902 26.902 34.76 26.7671 34.6961 26.6473C34.6322 26.5276 34.537 26.4274 34.4206 26.3574C34.3042 26.2875 34.171 26.2505 34.0352 26.2503H30.9632ZM24.0002 20.2503C24.003 19.2566 24.399 18.3044 25.1017 17.6017C25.8043 16.8991 26.7565 16.5031 27.7502 16.5003C28.744 16.5031 29.6962 16.8991 30.3988 17.6017C31.1015 18.3044 31.4975 19.2566 31.5002 20.2503H24.0002Z" stroke="#201992" strokeWidth="1.6" strokeLinecap="round"/>
      </g>
      <defs>
      <clipPath id="clip0_1_60">
      <rect width="36" height="36" fill="white"/>
      </clipPath>
      </defs>
                    </svg>
                    </a>

                    <a href='#' className='firstSectionSocialsButton'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.125 18C1.125 22.4755 2.9029 26.7678 6.06757 29.9324C9.23225 33.0971 13.5245 34.875 18 34.875C22.4755 34.875 26.7678 33.0971 29.9324 29.9324C33.0971 26.7678 34.875 22.4755 34.875 18C34.875 13.5245 33.0971 9.23225 29.9324 6.06757C26.7678 2.9029 22.4755 1.125 18 1.125C13.5245 1.125 9.23225 2.9029 6.06757 6.06757C2.9029 9.23225 1.125 13.5245 1.125 18V18Z" stroke="#201992" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.95996 3.16498C14.2897 6.4471 17.7999 10.688 20.2151 15.5548C22.6302 20.4216 23.8847 25.7819 23.88 31.215C23.88 32.115 23.845 33 23.775 33.87" stroke="#201992" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30.6 6.78003C24.0448 13.0424 15.3208 16.5256 6.25503 16.5C4.56865 16.4989 2.88445 16.3786 1.21503 16.14" stroke="#201992" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.875 28.605C11.4286 22.2899 20.1789 18.7671 29.28 18.78C31.137 18.7899 32.9912 18.9252 34.83 19.185" stroke="#201992" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </a>
                    </animated.div>
                </animated.div>


            </div>
        </section>
      </>


    )
}

export default FirstSection;