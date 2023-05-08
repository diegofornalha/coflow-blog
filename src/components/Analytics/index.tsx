import * as React from 'react';
import Script from 'next/script';

const Analytics = () => {

    return (
        <>
            <Script src="//receiver.posclick.dinamize.com/forms/js/319334_3832.js"></>

            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-GC2P2Z5BYT`}
            />
            <Script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-GC2P2Z5BYT', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    )

}
export default Analytics;