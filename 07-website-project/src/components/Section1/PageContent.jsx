import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function PageContent({ users }) {
  return (
    <div className="pt-6 item-center h-[90vh] px-18 flex pb-16 gap-10">
      <LeftContent />
      <RightContent users={users} />
    </div>
  );
}

export default PageContent;