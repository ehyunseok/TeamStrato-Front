import { getDepts, getJobDepts, getJobdepts, getJobs, getMember,getMembers, getMembersId, getMembersName, postMemberRg } from "../modules/MemberModule";

const SERVER_IP = `${process.env.REACT_APP_RESTAPI_SERVER_IP}`;
const SERVER_PORT = `${process.env.REACT_APP_RESTAPI_SERVER_PORT}`;
const PRE_URL = `http://${SERVER_IP}:${SERVER_PORT}/skylift/member`;

export const callMemberListAPI = ({ currentPage = 1}) => {

    const reqeustURL = `${PRE_URL}/members?page=${currentPage}`;

    return async (dispatch, getState) => {

        const result = await fetch(reqeustURL).then(response => response.json());

        if(result.status === 200) {
            console.log('result', result);
            dispatch(getMembers(result));
        }

    }
}

export const callMemberDetailAPI = ({memberCode}) => {

    const reqeustURL = `${PRE_URL}/members/${memberCode}`;

    return async (dispatch, getState) => {

        const result = await fetch(reqeustURL).then(res => res.json());

        if(result.status === 200) {
            dispatch(getMember(result));
        }
    }

}

export const callMemberRegistAPI = (formData) => {

    const requestURL = `${PRE_URL}/members`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : formData
        }).then(response => response.json());

        if(result.status === 200) {
            console.log('[ProductAPICalls] : callProductRegistAPI result : ', result);
            dispatch(postMemberRg(result));
        }
    }
}

export const calljobDeptListAPI = () => {

    const reqeustURL = `${PRE_URL}/jobDeptList`;

    return async (dispatch, getState) => {

        const result = await fetch(reqeustURL).then(response => response.json());

        console.log(result);

        if(result.status === 200) {
            console.log('calljobDeptListAPI', result);
            dispatch(getJobdepts(result));
        }

    }
}

