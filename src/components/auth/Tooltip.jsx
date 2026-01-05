import { useState } from "react";

const Tooltip = ({ errors, showSuccess, type }) => {

    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <>
            {Object.keys(errors).length !== 0 && <div className="form-controls border bg-[#FFD3D3] border-[#be3434cf] text-[#be3434cf] justify-between! uppercase pr-0!">{'incorrect format'}
                <span className="relative cursor-pointer h-full px-2" onClick={() => setShowTooltip(!showTooltip)}>?
                    {showTooltip && <div className="absolute rounded-xs text-sm top-0 left-12 bg-white w-100 p-1">
                        {Object.entries(errors).map(([field, msgs]) => (
                            <div key={field} ><span className="font-bold">{field}</span>: {msgs.map((msg) => (
                                <><span>{msg}</span> <br /></>
                            ))}</div>
                        ))}
                        <div className="absolute top-2.5 -left-1 -translate-x-1/2 w-0 h-0 border-4 border-transparent border-r-white"></div>
                    </div>}
                </span>
            </div>}
            {showSuccess && <div className="form-controls border bg-[#d6fdc9] border-[#57be34cf] text-[#57be34cf] justify-between! uppercase pr-0!">{type === 'signUn' ? 'Signing Up Successfull' : 'Signing In Successfull'}</div>}
        </>
    );
};

export default Tooltip;