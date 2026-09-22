import HeroText from "./HeroText";
import ArrowArea from "./ArrowArea";

function LeftContent() {
    return (
        <div className=" h-[80vh] w-1/4  flex flex-col justify-between rounded-4xl bg-white ">    
       <HeroText/>
       <ArrowArea/>  
        </div>
    );
}

export default LeftContent;