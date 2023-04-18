import React from "react";
import Community from "../CreateCommunity/Community";
import Paragraph from "../Paragraph/Paragraph"
import { getUser } from "../../Utils/Common";
const MyParagraphList = (props) => {


    return (
        <div className="row">
            {props.items.map(item => (
                <div className="col-12">
                    {/* <Paragraph
                        author={item.author} user={item.user_name} isPotd="ture" date={item.date} book={item.ref_book}
                        /> */}
                    <Paragraph
                        user={item.user_name}
                        isPotd={false}
                        date={item.date}
                        avatar="ا"
                        canAction={true}
                        text={item.p_text}
                        author={item.author}
                        tags={item.tags.split(",")}
                        p_id={item.id}
                        book={item.ref_book}
                        isMine={true}
                        communityName={item.community_name}
                    />
                </div>

            ))}
        </div>


    );

}
function ChangeToPersian(month) {
    if (month == "Farvardin" || month == "Ordibehesht" || month == "Khordad") {
        return ("بهار")
    }
    if (month == "Tir" || month == "Mordad" || month == "Shagrivar") {
        return ("تابستان")
    }
    if (month == "Mehr" || month == "Aban" || month == "Azar") {
        return ("پاییز")
    }
    else {
        return ("زمستان")
    }

}
export default MyParagraphList;