import React from "react";
import Paragraph from "../Paragraph/Paragraph";
class AuthorSearchList extends React.Component{
    
    render(){
        return(
            <div className="row">
                {this.props.items.map(item => (
                    
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
                isMine={false}
                communityName={item.community_name}
                />
                    
                    
                
                ))}
            </div>
           
            
        );
    }
}
export default AuthorSearchList;