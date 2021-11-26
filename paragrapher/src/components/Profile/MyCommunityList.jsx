import React from "react";
import Community from "../CreateCommunity/Community";
class MyCommunityList extends React.Component{
    
    render(){
        return(
            <div className="row">
                {this.props.items.map(item => (
                    <div className="col-12 col-md-6 col-lg-4">
                        <Community key={item.c_id} name={item.community.name} bio={item.community.description} numberOfmembers={item.community.member_count + " عضو"} img={item.community.avatar} date={item.community.jalali_date.split(" ")[2]+" "+item.community.jalali_date.split(" ")[3]} />
                    </div>
                
                ))}
            </div>
           
            
        );
    }
}
export default MyCommunityList;