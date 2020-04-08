import React from 'react';


const NoDisplayDivs = ()=>{
    return(
        <div className="right-container">
            <div className="physics-nodisplay-container">
                <form id="physics-form">
                    <div className="sap-input-container">
                        <input type="text"  placeholder="SAPID" />
                    </div>

                    <div className="checkbox-container">
                        <input type="checkbox" id="physics-apply-checkbox" checked />
                        <label for="physics-apply-checkbox">Apply for No Dues</label>
                    </div>

                    <div className="comment-container">
                        <textarea form="physics-form" id="physics-textarea" rows="8" cols="50"></textarea>
                    </div>
                </form>
            </div>

            <div className="chemistry-nodisplay-container">
                <form id="chemistry-form">
                    <div className="sap-input-container">
                        <input type="text"  placeholder="SAPID" />
                    </div>

                    <div className="checkbox-container">
                        <input type="checkbox" id="chemistry-apply-checkbox" checked />
                        <label for="physics-apply-checkbox">Apply for No Dues</label>
                    </div>

                    <div className="comment-container">
                        <textarea form="physics-form" id="chemistry-textarea" rows="8" cols="50"></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NoDisplayDivs;