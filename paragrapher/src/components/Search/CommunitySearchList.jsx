import React from "react";
import Community from "../CreateCommunity/Community";
class CommunitySearchList extends React.Component{
    
    render(){
        return(
            <div className="row">
                {this.props.items.map(item => (
                    <div className="col-12 col-md-6 col-xl-3">
                        <Community key={item.c_id} name={item.name} bio={item.description} numberOfmembers={item.member_count + " عضو"} img={item.avatar} date={ChangeToPersian(item.jalali_date.split(" ")[2]) +" "+item.jalali_date.split(" ")[3]} />
                    </div>
                
                ))}
            </div>
           
            
        );
    }
}
function ChangeToPersian(month){
    if (month=="Farvardin" || month=="Ordibehesht" || month=="Khordad") {
        return("بهار")
    }
    if (month=="Tir" || month=="Mordad" || month=="Shagrivar") {
        return("تابستان")
    }
    if (month=="Mehr" || month=="Aban" || month=="Azar") {
        return("پاییز")
    }
    else{
        return("زمستان")
    }

}
export default CommunitySearchList;