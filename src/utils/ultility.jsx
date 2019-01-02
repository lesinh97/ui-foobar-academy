import axios from 'axios';
/**
 * 
 * @param endpoint la path tuong doi den url
 * vd url: 'https://api-english-academy.herokuapp.com/courses' thi endpoint la 'courses'
 * @param method la HTTP request method, default la GET
 * @param body la du lieu cua object can post hoac put, neu la get thi de trong
 * @example apiCall('courses/1', 'POST', {id: 1,...}).then(res => console.log(res))
 */
export default function apiCall(endpoint, method = 'GET', body){
	return axios({
        method: method,
        url: `https://api-english-academy.herokuapp.com/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}
