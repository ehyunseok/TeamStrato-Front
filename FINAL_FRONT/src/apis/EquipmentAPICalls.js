import { getEquipment, getEquipments , getCategory , postEquipment , getModify, getCategorys , putModify, postApproval} from "../modules/EquipmentModule";

const SERVER_IP = `${process.env.REACT_APP_RESTAPI_SERVER_IP}`;
const SERVER_PORT = `${process.env.REACT_APP_RESTAPI_SERVER_PORT}`;
const PRE_URL = `http://${SERVER_IP}:${SERVER_PORT}/skylift/equipment`;

export const callEquipmentListAPI = ({ currentPage = 1 }) =>
{
    const requestURL = `${PRE_URL}/findCategory?page=${currentPage}`;

    return async (dispatch,getState) => {
        const result = await fetch(requestURL).then(resp => resp.json());
        
        if(result.status === 200)
        {
            console.log("[callEquipmentListAPI] result : ", result);
            dispatch(getEquipments(result));
        }

    };
}


export const callEquipmentDetailAPI = ({ categoryCode , currentPage = 1  }) =>
{
    const requestURL = `${PRE_URL}/detail/${categoryCode}?page=${currentPage}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL).then(resp => resp.json());

        if(result.status === 200)
        {
            console.log("[callEquipmentDetailAPI] result : ", result);
            dispatch(getEquipment(result));
        }
    }
}

export const callEquipmentCategory = () =>
{
    const requestURL = `${PRE_URL}/regist`;

    return async (dispatch,getState) =>{
        const result = await fetch(requestURL).then(resp => resp.json());

        if(result.status === 200)
        {
            console.log("[callEquipmentCategory] result : " , result);
            dispatch(getCategory(result));
        }
    }
}

export const callEquipmentRegist = (formData) =>
{
    console.log("forData : " , formData);
    const requestURL = `${PRE_URL}/regist`;

    console.log(requestURL);
    return async (dispatch , getState) => {
        const result = await fetch(requestURL,
            {
                method : 'POST',
                body : formData
            }).then(resp => resp.json());

            if(result.status === 200)
            {
                dispatch(postEquipment(result));
            }
    }
}

export const callAllEquiments = ({currentPage = 1}) =>
{
    const requestURL = `${PRE_URL}/modify?page=${currentPage}`;

    return async (dispatch,getState) =>{
        const result = await fetch(requestURL).then(resp => resp.json());

        if(result.status === 200)
        {
            console.log("[callAllEquiments] result : " , result);
            dispatch(getModify(result));
        }
    }

} 

export const callCategory = (categoryCode) =>
{
    const requestURL = `${PRE_URL}/modify/${categoryCode}`;

    return async(dispatch,getState) => {
        const result = await fetch(requestURL).then(resp => resp.json());

        if(result.status === 200)
        {
            console.log("[callCategory] result : " , result);
            dispatch(getCategorys(result));
        }
    }
}

export const callModifyEquipment = (modifyEquipment) =>
{
    const requestURL = `${PRE_URL}/modify`;

    return async(dispatch,getState) =>
    {
        const result = await fetch(requestURL,{
            method : 'PUT',
            body : modifyEquipment
        }).then(resp => resp.json());

        if(result.status === 200)
        {
            dispatch(putModify(result));
        }
    }
}

export const callApprovalEquipment = (approvalFormData) =>
{
    const requestURL = `${PRE_URL}/statusUpdate`;

    return async(dispatch,getState) =>
    {
        const result = await fetch(requestURL,{
            method : 'POST',
            body : approvalFormData
        }).then(resp => resp.json());

        if(result.status === 200)
        {
            dispatch(postApproval(result));
        }
    }
}