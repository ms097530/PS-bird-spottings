export default function BirdInfo({ sightingData })
{
    return (
        <div className="BirdInfo">
            <h3 >{sightingData.comName}</h3>
            <h4>Scientific name: {sightingData.sciName}</h4>
            <p>Location: {sightingData.locName}</p>
            <p>Number sighted: {sightingData.howMany}</p>
        </div>
    )
}
