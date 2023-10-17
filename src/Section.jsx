

export default function Section() {
    return (
        <div className="bg-light-grayish-blue py-16 -mt-32 lg:-mt-60 lg:px-40">
            <SectionMainHeading/>
            <SectionFeatureList/>
        </div>
    )
}

const SectionMainHeading = () => {
    return (
       <div > 
        <h2 className="text-dark-blue text-[1.625rem] text-center mx-[2em] mb-7 lg:text-left lg:ml-9">Why choose Easybank?</h2>
        <p className="text-grayish-blue text-sm font-normal text-center mx-9 max-w-lg mb-16 lg:text-left">We leverage Open Banking to turn your bank account into your financial hub. Control your finance like never before.</p>
       </div>
    )
}

const SectionFeatureList = () => {
    return (
        <div className="lg:flex">
        <SectionFeature
        featureIcon="/images/icon-online.svg"
        featureHeading="Online Banking"
        featurePara = "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        />
        <SectionFeature
        featureIcon="/images/icon-budgeting.svg"
        featureHeading="Simple Budgeting"
        featurePara = "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits."
        />
        <SectionFeature
        featureIcon="/images/icon-onboarding.svg"
        featureHeading="Fast Onboarding"
        featurePara="We don't do branches. Open your account in minutes online and start taking control of your finances righy away."
        />
        <SectionFeature
      
        featureIcon="/images/icon-api.svg"
        featureHeading="Open API"
        featurePara="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier"
        />

        </div>
    )
}

const SectionFeature = ({featureIcon, featureHeading, featurePara}) => {
    const altText = `${featureHeading} feature icon image`
    return (
        <div className="flex flex-col items-center text-center mx-7 lg:items-start lg:text-left">
            <img className="mb-7" src={featureIcon} alt={altText}/>
            <h2 className="text-dark-blue text-[18px] mb-6 ">{featureHeading}</h2>
            <p className="text-grayish-blue text-sm font-light mb-8">{featurePara}</p>
            
        </div>
    )
}