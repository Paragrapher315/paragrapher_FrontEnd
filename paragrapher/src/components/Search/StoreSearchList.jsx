import React from "react";

import Book1 from "../Shop/Book1"
class StoreSearchList extends React.Component {
  render() {
    return (
        <div className="row">
                {this.props.items.map(item => (
                    <div className="col-12 col-md-6 col-xl-4">
                        <Book1 
                            id = {item.id}
                            name=  {item.name}
                            genre = {item.genre}
                            author = {item.author}
                            price = {item.price}
                            modified_time = {item.modified_time}
                            reserved_time = {item.reserved_time}
                            description = {item.description}
                            seller_id = {item.seller_id}
                            community_id = {item.community_id}
                            community_name = {item.community_name}
                            image = {item.image}
                        />
                    </div>
                
                ))}
            </div>
     
    );
  }
}
export default StoreSearchList;


