export default function DashboardData({ data })
{


    return (
        <div>
            {
                !data && <h2>Nothing to see here, yet.</h2>
            }
            {
                data && (
                    data.map(sightingData => <h1>Hello World</h1>)
                )
            }
        </div>
    )
}
