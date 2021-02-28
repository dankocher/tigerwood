import React from "react";
import "./styles.scss";

const SECTION_NUMBER = "05"

export default class Section extends React.Component {

    render() {
        const {t} = this.props
        return (
            <div className={`section --s${SECTION_NUMBER} ${this.props.animated} slideInRightAfter`}>
                <div className={`---content`}>
                    <div className="-s5-header-1 slideInDown delay1">{t.header_1}</div>
                    <div className="-s5-header-2 slideInDown delay2">{t.header_2}</div>
                    <div className="-s5-header-3 slideInDown delay3">{t.header_3}</div>
                    <div className="-s5-icons">
                        <Icon1 {...this.props}/>
                        <Icon2 {...this.props}/>
                        <Icon3 {...this.props}/>
                    </div>
                    <S5Button t={t} onClick={() => {
                        this.props.showModal({type: 'empty', show: true, data: {...t.modal}})
                    }}/>
                </div>
            </div>
        );
    }
}

const Icon1 = props => {
    const {t} = props;
    const size  = props.isMobile ? 48 : 72;
    return (
        <div className="-s5-icon  slideInDown delay4">
        <svg width={size} height={size} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M21.2905 6.94668L20.5733 7.04512C19.4765 7.18574 18.703 8.19824 18.8437 9.29512L26.8312 70.8889H31.6827L23.5265 8.67637C23.3858 7.57949 22.3874 6.80606 21.2905 6.94668Z" fill="#996459"/>
                <path d="M23.527 8.67637C23.3863 7.57949 22.3738 6.80606 21.277 6.94668L20.5598 7.04512C20.5035 7.05918 20.4332 7.05918 20.377 7.07324C21.0238 7.34043 21.5301 7.93106 21.6285 8.67637L29.7988 70.8889H31.6832L23.527 8.67637Z" fill="#875850"/>
                <path d="M42.3138 38.2924L7.55126 42.8064C5.92001 43.0174 4.42938 41.8642 4.21844 40.233L1.85594 22.008C1.64501 20.3767 2.79813 18.8861 4.42938 18.6752L25.72 15.9049L39.1919 14.1611C40.8231 13.9502 42.3138 15.1033 42.5247 16.7346L44.3106 30.4736L44.8872 34.9596C45.0981 36.5908 43.945 38.0814 42.3138 38.2924Z" fill="#24D26D"/>
                <path d="M44.3108 30.4732L27.1264 28.2373C27.0279 28.2232 26.9436 28.2092 26.8592 28.1951C26.7748 28.0685 26.7748 27.8857 26.8732 27.7592L29.4889 24.4123C30.192 23.5123 30.0232 22.2045 29.1092 21.5154C28.2092 20.8123 26.9014 20.981 26.2123 21.8951L24.7217 23.8076L25.7482 15.9185L39.2201 14.1748C40.8514 13.9639 42.342 15.117 42.5529 16.7482L44.3108 30.4732Z" fill="#24B86D"/>
                <path d="M30.4734 19.5893C29.6015 18.9143 28.3359 19.083 27.6749 19.9549L24.5671 24.019C24.4827 25.7065 24.9468 27.4362 26.5218 28.0408L30.853 22.4018C31.528 21.5159 31.3593 20.2643 30.4734 19.5893Z" fill="#D8DBDD"/>
                <path d="M24.5674 24.0186L20.9252 28.7717L17.7471 26.3389C16.8752 25.6639 15.6096 25.8326 14.9487 26.7045C14.2737 27.5764 14.4424 28.842 15.3143 29.5029L20.0815 33.1592C20.5034 33.4826 21.0377 33.6233 21.558 33.5529C22.0784 33.4826 22.5565 33.2014 22.8799 32.7936L26.5221 28.0404C24.9471 27.4357 24.483 25.7061 24.5674 24.0186Z" fill="white"/>
                <path d="M50.1467 0.0143005L50.6529 0.084613C51.8061 0.2393 52.6217 1.29399 52.467 2.44711L43.5795 70.8893H38.7842L47.7701 1.84243C47.9248 0.689301 48.9795 -0.126325 50.1467 0.0143005Z" fill="#996459"/>
                <path d="M50.6391 0.0842489L50.1328 0.0139364C49.6969 -0.0423136 49.2891 0.0420614 48.9234 0.210811C49.7953 0.562374 50.3578 1.46237 50.2313 2.43269L41.3438 70.8749H43.5656L52.4531 2.43269C52.6219 1.29362 51.8063 0.238936 50.6391 0.0842489Z" fill="#875850"/>
                <path d="M29.5176 26.2827L64.5754 30.8389C66.1223 31.0358 67.5426 29.953 67.7395 28.4061L70.1441 9.87173C70.341 8.32486 69.2582 6.90455 67.7113 6.70767L32.6395 2.13736C31.0926 1.94048 29.6723 3.0233 29.4754 4.57017L27.0707 23.1045C26.8738 24.6655 27.9707 26.0717 29.5176 26.2827Z" fill="#FF7A00"/>
                <path d="M44.3674 22.486C43.8752 22.4297 43.4252 22.1766 43.1159 21.7969L39.6284 17.3954C38.9815 16.5797 39.1221 15.4125 39.9377 14.7657C40.7534 14.1188 41.9205 14.2594 42.5674 15.075L44.9018 18.0141L53.044 11.5454C53.8596 10.8985 55.0268 11.0391 55.6737 11.8547C56.3205 12.6704 56.1799 13.8375 55.3643 14.4844L45.7596 22.1063C45.3659 22.4016 44.8596 22.5422 44.3674 22.486Z" fill="white"/>
                <path d="M49.3449 72.0002H21.9371C21.3184 72.0002 20.8262 71.508 20.8262 70.8893C20.8262 70.2705 21.3184 69.7783 21.9371 69.7783H49.3449C49.9637 69.7783 50.4559 70.2705 50.4559 70.8893C50.4559 71.508 49.9637 72.0002 49.3449 72.0002Z" fill="#5C546A"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="72" height="72" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        <div className="-i-text">{props.isMobile ? t.m_text_icon_1 : t.text_icon_1}</div>
    </div>
    )
}

const Icon2 = props => {
    const {t} = props;
    const size  = props.isMobile ? 48 : 72;
    return (
        <div className="-s5-icon slideInDown delay5">
            <svg width={size} height={size} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path d="M67.055 15.8994H5.67708L0 19.6475V62.4306C0 64.8947 1.99742 66.8906 4.46148 66.8906H67.5385C70.0026 66.8906 72 64.8947 72 62.4306V19.6475L67.055 15.8994Z" fill="#F9F7F8"/>
                    <path d="M8.49279 62.4306V15.8994H5.67708L0 19.6475V62.4306C0 64.8947 1.99742 66.8906 4.46148 66.8906H12.9543C10.4902 66.8906 8.49279 64.8947 8.49279 62.4306Z" fill="#EFEDEF"/>
                    <path d="M72 13.6656V19.6476H0V13.6656C0 11.2015 1.99742 9.2041 4.46148 9.2041H67.5385C70.0026 9.2041 72 11.2015 72 13.6656Z" fill="#FD8087"/>
                    <path d="M67.5385 9.2041H4.46148C1.99742 9.2041 0 11.2015 0 13.6656V19.6476H8.4928V18.1387C8.4928 17.3345 8.94054 16.6091 9.63906 16.2108C10.197 15.8925 10.6894 15.472 11.0897 14.9741C11.5302 14.4265 12.3577 14.4297 12.7968 14.9784C13.6138 15.9991 14.8126 16.6977 16.1932 16.8475C16.3779 16.8675 16.5655 16.8777 16.7504 16.8777C18.3463 16.8777 19.7722 16.1388 20.7054 14.9853C21.1511 14.4344 21.9788 14.4251 22.4216 14.9784C23.2386 15.9992 24.4374 16.6977 25.818 16.8475C26.0027 16.8675 26.1903 16.8777 26.3752 16.8777C27.9711 16.8777 29.397 16.1388 30.3302 14.9853C30.7759 14.4344 31.6037 14.4251 32.0465 14.9784C32.8634 15.9992 34.0622 16.6977 35.4428 16.8475C35.6276 16.8675 35.8151 16.8777 36 16.8777C37.5946 16.8777 39.0195 16.1401 39.9527 14.9882C40.4 14.4362 41.2248 14.4362 41.6721 14.9882C42.6053 16.14 44.0301 16.8776 45.6247 16.8777H45.625C45.8097 16.8777 45.9974 16.8675 46.182 16.8475C47.5626 16.6977 48.7615 15.9991 49.5785 14.9783C50.0213 14.4251 50.8491 14.4343 51.2946 14.9853C52.2278 16.1386 53.6536 16.8776 55.2493 16.8777H55.2498C55.4345 16.8777 55.6222 16.8675 55.8068 16.8475C57.1874 16.6977 58.3862 15.9992 59.2032 14.9784C59.646 14.4253 60.4737 14.4344 60.9194 14.9853C61.8526 16.1386 63.2784 16.8774 64.8743 16.8776H64.8747C65.0595 16.8776 65.2472 16.8674 65.4318 16.8473C68.0148 16.5672 69.9625 14.3664 69.9625 11.7279V9.92064C69.2644 9.46795 68.4324 9.2041 67.5385 9.2041Z" fill="#FE646F"/>
                    <path d="M35.7561 13.9567C34.6408 13.8357 33.8193 12.8495 33.8193 11.7277V7.35211C33.8193 6.23027 34.6408 5.24406 35.7561 5.12311C37.0696 4.98065 38.1805 6.00581 38.1805 7.29047V11.7892C38.1805 13.074 37.0697 14.0991 35.7561 13.9567Z" fill="#F9F7F8"/>
                    <path d="M26.1311 13.9567C25.0158 13.8357 24.1943 12.8495 24.1943 11.7277V7.35211C24.1943 6.23027 25.0158 5.24406 26.1311 5.12311C27.4446 4.98065 28.5555 6.00581 28.5555 7.29047V11.7892C28.5555 13.074 27.4447 14.0991 26.1311 13.9567Z" fill="#F9F7F8"/>
                    <path d="M16.5071 13.9567C15.3918 13.8357 14.5703 12.8495 14.5703 11.7277V7.35211C14.5703 6.23027 15.3918 5.24406 16.5071 5.12311C17.8205 4.98065 18.9315 6.00581 18.9315 7.29047V11.7892C18.9313 13.074 17.8205 14.0991 16.5071 13.9567Z" fill="#F9F7F8"/>
                    <path d="M6.88211 13.9567C5.76681 13.8357 4.94531 12.8495 4.94531 11.7277V7.35211C4.94531 6.23027 5.76681 5.24406 6.88211 5.12311C8.19555 4.98065 9.30649 6.00581 9.30649 7.29047V11.7892C9.30649 13.074 8.19555 14.0991 6.88211 13.9567Z" fill="#F9F7F8"/>
                    <path d="M45.8687 13.9567C46.984 13.8357 47.8055 12.8495 47.8055 11.7277V7.35211C47.8055 6.23027 46.984 5.24406 45.8687 5.12311C44.5553 4.98065 43.4443 6.00581 43.4443 7.29047V11.7892C43.4443 13.074 44.5551 14.0991 45.8687 13.9567Z" fill="#F9F7F8"/>
                    <path d="M55.4937 13.9567C56.609 13.8357 57.4305 12.8495 57.4305 11.7277V7.35211C57.4305 6.23027 56.609 5.24406 55.4937 5.12311C54.1803 4.98065 53.0693 6.00581 53.0693 7.29047V11.7892C53.0693 13.074 54.1801 14.0991 55.4937 13.9567Z" fill="#F9F7F8"/>
                    <path d="M65.1177 13.9566C66.233 13.8356 67.0545 12.8494 67.0545 11.7276V7.35669C67.0545 6.1799 66.1503 5.16521 64.9748 5.11214C63.7246 5.05574 62.6934 6.0527 62.6934 7.2904V11.7891C62.6935 13.0739 63.8043 14.0991 65.1177 13.9566Z" fill="#F9F7F8"/>
                    <path d="M12.7915 32.9206H7.50535C6.99655 32.9206 6.58398 32.5081 6.58398 31.9992V26.7129C6.58398 26.2041 6.99641 25.7915 7.50535 25.7915H12.7917C13.3005 25.7915 13.713 26.2039 13.713 26.7129V31.9992C13.7129 32.508 13.3003 32.9206 12.7915 32.9206Z" fill="#FE9738"/>
                    <path d="M30.0358 32.9206H24.7495C24.2407 32.9206 23.8281 32.5081 23.8281 31.9992V26.7129C23.8281 26.2041 24.2405 25.7915 24.7495 25.7915H30.0358C30.5446 25.7915 30.9572 26.2039 30.9572 26.7129V31.9992C30.9572 32.508 30.5446 32.9206 30.0358 32.9206Z" fill="#FE9738"/>
                    <path d="M47.28 32.9206H41.9936C41.4848 32.9206 41.0723 32.5081 41.0723 31.9992V26.7129C41.0723 26.2041 41.4847 25.7915 41.9936 25.7915H47.28C47.7888 25.7915 48.2013 26.2039 48.2013 26.7129V31.9992C48.2012 32.508 47.7888 32.9206 47.28 32.9206Z" fill="#FE9738"/>
                    <path d="M64.5241 32.9206H59.2378C58.729 32.9206 58.3164 32.5081 58.3164 31.9992V26.7129C58.3164 26.2041 58.7288 25.7915 59.2378 25.7915H64.5241C65.0329 25.7915 65.4455 26.2039 65.4455 26.7129V31.9992C65.4453 32.508 65.0329 32.9206 64.5241 32.9206Z" fill="#FE9738"/>
                    <path d="M12.7915 46.4665H7.50535C6.99655 46.4665 6.58398 46.054 6.58398 45.5451V40.2588C6.58398 39.75 6.99641 39.3374 7.50535 39.3374H12.7917C13.3005 39.3374 13.713 39.7498 13.713 40.2588V45.5451C13.7129 46.054 13.3003 46.4665 12.7915 46.4665Z" fill="#FE9738"/>
                    <path d="M30.0358 46.4665H24.7495C24.2407 46.4665 23.8281 46.054 23.8281 45.5451V40.2588C23.8281 39.75 24.2405 39.3374 24.7495 39.3374H30.0358C30.5446 39.3374 30.9572 39.7498 30.9572 40.2588V45.5451C30.9572 46.054 30.5446 46.4665 30.0358 46.4665Z" fill="#FE9738"/>
                    <path d="M64.5241 46.4665H59.2378C58.729 46.4665 58.3164 46.054 58.3164 45.5451V40.2588C58.3164 39.75 58.7288 39.3374 59.2378 39.3374H64.5241C65.0329 39.3374 65.4455 39.7498 65.4455 40.2588V45.5451C65.4453 46.054 65.0329 46.4665 64.5241 46.4665Z" fill="#FE9738"/>
                    <path d="M12.7915 60.0129H7.50535C6.99655 60.0129 6.58398 59.6004 6.58398 59.0915V53.8052C6.58398 53.2964 6.99641 52.8838 7.50535 52.8838H12.7917C13.3005 52.8838 13.713 53.2962 13.713 53.8052V59.0915C13.7129 59.6003 13.3003 60.0129 12.7915 60.0129Z" fill="#FE9738"/>
                    <path d="M30.0358 60.0129H24.7495C24.2407 60.0129 23.8281 59.6004 23.8281 59.0915V53.8052C23.8281 53.2964 24.2405 52.8838 24.7495 52.8838H30.0358C30.5446 52.8838 30.9572 53.2962 30.9572 53.8052V59.0915C30.9572 59.6003 30.5446 60.0129 30.0358 60.0129Z" fill="#FE9738"/>
                    <path d="M47.28 60.0129H41.9936C41.4848 60.0129 41.0723 59.6004 41.0723 59.0915V53.8052C41.0723 53.2964 41.4847 52.8838 41.9936 52.8838H47.28C47.7888 52.8838 48.2013 53.2962 48.2013 53.8052V59.0915C48.2012 59.6003 47.7888 60.0129 47.28 60.0129Z" fill="#FE9738"/>
                    <path d="M45.2414 39.0554L45.7983 40.7696C45.9117 41.1185 46.2368 41.3547 46.6037 41.3547H48.4062C49.2265 41.3547 49.5675 42.4045 48.9039 42.8867L47.4457 43.9461C47.1488 44.1617 47.0247 44.544 47.1381 44.8929L47.695 46.6072C47.9485 47.3874 47.0555 48.0362 46.3919 47.554L44.9336 46.4945C44.6368 46.2789 44.235 46.2789 43.9381 46.4945L42.4799 47.554C41.8163 48.0362 40.9233 47.3874 41.1768 46.6072L41.7337 44.8929C41.8471 44.544 41.7229 44.1619 41.4261 43.9461L39.9679 42.8867C39.3042 42.4045 39.6453 41.3547 40.4656 41.3547H42.2681C42.635 41.3547 42.9601 41.1185 43.0735 40.7696L43.6304 39.0554C43.8842 38.2752 44.988 38.2752 45.2414 39.0554Z" fill="#FEF056"/>
                    <path d="M56.7041 66.804L71.9993 51.5088H59.6802C58.0366 51.5088 56.7041 52.8411 56.7041 54.4848V66.804Z" fill="#E5E1E5"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="72" height="72" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

            <div className="-i-text">{props.isMobile ? t.m_text_icon_2 : t.text_icon_2}</div>
        </div>
    )
}

const Icon3 = props => {
    const {t} = props;
    const size  = props.isMobile ? 48 : 72;
    return (
        <div className="-s5-icon slideInDown delay6">
            <svg width={size} height={size} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.25 17.4375V8.4375C20.25 7.19438 21.2569 6.1875 22.5 6.1875C27.4703 6.1875 31.5 10.2172 31.5 15.1875V17.4375H20.25Z" fill="#DB9E68"/>
            <path d="M4.5 37.6875H9V26.4375H4.5C3.25688 26.4375 2.25 27.4444 2.25 28.6875V35.4375C2.25 36.6806 3.25688 37.6875 4.5 37.6875Z" fill="#DB9E68"/>
            <path d="M7.875 57.9375C6.01425 57.9375 4.5 59.1986 4.5 60.75C4.5 62.3014 6.01425 63.5625 7.875 63.5625H43.875V57.9375H7.875Z" fill="#DBDEE3"/>
            <path d="M68.625 55.6875H43.875C44.496 55.6875 45 56.1915 45 56.8125C45 57.4335 44.496 57.9375 43.875 57.9375H68.625C69.246 57.9375 69.75 57.4335 69.75 56.8125C69.75 56.1915 69.246 55.6875 68.625 55.6875Z" fill="#5C76B2"/>
            <path d="M68.625 63.5625H43.875C44.496 63.5625 45 64.0665 45 64.6875C45 65.3085 44.496 65.8125 43.875 65.8125H68.625C69.246 65.8125 69.75 65.3085 69.75 64.6875C69.75 64.0665 69.246 63.5625 68.625 63.5625Z" fill="#5C76B2"/>
            <path d="M43.875 65.8125H7.875C4.77338 65.8125 2.25 63.5411 2.25 60.75C2.25 57.9589 4.77338 55.6875 7.875 55.6875H43.875C44.496 55.6875 45 56.1915 45 56.8125C45 57.4335 44.496 57.9375 43.875 57.9375H7.875C6.01425 57.9375 4.5 59.1986 4.5 60.75C4.5 62.3014 6.01425 63.5625 7.875 63.5625H43.875C44.496 63.5625 45 64.0665 45 64.6875C45 65.3085 44.496 65.8125 43.875 65.8125Z" fill="#6FA4D8"/>
            <path d="M43.875 57.9375H68.625V63.5625H43.875V57.9375Z" fill="#B3B4B6"/>
            <path d="M52.875 15.1875H23.625C14.3055 15.1875 6.75 22.743 6.75 32.0625C6.75 41.382 14.3055 48.9375 23.625 48.9375H52.875C62.1945 48.9375 69.75 41.382 69.75 32.0625C69.75 22.743 62.1945 15.1875 52.875 15.1875Z" fill="#EEC78E"/>
            <path d="M69.75 32.0625C69.75 41.3775 62.19 48.9375 52.875 48.9375H23.625C18.9675 48.9375 14.7487 47.0475 11.7 43.9875C11.1375 43.425 10.6088 42.8288 10.125 42.1875H40.5C52.9313 42.1875 63 32.1188 63 19.6875V18.5625C63.6413 19.0463 64.2375 19.575 64.8 20.1375C67.86 23.1862 69.75 27.405 69.75 32.0625Z" fill="#DB9E68"/>
            <path d="M30.375 24.1875H52.875C54.1181 24.1875 55.125 23.1806 55.125 21.9375C55.125 20.6944 54.1181 19.6875 52.875 19.6875H30.375C29.1319 19.6875 28.125 20.6944 28.125 21.9375C28.125 23.1806 29.1319 24.1875 30.375 24.1875Z" fill="#55525B"/>
            <path d="M20.25 28.6875C21.4926 28.6875 22.5 27.6801 22.5 26.4375C22.5 25.1949 21.4926 24.1875 20.25 24.1875C19.0074 24.1875 18 25.1949 18 26.4375C18 27.6801 19.0074 28.6875 20.25 28.6875Z" fill="#55525B"/>
            <path d="M32.625 55.6875H25.875C24.6319 55.6875 23.625 54.6806 23.625 53.4375V48.9375H34.875V53.4375C34.875 54.6806 33.8681 55.6875 32.625 55.6875Z" fill="#DB9E68"/>
            <path d="M50.625 55.6875H43.875C42.6319 55.6875 41.625 54.6806 41.625 53.4375V48.9375H52.875V53.4375C52.875 54.6806 51.8681 55.6875 50.625 55.6875Z" fill="#DB9E68"/>
            <path d="M42.75 6.1875H40.5C34.9076 6.1875 30.375 10.7201 30.375 16.3125C30.375 21.9037 34.9076 26.4375 40.5 26.4375H42.75C48.3424 26.4375 52.875 21.9049 52.875 16.3125C52.875 10.7201 48.3424 6.1875 42.75 6.1875Z" fill="#F68820"/>
            <path d="M40.5 26.4375C46.0919 26.4375 50.625 21.9044 50.625 16.3125C50.625 10.7206 46.0919 6.1875 40.5 6.1875C34.9081 6.1875 30.375 10.7206 30.375 16.3125C30.375 21.9044 34.9081 26.4375 40.5 26.4375Z" fill="#FBBE18"/>
            <path d="M40.5 15.1875C39.5696 15.1875 38.8125 14.4304 38.8125 13.5C38.8125 12.5696 39.5696 11.8125 40.5 11.8125C41.4304 11.8125 42.1875 12.5696 42.1875 13.5C42.1875 14.1221 42.6915 14.625 43.3125 14.625C43.9335 14.625 44.4375 14.1221 44.4375 13.5C44.4375 11.7225 43.2461 10.2341 41.625 9.74588V9C41.625 8.37788 41.121 7.875 40.5 7.875C39.879 7.875 39.375 8.37788 39.375 9V9.74588C37.7539 10.2341 36.5625 11.7225 36.5625 13.5C36.5625 15.6712 38.3288 17.4375 40.5 17.4375C41.4304 17.4375 42.1875 18.1946 42.1875 19.125C42.1875 20.0554 41.4304 20.8125 40.5 20.8125C39.5696 20.8125 38.8125 20.0554 38.8125 19.125C38.8125 18.5029 38.3085 18 37.6875 18C37.0665 18 36.5625 18.5029 36.5625 19.125C36.5625 20.9025 37.7539 22.3909 39.375 22.8791V23.625C39.375 24.2471 39.879 24.75 40.5 24.75C41.121 24.75 41.625 24.2471 41.625 23.625V22.8791C43.2461 22.392 44.4375 20.9025 44.4375 19.125C44.4375 16.9537 42.6712 15.1875 40.5 15.1875Z" fill="#F68820"/>
            <path d="M33.1875 24.1875H50.0625V28.6875H33.1875V24.1875Z" fill="#EEC78E"/>
        </svg>
        <div className="-i-text">{props.isMobile ? t.m_text_icon_3 : t.text_icon_3}</div>
    </div>
    )
}

const S5Button = props => <div className="-s05-button slideInDown delay7" onClick={props.onClick}>
    <div className="-b-text1">{props.t.button_1}</div>
    <div className="-b-text2">{props.t.button_2}</div>

    <div className="b-right-circle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 9V14.25" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 9V10.5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.5 9.75V10.5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5 10.5V11.25" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.225 9.00017C17.25 8.85017 16.5 9.60017 16.5 10.5002V9.82517C16.5 9.07517 15.975 8.40017 15.225 8.25017C14.25 8.10017 13.5 8.85017 13.5 9.75017V9.07517C13.5 8.32517 12.975 7.65017 12.225 7.50017C11.25 7.35017 10.5 8.10017 10.5 9.00017V3.82517C10.5 3.07517 9.975 2.40017 9.225 2.25017C8.325 2.10017 7.5 2.85017 7.5 3.75017V10.1252C7.5 9.00017 6.525 8.17517 5.4 8.25017C5.025 8.25017 4.725 8.40017 4.5 8.62517V14.4002C4.5 18.2252 7.425 21.6002 11.25 21.7502C11.475 21.7502 11.7 21.7502 11.85 21.7502C16.2 21.6002 19.5 17.9252 19.5 13.5752V13.5002V10.5752C19.5 9.82517 18.975 9.15017 18.225 9.00017Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    </div>
</div>
