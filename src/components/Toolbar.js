const continents = {
    'asia': 'Asia',
    'africa': 'Africa',
    'americas': 'Americas',
    'europe': 'Europe',
    'oceania': 'Oceania'
}

const Toolbar = ({
    count=0,
    loading,
    continent,
    updateContinent,
    reloadData
}) => {
    return (
        <div className="sticky z-10 top-0 bg-white flex items-center justify-between border-b-2 py-3">
            <div className="flex flex-col space-y-1">
                <p className="text-sm md:text-base">{loading ? '...' : <>{count} record(s) found.</>}</p>
                <p className="text-xs text-gray-500">* Hover on cards to view incomplete fields.</p>
            </div>
            
            <div className="flex space-x-4">
                {!loading && <button
                    onClick={reloadData}
                    className="border border-gray-500 px-2 py-1 rounded-full"
                >Refresh</button>}
                <select 
                    value={continent}
                    onChange={({target}) => updateContinent(target.value)}
                    className="px-2 py-1 border border-gray-500 rounded-full cursor-pointer"
                >
                    {Object.keys(continents).map((key, i) => (
                        <option
                            key={`continent-${i}`}
                            value={key}
                        >
                            {continents[key]}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Toolbar;