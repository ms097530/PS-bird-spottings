import { useState, useRef } from "react"
import DashboardData from "./DashboardData"

import axios from 'axios'
import _debounce from 'lodash/debounce';

export default function Dashboard()
{
    const [data, setData] = useState(null)
    const [regionName, setRegionName] = useState(null)

    const selectRef = useRef()

    const handleClick = async () =>
    {
        console.log('in handleClick')
        // console.log(selectRef.current.value)
        const url = `https://api.ebird.org/v2/data/obs/${selectRef.current.value}/recent?maxResults=10`
        const key = process.env.REACT_APP_EBIRD_KEY
        const options = { headers: { "x-ebirdapitoken": key } }

        // console.log(key)
        let res = await axios.get(url, options)
        setData(res.data)
        // console.log(selectRef.current)
        // console.log(selectRef.current.selectedOptions[0].attributes["name"].value)
        // console.log(selectRef.current.selectedOptions[0].getAttribute('name'))
        setRegionName(selectRef.current.selectedOptions[0].getAttribute('name'))
    }

    const debounceClick = _debounce(() => { console.log('in debounceClick'); handleClick() }, 2000)

    return (
        <div className="Dashboard">
            <div className="Dashboard__input-container">
                <select name="region" id="region" ref={selectRef}>
                    <option value="US" name="United States">US</option>
                    <option value="JP" name="Japan">JP</option>
                    <option value="KR" name="South Korea">KR</option>
                    <option value="AU" name="Australia">AU</option>
                    <option value="BR" name="Brazil">BR</option>
                </select>
                <button onClick={debounceClick}>Submit</button>
            </div>
            <DashboardData data={data} regionName={regionName} />
        </div>
    )
}
