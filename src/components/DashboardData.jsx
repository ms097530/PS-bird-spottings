import SightingInfo from "./SightingInfo";

export default function DashboardData({ data, regionName })
{


    return (
        <div className="DashboardData">
            {
                !data && <h2 className="DashboardData__subtitle">Nothing to see here, yet.</h2>
            }
            {

                data && (
                    <div className="DashboardData__card-container">
                        <h2 className="DashboardData__subtitle">{regionName}</h2>
                        {
                            data.map((sightingData, i) => (
                                <SightingInfo sightingData={sightingData} key={i} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
