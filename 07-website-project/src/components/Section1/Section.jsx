import Navbar from "./Navbar";
import PageContent from "./PageContent";
function Section(props)
{
    return(
        <>
          <div className="bg-pink-400 h-screen w-full">
            <Navbar/>
            <PageContent  users={props.users}/>
          </div>
        </>
    );
}

export default Section;