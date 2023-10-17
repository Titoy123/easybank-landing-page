
export default function Main() {
    return (
        <div className="bg-very-light-gray mb-24 justify-between lg:flex lg:flex-row-reverse lg:mb-0 overflow-hidden ">
            <HeroMain/>
            <MainHeader/>
        </div>
    );
}

const HeroMain = () => {
    return (
    <div className="bg-[url(/images/bg-intro-mobile.svg)] bg-no-repeat md:bg-[url(/images/bg-intro-desktop.svg)] -translate-y-16  md:-translate-y-[15rem]">
       {/* {window.innerWidth <= 768 ? (
        <img src="/images/bg-intro-mobile.svg" className="absolute" />
      ) : (
        <img src="/images/bg-intro-desktop.svg" className="absolute bg-auto" />
      )} */}
        <img src="/images/image-mockups.png" alt="Hero Main" className="overflow-hidden -translate-y-[4.4rem] lg:translate-y-32"/> 
    </div>
    )
}

const MainHeader = () => {
    return (
       <div className="flex flex-col text-center gap-8 pb-32 px-8 max-w-lg lg:text-left lg:mx-[8em] overflow-hidden">
         <h1 className="text-3xl mx-3 font-normal text-dark-blue lg:text-[2.7rem] lg:leading-[3rem]  lg:mt-[180px]">Next generation digital banking</h1>
        <p className="text-sm font-light text-grayish-blue">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more. </p>
        <ButtonInvite className="lg:-ml-2"/>
       </div>
    )
}

export function ButtonInvite({ className }) {
    return (
      <button
        className={`font-bold text-white text-sm rounded-[100px] mx-auto px-[1.5em] py-[.9375em] max-w-[10em] bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-60 ${
          className || ""
        }`}
      >
        Request Invite
      </button>
    );
  }
  