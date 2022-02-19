import axios from "axios";

const instance = axios.create({
	// baseURL: "http://binscot.shop", // 하빈님
	// baseURL: "http://dean900404.shop/", // 규진님
	baseURL: "http://3.39.0.192", // 현진님

        headers : {
                //"content-type" : "application/json;charset-UTF-8",
                // "content-type" : "multipart/form-data",
                // "Content-Type": "application/x-www-form-urlencoded",
                accept : "application/json,",
        }
});
// instance.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded"; 

// instance.defaults.headers.common["X-AUTH-TOKEN"] = USER_TOKEN; 
export default instance;