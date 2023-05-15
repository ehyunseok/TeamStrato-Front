import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callEquipmentListAPI } from "../../apis/EquipmentAPICalls";
import Pageingbar from "../../components/pagingbar/Pageingbar";
import EquipmentCSS from './EquipmentCSS.css';




function Equipment()
{
    const dispatch = useDispatch();
    const equipments  = useSelector(state => state.equipmentReducer);
    const [currentPage , setCurrentPage] = useState(1);
    const equimentList = equipments.data;
    const pagInfo = equipments.pageInfo;

    useEffect(
        () =>
        {
            dispatch(callEquipmentListAPI({currentPage}));
        },
        [currentPage]
    );
    
    console.log("equipments : " , equipments);
    console.log("EquipmentList : " ,equimentList);
    console.log("pageInfo : " , pagInfo);
    

    return(
        <>
            <div className='equDiv'>
                <table className="equTable">
                    <thead>
                        <th> 장비 코드 </th>
                        <th> 장비 분류 </th>
                        <th> 장비 명 </th>
                        <th> 장비 수 </th>
                        <th> 장비 상태 수정 일 </th>
                        <th> 장비 등록 일 </th>
                    </thead>
                    <tbody>
                        {equimentList && equimentList.map((equ) => (
                            <tr key={ equ.categoryCode }>
                                <td>{ equ.categoryCode }</td>
                                <td>{ equ.equCategory.categoryName }</td>
                                <td>{ equ.categoryName }</td>
                                <td>{ equ.categoryCount }</td>
                                <td>{ equ.equipmentCreateDate }</td>
                                <td>{ equ.equipmentModifyDate ? equ.equipmentModifyDate : '수정 시간이 존재 하지 않음' }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                { pagInfo && <Pageingbar pagInfo={pagInfo} setCurrentPage={setCurrentPage}/>}
                </div>
            </div>
          
                
        </>
    );
}

export default Equipment;