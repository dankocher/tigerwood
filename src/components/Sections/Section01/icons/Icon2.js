import React from 'react';

export default class Icon2 extends React.Component {
    render() {
        const {isMobile} = this.props;
        let width = isMobile ? 48 : 72;
        let height = isMobile ? 48 : 72;
        return (<div className={"-svg-icon"}>
            <svg width={width} height={height} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.21" d="M35.9996 48.9187C44.0302 48.9187 50.5402 42.4086 50.5402 34.378C50.5402 26.3475 44.0302 19.8374 35.9996 19.8374C27.969 19.8374 21.459 26.3475 21.459 34.378C21.459 42.4086 27.969 48.9187 35.9996 48.9187Z" fill="#FF7A00"/>
                <path opacity="0.29" d="M50.5406 34.378C50.5406 26.3624 44.0437 19.8374 36 19.8374V48.9187C44.0156 48.9187 50.5406 42.3937 50.5406 34.378Z" fill="#FF7A00"/>
                <path d="M52.6217 34.3782C52.6217 25.2095 45.1686 17.7563 35.9998 17.7563C26.8311 17.7563 19.3779 25.2095 19.3779 34.3782C19.3779 43.547 26.8311 51.0001 35.9998 51.0001C45.1686 51.0001 52.6217 43.547 52.6217 34.3782ZM48.2623 32.2688H44.0717C43.9029 29.0626 43.2842 26.0813 42.3561 23.6626C45.4217 25.4907 47.6436 28.6126 48.2623 32.2688ZM35.9998 46.8095C34.9311 46.8095 32.5123 43.2938 32.0904 36.4313H39.8811C39.4873 43.2938 37.0686 46.8095 35.9998 46.8095ZM32.0904 32.2688C32.5123 25.4345 34.9029 21.8907 35.9998 21.8907C37.0686 21.8907 39.4873 25.4063 39.9092 32.2688H32.0904ZM29.6436 23.6626C28.6873 26.0813 28.0967 29.0907 27.9279 32.2688H23.7373C24.3561 28.6126 26.5779 25.4907 29.6436 23.6626ZM23.7373 36.4595H27.9279C28.0967 39.6657 28.7154 42.647 29.6436 45.0657C26.5779 43.2376 24.3561 40.1157 23.7373 36.4595ZM42.3561 45.0657C43.3123 42.647 43.9029 39.6657 44.0717 36.4595H48.2623C47.6436 40.1157 45.4217 43.2376 42.3561 45.0657Z" fill="#FFBB27"/>
                <path d="M63.1967 40.7625C67.8373 40.7625 71.6061 36.9937 71.6061 32.3531V28.3313H66.2904C64.6592 28.3313 63.0842 28.8094 61.7061 29.6812C61.5654 28.8375 61.3686 28.0219 61.1436 27.2063L62.7467 26.2781C64.6873 25.1531 66.0936 23.3531 66.6561 21.1594C67.2467 18.9937 66.9373 16.7156 65.8123 14.775L63.8154 11.3438L59.2029 14.0156C57.7967 14.8313 56.6436 16.0406 55.9123 17.475C55.3217 16.8 54.7029 16.1531 54.0561 15.5063L54.8436 14.1562C55.9686 12.2156 56.2779 9.9375 55.6873 7.77187C55.0967 5.60625 53.7186 3.77813 51.7779 2.65313L48.2904 0.65625L45.6186 5.26875C44.4936 7.20937 44.1842 9.4875 44.7748 11.6531C45.3654 13.8187 46.7436 15.6469 48.6842 16.7719L50.1748 17.6438C55.0967 21.8344 57.9373 27.9094 57.9373 34.3781C57.9373 46.4719 48.0936 56.3438 35.9717 56.3438C23.8779 56.3438 14.0061 46.5 14.0061 34.3781C14.0061 27.9094 16.8186 21.8062 21.7686 17.6438L23.2592 16.7719C25.1998 15.6469 26.6061 13.8469 27.1686 11.6531C27.7592 9.4875 27.4498 7.20937 26.3248 5.26875L23.6529 0.65625L20.1654 2.65313C16.2279 4.9875 14.8498 10.1625 17.1561 14.1562L17.9436 15.5063C17.2967 16.125 16.6779 16.7719 16.0873 17.475C15.3561 16.0406 14.2311 14.8313 12.7967 14.0156L8.18418 11.3438L6.18731 14.8031C5.06231 16.7437 4.75293 19.0219 5.34356 21.1875C5.93418 23.3531 7.31231 25.1812 9.25293 26.3062L10.8561 27.2344C10.6311 28.05 10.4342 28.8656 10.2936 29.7094C8.94355 28.8375 7.36856 28.3594 5.70918 28.3594H0.393555V32.3813C0.393555 37.0219 4.1623 40.7906 8.80293 40.7906H10.6592C10.8561 41.6063 11.1092 42.4219 11.3904 43.2094C9.75918 43.125 8.15606 43.4906 6.74981 44.3062L2.1373 46.9781L4.13418 50.4656C5.25918 52.4062 7.05918 53.8125 9.25293 54.375C9.98418 54.5719 10.7154 54.6562 11.4467 54.6562C12.9092 54.6562 14.3436 54.2625 15.6373 53.5312L17.2686 52.6031C17.8592 53.2219 18.4779 53.7844 19.1248 54.3469C17.6904 55.0781 16.4811 56.2031 15.6373 57.6375L12.9654 62.25L16.4529 64.2469C17.7467 65.0062 19.1811 65.3719 20.6436 65.3719C21.3748 65.3719 22.1061 65.2875 22.8373 65.0906C25.0029 64.5 26.8311 63.1219 27.9561 61.1812L28.8842 59.5781C31.1623 60.225 33.5529 60.5625 36.0279 60.5625C38.5029 60.5625 40.8936 60.225 43.1717 59.5781L44.0998 61.1812C45.2248 63.1219 47.0248 64.5281 49.1904 65.0906C49.9217 65.2875 50.6529 65.3719 51.3842 65.3719C52.8467 65.3719 54.2811 64.9781 55.5748 64.2469L59.0623 62.25L56.3904 57.6375C55.5748 56.2031 54.3654 55.0781 52.9029 54.3469C53.5498 53.8125 54.1686 53.2219 54.7592 52.6031L56.3904 53.5312C57.6842 54.2906 59.1186 54.6562 60.5811 54.6562C61.3123 54.6562 62.0436 54.5719 62.7748 54.375C64.9404 53.7844 66.7686 52.4062 67.8654 50.4656L69.8623 46.9781L65.2498 44.3062C63.8436 43.4906 62.2123 43.125 60.6092 43.2094C60.8904 42.4219 61.1436 41.6063 61.3404 40.7906L63.1967 40.7625Z" fill="#836FED"/>
                <path d="M63.1967 40.7625C67.8373 40.7625 71.6061 36.9937 71.6061 32.3531V28.3313H66.2904C64.6592 28.3313 63.0842 28.8094 61.706 29.6812C61.5654 28.8375 61.3685 28.0219 61.1435 27.2063L62.7467 26.2781C64.6873 25.1531 66.0936 23.3531 66.6561 21.1594C67.2467 18.9937 66.9373 16.7156 65.8123 14.775L63.8154 11.3438L59.2029 14.0156C57.7967 14.8313 56.6436 16.0406 55.9123 17.475C55.3217 16.8 54.7029 16.1531 54.0561 15.5063L54.8436 14.1562C55.9686 12.2156 56.2779 9.9375 55.6873 7.77187C55.0967 5.60625 53.7186 3.77813 51.7779 2.65313L48.2904 0.65625L45.6186 5.26875C44.4936 7.20937 44.1842 9.4875 44.7748 11.6531C45.3654 13.8187 46.7436 15.6469 48.6842 16.7719L50.1748 17.6438C55.0967 21.8344 57.9373 27.9094 57.9373 34.3781C57.9373 46.4719 48.0936 56.3438 35.9717 56.3438V60.5063C38.4467 60.5063 40.8373 60.1688 43.1154 59.5219L44.0436 61.125C45.1686 63.0656 46.9686 64.4719 49.1342 65.0344C49.8654 65.2312 50.5967 65.3156 51.3279 65.3156C52.7904 65.3156 54.2248 64.9219 55.5186 64.1906L59.0061 62.1938L56.3342 57.5812C55.5186 56.1469 54.3092 55.0219 52.8467 54.2906C53.4936 53.7562 54.1123 53.1656 54.7029 52.5469L56.3342 53.475C57.6279 54.2344 59.0623 54.6 60.5248 54.6C61.2561 54.6 61.9873 54.5156 62.7186 54.3188C64.8842 53.7281 66.7123 52.35 67.8092 50.4094L69.806 46.9219L65.1936 44.25C63.7873 43.4344 62.1561 43.0688 60.5529 43.1531C60.8342 42.3656 61.0873 41.55 61.2842 40.7344L63.1967 40.7625Z" fill="#921FED"/>
            </svg>
        </div>)
    }
}
