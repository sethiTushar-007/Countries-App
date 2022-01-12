import {useState} from "react";

const otherInfo = {
    capital: 'Capital',
    region: 'Region',
    subregion: 'Sub-region',
    population: 'Population',
    borders: 'Borders',
    languages: 'Languages'
};

const Country = ({
    name,
    capital,
    flag,
    region,
    subregion,
    population,
    borders,
    languages
}) => {
    const [expand, setExpand] = useState(false);
    return (
        <div 
            className="relative shadow-xl hover:shadow-md w-[230px] h-[380px] cursor-pointer"
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
        >
            <div className={`max-h-[180px] overflow-hidden ${expand && 'opacity-20'} transition-opacity duration-[0.15s]`}>
                <img
                    className="rounded-md border-2"
                    src={flag}
                    alt="flag"
                />
            </div>
            <div className={`absolute w-full bottom-0 flex flex-col p-4 space-y-5 rounded-lg bg-white`}>
                <div className="text-center">
                    <p className="font-bold text-lg text-black">{name.common}</p>
                    {name.common!==name.official && <p className="text-xs text-gray-500">{name.official}</p>}
                </div>
                <div className="flex flex-col space-y-2">
                    {Object.keys(otherInfo).map((key, i) => (
                        eval(key) && (
                            <div key={`otherinfo-${i}`} className='flex space-x-3 text-xs'>
                                <p className={`text-gray-400 text-right w-[62px] truncate`}>{otherInfo[key]}:</p>
                                <p className={`text-black text-left flex-1 ${!expand && 'truncate'}`}>{eval(key)}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Country;
