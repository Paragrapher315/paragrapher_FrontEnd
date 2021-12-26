import React from "react";
import Community from "../CreateCommunity/Community";
class MyCommunityList extends React.Component {
  render() {
    return (
      <div className="row">
        {Array.isArray(this.props.items) &&
          this.props.items.map((item) => (
            <div className="col-12 col-md-6 col-xl-4">
              <Community
                key={item.c_id}
                name={item.community.name}
                bio={item.community.description}
                numberOfmembers={item.community.member_count + " عضو"}
                img={item.community.avatar}
                date={
                  ChangeToPersian(item.community.jalali_date.split(" ")[2]) +
                  " " +
                  item.community.jalali_date.split(" ")[3]
                }
                badge="مدیر"
              />
            </div>
          ))}
      </div>
    );
  }
}
export function ChangeToPersian(month) {
  if (month == "Farvardin" || month == "Ordibehesht" || month == "Khordad") {
    return "بهار";
  }
  if (month == "Tir" || month == "Mordad" || month == "Shagrivar") {
    return "تابستان";
  }
  if (month == "Mehr" || month == "Aban" || month == "Azar") {
    return "پاییز";
  } else {
    return "زمستان";
  }
}
export default MyCommunityList;
