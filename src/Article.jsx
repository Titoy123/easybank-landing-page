export default function Article() {
    return (
        <div className="bg-very-light-gray pb-20">
            <ArticleHeader/>
            <div className="lg:mx-40 lg:flex overflow-hidden">
            <Card
            articleImgSrc="/images/image-currency.jpg"
            authorName="Claire Robinson"
            articleTitle="Receive money in any currency with no fees"
            articlePara="The world is getting smaller and we're becoming more. So why should you be forced to only receive money in a single..."
           />
            <Card
            articleImgSrc="/images/image-restaurant.jpg"
            authorName="Wilson Hutton"
            articleTitle="Treat yourself without worrying about money"
            articlePara="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
           />
           <Card
            articleImgSrc="/images/image-plane.jpg"
            authorName="Wilson Hutton"
            articleTitle="Take your Easybank card wherever you go"
            articlePara="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
           />
           <Card
            articleImgSrc="/images/image-confetti.jpg"
            authorName="Claire Robinson"
            articleTitle="Our invite-only Beta accounts are now live"
            articlePara="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
           />
           </div>
        </div>
    )
}

const ArticleHeader = () => <h2 className="text-center text-dark-blue font-normal text-2xl pt-20  mb-10 lg:text-start lg:text-3xl  lg:ml-[6.1em]  ">Latest Articles</h2>

const CardContainer = ({children}) => <div className="bg-white mx-6 mb-6 rounded-md overflow-hidden">{children}</div>


const Card = ({articleImgSrc, authorName, articleTitle, articlePara}) => {
    return (
        <CardContainer>
            <img src={articleImgSrc} className="object-cover"/>
            <div className="px-6 pb-11">
            <p className=" text-grayish-blue text-[0.5rem] font-light mt-7 mb-2">By {authorName}</p>
            <h3 className="text-dark-blue font-light text-sm mb-4 hover:text-lime-green">{articleTitle}</h3>
            <p className="text-grayish-blue font-light text-xs ">{articlePara}</p>
            </div>
        </CardContainer>
    )
}