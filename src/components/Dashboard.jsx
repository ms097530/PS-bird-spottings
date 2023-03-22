import { useState, useRef } from "react"
import DashboardData from "./DashboardData"

import axios from 'axios'

export default function Dashboard()
{
    const [data, setData] = useState(null)

    const selectRef = useRef()

    const handleClick = async () =>
    {
        console.log(selectRef.current.value)
        const url = `https://api.ebird.org/v2/data/obs/${selectRef.current.value}/recent?maxResults=10`
        const key = process.env.REACT_APP_EBIRD_KEY
        console.log(key)
        // let res = await axios.get(url, {headers: {"x-ebirdapitoken": ""}})
    }

    return (
        <div>
            <select name="region" id="region" ref={selectRef}>
                <option value="US" name="United States">US</option>
                <option value="JP" name="Japan">JP</option>
                <option value="KR" name="South Korea">KR</option>
                <option value="AU" name="Australia">AU</option>
                <option value="BR" name="Brazil">BR</option>
            </select>
            <button onClick={handleClick}>Submit</button>
            <DashboardData data={data} />
        </div>
    )
}
