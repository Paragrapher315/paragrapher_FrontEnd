import axios from "axios";
import references from '../assets/References.json';
import { setUserSession, cookie } from "./Common";
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
    let message = ""
    await axios
        .delete(makeURL(references.url_create_paragraph + communityID + '/paragraph'), {
            p_id:p_id
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
          date: element.date,
          user_id: element.paragraph.user_id,
          username : element.user.username,
          userAvatar : element.user.avatar
        });
      });
    return message;
}
