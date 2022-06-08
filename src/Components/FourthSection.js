import Emoji from "./Emoji";
import { FormattedMessage } from "react-intl";
function FourthSection(){
    return(
        <>  
        <section className='fourthSection' id="contacto">           
            <div className='fourthSectionSt'>
                <div className='fourthSectionStTitle'>
                    <h3><FormattedMessage id="fourth.title" defaultMessage="Let's work together!"/></h3> 
                    <Emoji className='emoji'></Emoji>
                </div>
                        
                        <p><FormattedMessage id="fourth.sub" defaultMessage="Let me take your project {br} to the next level." values={{br: <br />}}/></p>
                        <h4>josuebravodi@gmail.com</h4>
            </div>
            <div className='fourthSectionNd'>
                <div className='navBarBottom'>
                    <h1 className='navBarTitle bottomTitle'> JOSUÉ<br/>BRAVO</h1>
                    <ul className='navBarBottomList'>
                        <li className='navBarListItem'><a href='#inicio' className='navBarListButton'><FormattedMessage id="nav.home" defaultMessage="Home"/></a></li>
                        <li className='navBarListItem'><a href='#trabajos' className='navBarListButton'><FormattedMessage id="nav.project" defaultMessage="Projects"/></a></li>
                        <li className='navBarListItem'><a href='#about' className='navBarListButton'><FormattedMessage id="nav.about" defaultMessage="About me"/></a></li>
                    </ul>
                </div>
                <div className='socialsBottom'>
                    <div className='socialsBottomContainer'>
                        <a href='https://wa.me/5215578961610/' target="_blank" rel="noreferrer"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.995 22.3154C26.89 22.132 26.59 22.0098 26.155 21.7958C25.72 21.5818 23.545 20.4968 23.155 20.3439C22.765 20.1911 22.45 20.1147 22.165 20.5732C21.88 21.0317 21.415 21.6888 21.16 21.9792C20.905 22.2696 20.65 22.3154 20.2 22.0862C17.6332 20.9465 15.4673 19.0383 13.99 16.6149C13.735 16.1717 13.99 15.9271 14.185 15.7132C14.92 14.9643 14.935 15.0713 15.115 14.7045C15.1794 14.5851 15.2131 14.451 15.2131 14.3148C15.2131 14.1785 15.1794 14.0445 15.115 13.9251C14.89 13.6652 14.065 11.4951 13.69 10.6086C13.315 9.72222 11.425 9.55411 10.69 10.3794C2.89003 18.7545 21.895 33.1052 26.755 24.3634C26.9548 24.0731 27.0812 23.7372 27.1231 23.3853C27.1649 23.0334 27.121 22.6764 26.995 22.346M17.89 1.05675C13.4316 1.04049 9.14901 2.82735 5.98238 6.02508C2.81575 9.22281 1.02384 13.5701 1.00003 18.1126C0.993375 21.7083 2.11844 25.2115 4.21003 28.1077L2.11003 34.4501L8.59003 32.3564C11.1273 34.0538 14.0666 35.0233 17.0988 35.1628C20.1311 35.3023 23.1442 34.6066 25.8212 33.149C28.4983 31.6914 30.7403 29.5257 32.3116 26.8796C33.8828 24.2336 34.7252 21.2051 34.75 18.1126C34.7262 13.5754 32.9384 9.23275 29.7783 6.0359C26.6181 2.83904 22.3433 1.0486 17.89 1.05675Z" stroke="#201992" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg><span className='num' >+52 1 55 7896 1610</span>
                        </a>
                    </div>
                    <div className='socialsBottomContainer'>
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
                        <a href='#' className='firstSectionSocialsButton' target="_blank" rel="noreferrer">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.125 18C1.125 22.4755 2.9029 26.7678 6.06757 29.9324C9.23225 33.0971 13.5245 34.875 18 34.875C22.4755 34.875 26.7678 33.0971 29.9324 29.9324C33.0971 26.7678 34.875 22.4755 34.875 18C34.875 13.5245 33.0971 9.23225 29.9324 6.06757C26.7678 2.9029 22.4755 1.125 18 1.125C13.5245 1.125 9.23225 2.9029 6.06757 6.06757C2.9029 9.23225 1.125 13.5245 1.125 18V18Z" stroke="#201992" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.95996 3.16498C14.2897 6.4471 17.7999 10.688 20.2151 15.5548C22.6302 20.4216 23.8847 25.7819 23.88 31.215C23.88 32.115 23.845 33 23.775 33.87" stroke="#201992" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30.6 6.78003C24.0448 13.0424 15.3208 16.5256 6.25503 16.5C4.56865 16.4989 2.88445 16.3786 1.21503 16.14" stroke="#201992" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.875 28.605C11.4286 22.2899 20.1789 18.7671 29.28 18.78C31.137 18.7899 32.9912 18.9252 34.83 19.185" stroke="#201992" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        </a>
                    </div>
                </div>
            </div>   
        </section>   
        </>
    )
}
export default FourthSection