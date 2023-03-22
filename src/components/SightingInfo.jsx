export default function SightingInfo({ sightingData })
{
    return (
        <div className="SightingInfo">
            <h3 className="SightingInfo__com-name">{sightingData.comName}</h3>
            <h4 className="SightingInfo__sci-name">Scientific name: {sightingData.sciName}</h4>
            <p>Location: {sightingData.locName}</p>
            <p>Number sighted: {sightingData.howMany}</p>
        </div>
    )
}
