const WhatIsInclude = () => {
    return (
        <div className="max-w-[485px] mt-[9px]">
            <h4 className="text-[#868686]">What is Include:</h4>
            <div>
                <div className="grid grid-cols-2 justify-between items-center">
                    <div>
                        <input type="checkbox" name="" id="" /> <span className="text-sm text-violet-400">Desk</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" checked />{" "}
                        <label className="text-sm text-violet-400">Wardrobe</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" checked />{" "}
                        <span className="text-sm text-violet-400">Bed</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" checked />{" "}
                        <label className="text-sm text-violet-400">Others...</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIsInclude;
