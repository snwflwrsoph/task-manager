interface TitleProps {
    text: string;
    color: string;
};

const BoardComponent = ({text, color}: TitleProps) => {
    return (
        <div className="bg-transparent border border-gray-500 rounded-lg h-135 flex flex-col flex-start">
            <div className="text-center p-2">
                <h2 className={`${color} font-serif font-semibold text-lg`}>
                    {text}
                </h2>
            </div>
            <div className="bg-gray-500 rounded-lg m-2 grid grid-cols-4">
                <h1 className="p-2">
                    hello
                </h1>
                <h1 className="p-2">
                    guys
                </h1>
                <h1 className="p-2">
                    in
                </h1>
                <h1 className="p-2">
                    todays
                </h1>
            </div>
        </div>
    );
};

export default BoardComponent;