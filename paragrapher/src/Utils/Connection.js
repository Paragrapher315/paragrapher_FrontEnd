import axios from "axios";
import references from '../assets/References.json';
import { setUserSession, cookie, getUser } from "./Common";
import Cookies from "universal-cookie";
import {makeURL} from './Common';

export const Logout = async () => {
    cookie.remove("x-access-token");
    // send some data to backend to remove cookie
    await axios 
        .post(makeURL(references.url_logout), {cookie: cookie})
        .then((response) => {
            cookie.remove("x-access-token");
        })
        .catch((error) => {
            console.log("error in logout");
        })
}

export const Register = async (email, username, password) => {
    let message = ""
    await axios
        .post(makeURL(references.url_register), {
            email: email, 
            username: username, 
            password: password,
        })
        .then((response) => {
            // register success
            setUserSession(response.data.token, response.data.user);
            message = "successful register";
        })
        .catch((error) => {
            // register failed
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}
export const Login = async(username, password) => {
    let message = "";
    if(cookie.get("x-access-token") !== undefined) {
        message = "already logged in"
    } else {
    await axios 
        .post(makeURL(references.url_login), {
            username: username, 
            password: password
        })
        .then((response) => {
            // login success
            setUserSession(response.data.token, username);
            var today = new Date();
            var expirationDate = new Date();
            expirationDate.setDate(today.getDate() + 1)
            cookie.set("x-access-token", response.data.token, { path: "/", expires: expirationDate }); // add expire 
            message = "successful login";
        })
        .catch((error) => {
            // login faild
            if(error.response.status === 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    }
    return message;
}
export const EditBio = async (bio) => {
    let message = ""
    await axios
        .post(makeURL(references.url_change_bio), {
            bio:bio,
        })
        .then((response) => {
        
            console.log(response)
        })
        .catch((error) => {
            
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}
export const EditDob = async (dob) => {
    let message = ""
    await axios
        .post(makeURL(references.url_change_dob), {
            dob:dob,
        })
        .then((response) => {
        
            console.log(response)
        })
        .catch((error) => {
            
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}

export const EditName = async (profile_name) => {
    let message = ""
    await axios
        .post(makeURL(references.url_change_name), {
            profile_name:profile_name,
        })
        .then((response) => {
        
            console.log(response)
        })
        .catch((error) => {
            
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}

export const CreateParagraph = async (communityID,author,book,paragraph,tags) => {
    let message = ""
    await axios
        .post(makeURL(references.url_create_paragraph + '/' +  communityID + '/paragraph'), {
            author:author,
            ref:book,
            text:paragraph,
            tags:tags
        })
        .then((response) => {
            console.log(response);
            window.location.replace("/community/" + communityID );
        })
        .catch((error) => {
            
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}



// export const CreateComment = async (communityID,paragraph,p_id) => {
//     let message = ""
//     await axios
//         .post(makeURL(references.url_create_paragraph + '/' +  communityID + '/paragraph/reply'), {
//             text:paragraph,
//             p_id:p_id,
//         })
//         .then((response) => {
//             console.log(response);
//             window.location.replace("/community/" + communityID );
//         })
//         .catch((error) => {
            
//             console.log(error, error.response.data);
//             if(error.response.status == 401) {
//                 message = error.response.data.message;
//             } else {
//                 message = error.response.data;
//             }
//         })
//     return message;
// }


export const EditParagraph = async (communityName,author,book,paragraph,tags,p_id) => {
    let message = ""
    await axios
        .put(makeURL(references.url_create_paragraph +'/'+ communityName + '/paragraph'), {
            author:author,
            ref:book,
            text:paragraph,
            tags:tags,
            p_id:p_id
        })
        .then((response) => {
            console.log(response);
            window.location.replace("/community/" + communityName );
        })
        .catch((error) => {
            
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}

export const DeleteParagraph = async (communityID,p_id) => {
    let message = "";
    await axios
        .delete(makeURL(references.url_create_paragraph + '/' + communityID + '/paragraph'), {data : {
            p_id: p_id
        }})
        .then((response) => {
            console.log(response);
            window.location.replace("/community/" + communityID );
        })
        .catch((error) => {
            
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}

export const GetParagraph = async (p_id) => {
    let message = "";
    await axios
        .get(makeURL(references.url_create_paragraph + 'arda/paragraph'), {
            p_id:p_id
        })
        .then((response) => {
            console.log(response);  
            message=response;
        })
        .catch((error) => {
            
            console.log(error, error.response.data);
            if(error.response.status == 401) {
                message = error.response.data.message;
            } else {
                message = error.response.data;
            }
        })
    return message;
}




export const GetCommunities = async () => {
    let message="";
    await axios
    .get(makeURL("/community/show"))
    .then((response)=>{
        message=response;
    })
    .catch((error) => {
            
        console.log(error, error.response.data);
        if(error.response.status == 401) {
            message = error.response.data.message;
        } else {
            message = error.response.data;
        }
    })
    
    return message;

}

export const GetParagraphs = async(d,start_off,end_off) => {
    let message = [];
    await axios
      .put(
        makeURL(references.search_pod) +
          d.getFullYear() +
          "-" +
          (d.getMonth()+1) +
          "-" +
          d.getDate(),
        {
          start_off: start_off,
          end_off: end_off,
        }
      )
      .then((response) => {
        message=response;
      })
      .catch((error) => {
        console.log(error, error.response.data);
        if (error.response.status == 401) {
          message = error.response.data.message;
        } else {
          message = error.response.data;
        }
      });
    
    return message;
}

export const ParagraphArray = async(d,start_off,end_off) => {
    let answer = await GetParagraphs(d,start_off,end_off);
    let message = [];
    await answer.data.res.forEach((element) => {
        message.push({
          id: element.paragraph.id,
          text: element.paragraph.p_text,
          book: element.paragraph.ref_book,
          communityName: element.paragraph.community_name,
          tags: element.paragraph.tags,
          author: element.paragraph.author,
          date: element.paragraph.date,
          user_id: element.paragraph.user_id,
          username : element.user.username,
          userAvatar : element.user.avatar
        });
      });
    return message;
}

export const isLiked = async (communityName, p_id) => {
    let message=""
    await axios
      .put(
        makeURL(
          references.url_create_paragraph +
            "/" +
            communityName +
            "/paragraph/impression"
        ),
        {
            p_id:p_id
        }
      )
      .then((response) => {
        message=response
      })
      .catch((error) => {
        message=error
        window.alert(error);
      });
      return message
  };


  
export const Like = async (communityName, p_id) => {
    let message=""
    await axios
      .post(
        makeURL(
          references.url_create_paragraph +
            "/" +
            communityName +
            "/paragraph/impression"
        ),
        {
            p_id:p_id
        }
      )
      .then((response) => {
        message=response
      })
      .catch((error) => {
        message=error
        window.alert(error);
      });
      return message
  };
export const JoinCommunity = async (communityName) => {
    const address = "/community/" + communityName + "/members";
    const un = getUser();
    await axios 
        .post(makeURL(address), {
            username: un
        })
        .then((response) => {
            console.log(response)
            return true;
        })
        .catch((error) => {
            console.log(error)
            return false;
        })
    
}

export const CheckCommunityJoined = async (communityName) => {
    const address = "/community/" + communityName + "/members";
    let message = false;
    await axios
        .patch(makeURL(address))
        .then((response) => {
            console.log(response)
            message = true;
        })
        .catch((error) => {
            console.log(error)
            message = false;
        })
    return message
}

export const CheckCommunitySubscribed = async (communityName) => {
    const address = "/community/" + communityName + "/members";
    let message = false;
    await axios
        .patch(makeURL(address), {})
        .then((response) => {
            console.log(response)
            message = response.data.res == true
        })
        .catch((error) => {
            console.log(error)
            message = false
        })
    return message
}

export const EnableNotification = async (communityName) => {
    const address = "/community/" + communityName + "/members";
    let message = false;
    await axios
        .put(makeURL(address), {

        })
        .then((response) => {
            console.log(response)
            message = true;
        })
        .catch((error) => {
            console.log(error)
            message = false;
        })
    return message
}
export const LeaveCommunity = async (communityName) => {
    const address = "/community/" + communityName + "/leave";
    let message = false;
    await axios
        .delete(makeURL(address))
        .then((response) => {
            console.log(response)
            message = true;
        })
        .catch((error) => {
            console.log(error)
            message = false
        })
    return message
    
}
export const GetCommunityInfo = async (communityName) => {
    const address = "/community/" + communityName;
    let res;
    await axios
        .get(makeURL(address))
        .then((response) => {
            console.log("This is ", response)
            res = response;
        })
        .catch((error) => {
            console.log("error is ", error)
            res = error;
        })
    return res;   
}
export const BestCommunityParagraphs = async (communityName) => {
    const address = "/community/" + communityName;
    let res;
    await axios
        .patch(makeURL(address), {})
        .then((response) => {
            console.log("Best Community Paragraph", response);
            res = response;
        })
        .catch((error) => {
            console.log("Best Community Paragraph err", error.response);
            res = error;
        })
    return res;
}
export const GetCommunityParagraphs = async (communityName, start, end) => {
    const address = "/community/" + communityName;
    let res;
    await axios
        .put(makeURL(address), {
            start_off: start, 
            end_off: end
        })
        .then((response) => {
            console.log("Community Paragraph", response);
            res = response;
        })
        .catch((error) => {
            console.log("Community Paragraph err", error);
            res = error;
        })
    return res;

}
export const GetBestCommunities = async (count) => {
    const address = "/community/best";
    let res;
    await axios
        .get(makeURL(address))
        .then((response) => {
            console.log("Best Communities Response", response);
            res = response.data;
        })
        .catch((error) => {
            console.log("Best Communities Error", error);
        })
    while(res.length > count) {
        res.pop()
    }
    return res;
}
export const AddBookToShop = async (communityName, bookName, bookGenre, bookAuthor, bookDescription, bookPrice) => {
    const address = "/community/" + communityName + "/store/book"
    let bookID = null
    await axios
        .post(makeURL(address), {
            name: bookName, 
            genre: bookGenre, 
            author: bookAuthor, 
            description: bookDescription, 
            price: bookPrice
        })
        .then((response) => {
            console.log(response)
            bookID = response.data.res.id
        })
        .catch((error) => {
            console.log(error)
        })
    return bookID
}
export const AddBookPic = async (communityName, bookID, data) => {
    const address = "/community/" + communityName + "/store/book/picture?book_id=" + bookID;
    await axios
        .post(makeURL(address), data)
        .then((res) => {console.log("image is done" + res)})
        .catch((error) => {console.log(error)})
}
