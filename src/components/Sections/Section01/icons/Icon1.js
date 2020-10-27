import React from 'react';

export default class Icon1 extends React.Component {
    render() {
        const {isMobile} = this.props;
        let width = isMobile ? 48 : 72;
        let height = isMobile ? 48 : 72;
        return (<div className={"-svg-icon"}>
            <svg width={width} height={height} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.1376 46.9406C55.9688 46.9969 55.8282 47.0812 55.6594 47.1375L51.9751 48.4312L49.3032 51.2719C47.8688 52.7906 45.7876 53.5219 43.7063 53.2125L43.0594 53.1281L50.8501 71.5219L56.3907 66.1219L64.1251 65.8687L56.1376 46.9406Z" fill="#9E5FFF"/>
                <path d="M46.9125 22.4719L40.2187 21.9937L37.6875 15.75C37.575 15.4969 37.35 15.3562 37.0687 15.3562C36.8156 15.3562 36.5906 15.525 36.4781 15.75L33.9468 21.9937L27.225 22.4719C26.9718 22.4719 26.7468 22.6687 26.6625 22.8937C26.5781 23.1469 26.6625 23.4281 26.8593 23.5969L32.0062 27.9562L30.4031 34.5094C30.3468 34.7625 30.4312 35.0437 30.6562 35.1844C30.8531 35.325 31.1343 35.3531 31.3593 35.2125L37.0968 31.6406L42.8062 35.2125C43.1156 35.3812 43.5093 35.2969 43.6781 34.9875C43.7625 34.8469 43.7906 34.6781 43.7625 34.5094L42.1593 27.9562L47.3062 23.5969C47.5031 23.4281 47.5875 23.1469 47.5031 22.8937C47.4187 22.6687 47.1937 22.4719 46.9125 22.4719Z" fill="#FF7A00"/>
                <path d="M61.5938 19.0969L58.5844 15.525L57.6001 10.9688C57.3751 9.9 56.6438 9.02813 55.6313 8.60625L51.3282 6.83438L48.3188 3.2625C47.6157 2.41875 46.5469 1.99688 45.4782 2.10938L40.8376 2.53125L36.5344 0.759379C35.5219 0.337504 34.3969 0.450004 33.4688 1.04063L29.5594 3.57188L24.9188 3.99375C23.8501 4.10625 22.8657 4.725 22.3594 5.65313L20.0813 9.73125L16.1719 12.2625C15.2719 12.8531 14.7094 13.8656 14.6813 14.9344L14.5407 19.6031L12.2626 23.6813C11.7282 24.6375 11.7001 25.7625 12.1782 26.7469L14.2313 30.9375L14.0907 35.6063C14.0626 36.7031 14.5688 37.7156 15.4407 38.3625L19.2094 41.1188L19.6876 42.1031L10.0126 65.8688L17.7469 66.1219L23.2876 71.5219L32.1751 50.625C33.0469 51.2156 34.1438 51.3563 35.1282 51.0188L39.5438 49.4719L44.1563 50.1469C45.2251 50.3156 46.322 49.9219 47.0532 49.1344L50.2313 45.7313L54.6469 44.1844C55.6595 43.8188 56.447 43.0031 56.7563 41.9344L57.9938 37.4344L61.1719 34.0313C61.9032 33.2438 62.2126 32.1469 61.9876 31.0781L61.0032 26.5219L62.2407 22.0219C62.5219 21.0656 62.2688 19.9406 61.5938 19.0969ZM37.0969 44.1281C27.0282 44.1281 18.8438 35.9438 18.8438 25.875C18.8438 15.8063 27.0282 7.62188 37.0969 7.62188C47.1657 7.62188 55.3501 15.8063 55.3501 25.875C55.3501 35.9438 47.1657 44.1281 37.0969 44.1281Z" fill="#921FED"/>
                <path d="M37.0969 9.02814C27.8156 9.02814 20.25 16.5938 20.25 25.875C20.25 35.1563 27.8156 42.7219 37.0969 42.7219C46.3781 42.7219 53.9438 35.1563 53.9438 25.875C53.9438 16.5938 46.3781 9.02814 37.0969 9.02814ZM52.2 25.875C52.2 34.2281 45.4219 40.9781 37.0969 40.9781C28.7437 40.9781 21.9937 34.2 21.9937 25.875C21.9937 17.5219 28.7719 10.7719 37.0969 10.7719C45.45 10.7719 52.2 17.5219 52.2 25.875Z" fill="#921FED"/>
            </svg>

        </div>)
    }
}
