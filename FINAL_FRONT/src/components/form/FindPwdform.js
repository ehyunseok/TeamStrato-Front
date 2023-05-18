import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginFormCss from "./Loginform.css";
import { useNavigate, useParams } from "react-router-dom";
import { callMailAPI } from "../../apis/MailAPICalls";

function FindPwdForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickFindPwdHandler = () => {
        dispatch(callMailAPI(form));
    }

    // 폼 데이터를 한 번에 변경 및 state 저장
    const[form, setForm] = useState({
        memberId: '',
        residentNo: ''
    });


    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    /* 버튼 클릭 이벤트 */
    const onClickSendPwdHandler = () => {
        dispatch(callMailAPI(form));
    }

    const onClickHandler = () => {
        navigate('/update');
    }

    const onClickGoBackHandler = () => {
        navigate('/login');
    }

    return (
        <>
            
            <input
                type="text"
                name="memberId"
                className="memberId"
                placeholder="Id(e-mail)"
                autoComplete='off'
                onChange={ onChangeHandler }
            /><br></br>
            <input
                type="text"
                name="residentNo"
                className="residentNo"
                placeholder="주민번호(-포함하여 입력)"
                autoComplete='off'
                onChange={ onChangeHandler }
            /><br></br>
            <br></br>
            <button className="findIdFormBtn"
                onClick={ onClickSendPwdHandler } 
            >
                임시 비밀번호 발송
            </button>
            
            <button className="findIdFormBtn"
                onClick={ onClickHandler } 
            >
                비밀번호 변경하기
            </button>
            

            <button className="goBackBtn"
                onClick={ onClickGoBackHandler } 
            >
                뒤로가기
            </button>
        </>

            );
}
export default FindPwdForm;
