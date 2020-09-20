import React from 'react';

export default class Icon1 extends React.Component {
    render() {
        const {isMobile} = this.props;
        let width = isMobile ? 48 : 72;
        let height = isMobile ? 48 : 72;
        return (<div className={"-svg-icon"}>
            <svg width={width} height={height} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.1377 46.9407C55.9689 46.9969 55.8283 47.0813 55.6596 47.1376L51.9752 48.4313L49.3033 51.2719C47.8689 52.7907 45.7877 53.5219 43.7064 53.2125L43.0596 53.1282L50.8502 71.5219L56.3908 66.1219L64.1252 65.8688L56.1377 46.9407Z" fill="#921FED"/>
                    <path d="M46.9125 22.4718L40.2187 21.9937L37.6875 15.75C37.575 15.4968 37.35 15.3562 37.0687 15.3562C36.8156 15.3562 36.5906 15.525 36.4781 15.75L33.9468 21.9937L27.225 22.4718C26.9718 22.4718 26.7468 22.6687 26.6625 22.8937C26.5781 23.1468 26.6625 23.4281 26.8593 23.5968L32.0062 27.9562L30.4031 34.5093C30.3468 34.7625 30.4312 35.0437 30.6562 35.1843C30.8531 35.325 31.1343 35.3531 31.3593 35.2125L37.0968 31.6406L42.8062 35.2125C43.1156 35.3812 43.5093 35.2968 43.6781 34.9875C43.7625 34.8468 43.7906 34.6781 43.7625 34.5093L42.1593 27.9562L47.3062 23.5968C47.5031 23.4281 47.5875 23.1468 47.5031 22.8937C47.4187 22.6687 47.1937 22.4718 46.9125 22.4718Z" fill="#FF7A00"/>
                    <path d="M61.5939 19.097L58.5846 15.5251L57.6002 10.9688C57.3752 9.90009 56.6439 9.02822 55.6314 8.60635L51.3283 6.83447L48.3189 3.2626C47.6158 2.41885 46.5471 1.99697 45.4783 2.10947L40.8377 2.53135L36.5346 0.75947C35.5221 0.337595 34.3971 0.450095 33.4689 1.04072L29.5596 3.57197L24.9189 3.99384C23.8502 4.10635 22.8658 4.7251 22.3596 5.65322L20.0814 9.73134L16.1721 12.2626C15.2721 12.8532 14.7096 13.8657 14.6814 14.9345L14.5408 19.6032L12.2627 23.6813C11.7283 24.6376 11.7002 25.7626 12.1783 26.747L14.2314 30.9376L14.0908 35.6063C14.0627 36.7032 14.5689 37.7157 15.4408 38.3626L19.2096 41.1188L19.6877 42.1032L10.0127 65.8688L17.7471 66.122L23.2877 71.522L32.1752 50.6251C33.0471 51.2157 34.1439 51.3563 35.1283 51.0188L39.5439 49.472L44.1564 50.147C45.2252 50.3157 46.3221 49.922 47.0533 49.1345L50.2314 45.7313L54.6471 44.1845C55.6596 43.8188 56.4471 43.0032 56.7564 41.9345L57.9939 37.4345L61.1721 34.0313C61.9033 33.2438 62.2127 32.147 61.9877 31.0782L61.0033 26.522L62.2408 22.022C62.5221 21.0657 62.2689 19.9407 61.5939 19.097ZM37.0971 44.1282C27.0283 44.1282 18.8439 35.9438 18.8439 25.8751C18.8439 15.8063 27.0283 7.62197 37.0971 7.62197C47.1658 7.62197 55.3502 15.8063 55.3502 25.8751C55.3502 35.9438 47.1658 44.1282 37.0971 44.1282Z" fill="#921FED"/>
                    <path d="M37.0969 9.02832C27.8156 9.02832 20.25 16.5939 20.25 25.8752C20.25 35.1564 27.8156 42.7221 37.0969 42.7221C46.3781 42.7221 53.9437 35.1564 53.9437 25.8752C53.9437 16.5939 46.3781 9.02832 37.0969 9.02832ZM52.2 25.8752C52.2 34.2283 45.4219 40.9783 37.0969 40.9783C28.7437 40.9783 21.9937 34.2002 21.9937 25.8752C21.9937 17.5221 28.7719 10.7721 37.0969 10.7721C45.45 10.7721 52.2 17.5221 52.2 25.8752Z" fill="#921FED"/>
                </svg>
        </div>)
    }
}

