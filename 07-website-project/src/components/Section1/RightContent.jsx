import RightCard from "./RightCard";

function RightContent({ users }) {
  return (
    <div id="right" className="p-6 h-[80vh] flex flex-nowrap rounded-3xl overflow-x-auto w-2/3 gap-3">
      {users.map((usr) => (
        <RightCard
          key={usr.id}
          id={usr.id}
          img={usr.img}
          intro={usr.intro}
          tag={usr.tag}
        />
      ))}
    </div>
  );
}

export default RightContent;