import BirdInfo from "./BirdInfo";

export default function DashboardData({ data, regionName })
{


    return (
        <div className="DashboardData">
            {
                !data && <h2>Nothing to see here, yet.</h2>
            }
            {

                data && (
                    <div className="DashboardData__card-container">
                        <h2 className="DashboardData__region">{regionName}</h2>
                        {
                            data.map((sightingData, i) => (
                                <BirdInfo sightingData={sightingData} key={i} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
