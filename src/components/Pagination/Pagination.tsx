import { useState } from "react";
import { usePage } from "../../hooks";
import './styles.css'
import { useNavigate } from "react-router-dom";

const Pagination = () => {
    const page = usePage();
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(page === 1)

    const handleNextClick = () => {
        const nextPage = page + 1;
        navigate(`../${nextPage}`)

        if(isDisabled){
            setIsDisabled(false)
        }
    }

    const handlePrevClick = () => {
        if(!isDisabled){
            const prevPage = page - 1;
            navigate(`../${prevPage}`)
        }
        if(page - 1 === 1){
            setIsDisabled(true)
        }
    }

    return (
       <div className="pagination">
            <div className={`button previous${isDisabled ? ` disabled` : ''}`} onClick={handlePrevClick}>prev</div>
            <div className="page">{page}</div>
            <div className="button next" onClick={handleNextClick}>next</div>
       </div>
    );
};

export { Pagination }