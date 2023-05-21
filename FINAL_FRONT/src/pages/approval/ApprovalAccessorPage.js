import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ApprovalCSS from './Approval.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { callAccessPutAPI } from '../../apis/AppLineAPICalls';


function ApprovalAccessorPage () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { access } = useSelector(state => state.applineReducer);
    const params = useParams();
    const appCode = params.appCode;

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}년 ${month}월 ${day}일`;
    }

    useEffect(
        () => {
            dispatch(callAccessPutAPI({}));
        },
        []
    );



    return (
            <div className={ApprovalCSS}>
                <div className={ApprovalCSS.square}></div>
                <div className={ApprovalCSS.appContentDiv}>
                    전자결재 문서 승인/반려 페이지
                </div>
                <div className={ApprovalCSS.applineInfoBoxDiv}>
                    <table>
                            <thead>
                                <tr>
                                    <th>기안자</th>
                                    <th>제1 결재선</th>
                                    <th>제2 결재선</th>
                                    <th>최종 결재선</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>김길동{/* {appDetail && appDetail.member.memberName} */}</td>
                                    <td>홍길동{/* {appLine && appLine.member.memberName} */}</td>
                                    <td>홍길동{/* {appLine && appLine.member.memberName} */}</td>
                                    <td>홍길동{/* {appLine && appLine.member.memberName} */}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>요청{/* {appDetail && appDetail.member.memberName}*/}</td>
                                    <td>승인{/* {appLine && appLine.appStatus} */}</td>
                                    <td>승인{/* {appLine && appLine.appStatus} */}</td>
                                    <td>반려{/* {appLine && appLine.appStatus} */}</td>
                                </tr>

                            </tfoot>
                    </table>
                </div>
                <div className={ApprovalCSS.appAccessorDiv}>
                    <table className={ApprovalCSS.approvalAccessorTable}>
                        <tbody>
                            <tr>
                                <th>문서번호</th>
                                <td>{access  && access.appCode}</td>
                                <th>부서</th>
                                <td>부서명{/* {appDetail && appDetail.member.department.deptName} */}</td>
                            </tr>
                            <tr>
                                <th>구분</th>
                                <td>{access && access.appCode}</td>
                                <th>상태</th>
                                <td>{access && access.appStatus}</td>
                                <th>등록일</th>
                                <td>{formatDate(access && access.appTime)}</td>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <th>제목</th>
                                <td>{access && access.appOrder}</td>
                            </tr>
                            <tr>
                                <th>내용</th>
                                <td colSpan={3} rowSpan={3}>
                                    {access && access.appOrder}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
            
}

export default ApprovalAccessorPage;