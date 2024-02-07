import React from "react";

function Footer() {
  return (
    <div className="flex justify-center p-4 bg-[#f3f4f6] text-textGrey border border-t border-t-[#e5e7eb] mt-[5vh]">
      <div className="px-[5vw]">
        <p className="text-center text-[0.7rem] max-w-[1000px]">
          This website is not affiliated with the Affordable Cares Act program
          or any other government entity. The information provided on this
          website is for informational purposes only. It is not intended to be,
          nor does it constitute any kind of financial advice. Please seek
          advice from a qualified professional prior to making any financial
          decisions based on the information provided. This website acts as an
          independent digital media & advertising publisher. This webpage is
          formatted as an advertorial. An advertorial is an advertisement that
          is written in an editorial news format. PLEASE BE AWARE THAT THIS IS
          AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER
          PROTECTION UPDATE. This website MAY RECEIVE PAID COMPENSATION FOR
          CLICKS OR SALES PRODUCED FROM THE CONTENT FOUND ON THIS WEBPAGE. This
          compensation may affect which companies are displayed, the placement
          of advertisements, and their order of appearance. Any information,
          discounts, or price quotations listed may not be applicable in your
          location or if certain requirements are not met. Additionally, our
          advertisers may have additional qualification requirements.
          <br />
          <br />
          DISCLOSURE: The average monthly advanced premium tax credit across all
          enrollees was $527/month in 2023, with an average monthly premium of
          $123.69. Results vary based on a number of factors, including age,
          income, family size, health history, cost of available insurance
          coverage, where you live, and more. You are not eligible for the
          premium tax credit for coverage purchased outside the marketplace.
          <br />
          <br />
          Our goal is to provide exceptional service. One of our agents may
          reach out to you to discuss your order, ask for feedback, and/or see
          if you need any assistance with your products, services, or plans, at
          the phone number you provided regardless of your do-not-call list
          status. You may opt-out of further contact at any time by simply
          telling our customer service team that you would no longer like to be
          contacted. In the event that our team is unable to reach you by phone,
          they may send you a text message letting you know that we called. Both
          our text messages and phone calls may be sent or connected utilizing
          automated software. Carrier charges may apply. You may opt-out of any
          future contact via text message by replying anytime with "STOP".
        </p>
        <br />
        <br />
        <p className="text-textBlue flex gap-2 text-center justify-center text-[0.8rem]">
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://achi.net/newsroom/house-passes-bill-extending-aca-subsidies-through-2025-ensuring-continued-affordable-healthcare-insurance-for-millions/?"
            rel="noreferrer"
          >
            ACHI 2022{" "}
          </a>
          |
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.kff.org/faqs/faqs-health-insurance-marketplace-and-the-aca/how-do-the-premium-tax-credits-work/"
            rel="noreferrer"
          >
            KFF 2022{" "}
          </a>{" "}
          |
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.irs.gov/affordable-care-act/individuals-and-families/the-premium-tax-credit-the-basics"
            rel="noreferrer"
          >
            IRS 2022{" "}
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.healthreformbeyondthebasics.org/premium-tax-credits-answers-to-frequently-asked-questions/"
            rel="noreferrer"
          >
            Health Reform Basics 2022
          </a>{" "}
          |
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://cms.gov"
            rel="noreferrer"
          >
            CMS.gov
          </a>
        </p>
        <p className="text-textBlue flex gap-2 text-center justify-center text-[0.8rem] mt-2">
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://chat.healthbenefitsnow.org/privacy_policy/index.html"
            rel="noreferrer"
          >
            Privacy Policy
          </a>{" "}
          |
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://chat.healthbenefitsnow.org/terms_of_service/index.html"
            rel="noreferrer"
          >
            Terms and Conditions
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
