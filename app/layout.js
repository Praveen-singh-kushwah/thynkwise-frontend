import Bootstrap from "@/components/Bootstrap";
import { GlobalContextProvider } from "@/context/NavProvider";
import "./globals.css";
import { poppins } from "@/utilities/fonts";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import { ToastContainer } from "@/components/Common/Toaster";
// import HeyGenAutoLoad from "@/components/Common/HeyGenChat/HeyGenAutoLoad";

export const metadata = {
  title: {
    template: "%s",
    default: process.env.SITE_TITLE,
  },
  description: process.env.SITE_DESCRIPTION,
  keywords: process.env.SITE_KEYWORDS,
  openGraph: {
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    url: process.env.SITE_URL,
    siteName: process.env.SITE_TITLE,
    images: [
      {
        url: "/assets/images/seo-images/home.png",
        alt: process.env.SITE_TITLE,
      },
    ],
  },
  metadataBase: process.env.SITE_URL,
};
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      'name': 'thynkWISE',
      'url': 'https://www.thynkwise.co.in',
      'description':
        'thynkWISE helps growth-minded business leaders from tech companies double their revenues by building repeatable systems and upgrading closing skills using powerful sales platforms like Dynamics, Salesforce, HubSpot, Freshsales, and Apollo.',
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'url': 'https://www.thynkwise.co.in/#contact',
      },
      'sameAs': [
        'https://www.linkedin.com/company/thynkwise',
        'https://twitter.com/thynkwise',
      ],
    },
    {
      '@type': 'Service',
      'serviceType': 'B2B Sales Automation & CRM Services',
      'provider': {
        '@type': 'Organization',
        'name': 'thynkWISE',
      },
      'description':
        'thynkWISE specializes in transforming how businesses utilize powerful sales platforms, ensuring seamless integration of CRM systems like Apollo, HubSpot, Freshsales, Dynamics, and Salesforce to drive meaningful growth.',
      'areaServed': {
        '@type': 'Place',
        'name': 'Global',
      },
      'audience': [
        {
          '@type': 'Audience',
          'name': 'C-Suite Executives and Senior Leaders',
          'description':
            'CEOs, Managing Directors, Directors of Sales, Heads of Inside Sales, VPs of Inside Sales, and VPs of Demand Generation.',
        },
        {
          '@type': 'Audience',
          'name': 'Growth-Oriented Decision-Makers',
          'description':
            'Leaders focused on transforming their business into a self-sustaining wealth builder.',
        },
        {
          '@type': 'Audience',
          'name': 'Businesses of All Sizes',
          'description':
            'From small enterprises to large corporations invested in CRM systems.',
        },
      ],
    },
    {
      '@type': 'WebSite',
      'url': 'https://www.thynkwise.co.in',
      'name': 'thynkWISE',
      'description': 'thynkWISE - B2B Sales Automation & CRM Services',
      'publisher': {
        '@type': 'Organization',
        'name': 'thynkWISE',
      },
    },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <Script
          type="text/javascript"
          src="data:text/javascript;base64,LyogQWxsaSBBSSB3aWRnZXQgZm9yIHd3dy50aHlua3dpc2UuY28uaW4gKi8KKGZ1bmN0aW9uICh3LGQscyxvLGYsanMsZmpzKSB7d1snQWxsaUpTV2lkZ2V0J109bzt3W29dID0gd1tvXSB8fCBmdW5jdGlvbiAoKSB7ICh3W29dLnEgPSB3W29dLnEgfHwgW10pLnB1c2goYXJndW1lbnRzKSB9O2pzID0gZC5jcmVhdGVFbGVtZW50KHMpLCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO2pzLmlkID0gbzsganMuc3JjID0gZjsganMuYXN5bmMgPSAxOyBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7fSh3aW5kb3csIGRvY3VtZW50LCAnc2NyaXB0JywgJ2FsbGknLCAnaHR0cHM6Ly9zdGF0aWMuYWxsaWFpLmNvbS93aWRnZXQvdjEuanMnKSk7YWxsaSgnaW5pdCcsICdzaXRlX0MzRjNNNEhiOHhaQVJSWGUnKTthbGxpKCdvcHRpbWl6ZScsICdhbGwnKTs="
        ></Script> */}
      </head>
      <body className={`${poppins} custom-bg`}>
        <GlobalContextProvider>
          {children}
          <ToastContainer />
          <Bootstrap />
        </GlobalContextProvider>
        {/* <Script
          id="alli-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,o,f,js,fjs){
                w['AlliJSWidget']=o;
                w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
                js=d.createElement(s); fjs=d.getElementsByTagName(s)[0];
                js.async=1; js.src='https://static.alliai.com/widget/v1.js';
                fjs.parentNode.insertBefore(js,fjs);
              })(window,document,'script','alli');
              alli('init','site_C3F3M4Hb8xZARRXe');
              alli('optimize','all');
            `,
          }}
        /> */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.ANALYTICS_ID}');
        `}
        </Script>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID1}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.ANALYTICS_ID1}');
        `}
        </Script>
        <Script
          id="linkedin-insight-tag"
          type="text/javascript"
          strategy="lazyOnload"
        >
          {`
          _linkedin_partner_id = "6465074";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
        </Script>
        <Script
          id="linkedin-analytics-script"
          type="text/javascript"
          strategy="lazyOnload"
        >
          {`
          (function(l) {
            if (!l) {
              window.lintrk = function(a, b) {
                window.lintrk.q.push([a, b]);
              };
              window.lintrk.q = [];
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=6465074&fmt=gif"
          />
        </noscript>
        <Script
          id="apollo-tracking"
          type="text/javascript"
          strategy="lazyOnload"
        >
          {`
    (function(t) {
      if (!t) {
        window.trackingFunctions = {
          onLoad: function(a) {
            window.trackingFunctions.q.push([a]);
          }
        };
        window.trackingFunctions.q = [];
      }
      const n = Math.random().toString(36).substring(7);
      const s = document.getElementsByTagName("script")[0];
      const o = document.createElement("script");
      o.type = "text/javascript";
      o.async = true;
      o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
      o.onload = function() {
        window.trackingFunctions.onLoad({
          appId: "66f13f3e0fc97602d2975952"
        });
      };
      s.parentNode.insertBefore(o, s);
    })(window.trackingFunctions);
  `}
        </Script>
        <Script
          src="https://embed.chatnode.ai/b53dc53a-100e-4a2c-b84b-752e59191d10/popup.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://assets.apollo.io/js/meetings/meetings-widget.js"
          strategy="afterInteractive"
        />
        <Script
          id="apollo-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      document.addEventListener('DOMContentLoaded', function() {
        console.log("Apollo init triggered");
        if (window.ApolloMeetings) {
          console.log("ApolloMeetings found");
          window.ApolloMeetings.initWidget({
            appId: "673c88b7764f4c03ece030d2",
            schedulingLink: "hdg-cun-lxk",
          });
        } else {
          console.warn("ApolloMeetings is undefined");
        }
      });
    `,
          }}
        />
        <Script
          id="apollo-inbound"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        (function initApolloInbound() {
          var nocache = Math.random().toString(36).substring(7);
          var script = document.createElement('script');
          script.src = 'https://assets.apollo.io/js/apollo-inbound.js?nocache=' + nocache;
          script.defer = true;
          script.onload = function() {
            window.ApolloInbound.formEnrichment.init({
              appId: '68d3c217f507050011948cc3'
            });
          };
          document.head.appendChild(script);
        })();
      `,
          }}
        />
        {/* <Script src="https://astra.wati.io/widget/astra.js" id="5b492eea-319e-4eaf-814f-4a801bb5b873" mode="ai_bar" defer></Script> */}
        <Script src="https://thynkbot.thynkwise.co.in/embed.js" data-bot-id="4a7c35f2-d29f-4ae5-bf9b-c6e5f7bd8f75" mode="ai_bar" defer></Script>
        {/* <HeyGenAutoLoad /> */}
      </body>
    </html>
  );
}
