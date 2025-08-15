import Sidebar from "@/components/DashboardSidebar";

export default function ApprovedDashboard() {
    const proposals = [
        { id: "P001", title: "Tech Integration", status: "Proposal Submitted" },
        { id: "P002", title: "Tech Integration", status: "Proposal Under Review" },
        { id: "P003", title: "Tech Integration", status: "Proposal Under Review" },
        { id: "P004", title: "Tech Integration", status: "Proposal Approved" },
        { id: "P005", title: "Tech Integration", status: "Proposal Rejected" },
    ];

    return (
        <div className="flex w-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%]">
                <h1 className="text-2xl font-bold text-red-700">Dashboard</h1>
                <p className="text-sm text-gray-600 mt-1 border-b-3 border-black pb-2 sm:pb-4 border-red-700">
                    Track the status of all your submitted collaboration proposals with BPI.
                </p>
                <div className="border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl mt-5">
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
        </div>

    );
}
