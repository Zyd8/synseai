export default function Dashboard() {
    const summary = [
        { label: "Submitted", count: 2, img: "/images/db_submitted.png" },
        { label: "In Progress", count: 1, img: "/images/db_inprogress.png" },
        { label: "Approved", count: 1, img: "/images/db_approved.png" },
        { label: "Rejected", count: 5, img: "/images/db_rejected.png" },
    ];

    const activities = [
        {
            title: "Tech Integration",
            action: "Proposal Submitted",
            date: "August 8, 2025 | 10:00 AM",
        },
        {
            title: "Tech Integration",
            action: "Proposal Submitted",
            date: "August 8, 2025 | 10:00 AM",
        },
        {
            title: "Tech Integration",
            action: "Proposal Submitteda",
            date: "August 8, 2025 | 10:00 AM",
        }
    ];

    const proposals = [
        { id: "P001", title: "Tech Integration", status: "Proposal Submitted" },
        { id: "P002", title: "Tech Integration", status: "Proposal Under Review" },
        { id: "P003", title: "Tech Integration", status: "Proposal Under Review" },
        { id: "P004", title: "Tech Integration", status: "Proposal Approved" },
        { id: "P005", title: "Tech Integration", status: "Proposal Rejected" },
    ];

    return (

        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-20 bg-white border-r flex flex-col items-center py-4 space-y-6">
                <img src="/logo/synsei_icon.png" alt="Logo" className="w-10" />
                <nav className="flex flex-col space-y-4">
                    <button className="text-xl">🏠</button>
                    <button className="text-xl">📄</button>
                    <button className="text-xl">⚙️</button>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%]">
                <h1 className="text-2xl font-bold text-red-700">Dashboard</h1>
                <p className="text-sm text-gray-600 mt-1 border-b-3 border-black pb-2 sm:pb-4 border-red-700">
                    Track the status of all your submitted collaboration proposals with BPI.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-[69%_30%] gap-4 mt-5">
                    {/* Summary cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0">
                        {summary.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg flex items-center gap-4 shadow-md"
                            >
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    className="m-0 p-0 h-full w-auto object-cover"
                                />
                                <div className="flex-1 flex items-center justify-center">
                                    <h2 className="text-4xl font-bold">{item.count}</h2>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Activities */}
                    <div className="bg-white rounded-lg shadow-sm sm:p-8 p-6">
                        <h3 className="text-red-700 font-bold text-xl mb-4 border-b border-black pb-2 sm:pb-4">
                            Recent Activities
                        </h3>

                        <div
                            className="relative"
                            style={{ "--dot-size": "0.75rem" } as React.CSSProperties}
                        >
                            {activities.slice(0, 3).map((a, i, arr) => (
                                <div key={i} className="relative flex items-start">
                                    {/* Dot */}
                                    <div
                                        className="relative z-10 rounded-full flex-shrink-0 bg-gray-600"
                                        style={{
                                            width: "var(--dot-size)",
                                            height: "var(--dot-size)",
                                            marginTop: "0.5rem",
                                        }}
                                    ></div>

                                    {i < arr.length - 1 && (
                                        <div
                                            className="absolute left-[calc(var(--dot-size)/2-1px)] top-[calc(var(--dot-size)+0.5rem)] w-0.5 bg-gray-400"
                                            style={{
                                                height: "calc(100% - var(--dot-size) - 0rem)",
                                            }}
                                        ></div>
                                    )}

                                    <div className="ml-4 pb-6 last:pb-0 mb-4">
                                        <div className="font-semibold text-gray-900">{a.title}</div>
                                        <div className="font-bold text-gray-900">{a.action}</div>
                                        <div className="text-gray-500 text-sm">{a.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                </div>

                {/* Bottom grid */}
                <div className="grid grid-cols-1 sm:grid-cols-[69%_30%] gap-4 mt-5">
                    {/* Table */}
                    <div className="sm:col-span-1 border border-gray-500 rounded-lg p-5">
                        <table className="w-full text-sm rounded-lg overflow-hidden">
                            <thead>
                                <tr>
                                    <th className="p-3 text-left text-red-700">Proposal ID</th>
                                    <th className="p-3 text-left text-red-700">Proposal Title</th>
                                    <th className="p-3 text-left text-red-700">Status</th>
                                    <th className="p-3 text-center text-red-700">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {proposals.map((p, i) => (
                                    <tr key={i} className="border-t">
                                        <td className="p-3">{p.id}</td>
                                        <td className="p-3">{p.title}</td>
                                        <td className="p-3">{p.status}</td>
                                        <td className="p-3 text-center">⋮</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </main>
        </div>
    );
}
