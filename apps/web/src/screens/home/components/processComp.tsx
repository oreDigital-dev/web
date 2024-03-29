const ProcessComp = ({number, title, content}) => {
    return(
        <span className="bg-[#FDFDFD] flex rounded-lg shadow-lg shadow-[rgba(0, 0, 0, 0.2] gap-4 justify-center px-8 py-20 lg:w-[30%]">
            <div className="flex gap-2">
                <span> {number} </span>
                <span className="border border-[#D9D9D9] h-6"></span>
            </div>
            <div className="space-y-2">
                <p className="font-semibold text-xl"> {title} </p>
                <p className="text-[#3F3F3F]"> {content} </p>
            </div>
        </span>
    )
}

export default ProcessComp;