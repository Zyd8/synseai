import Sidebar from "@/components/DashboardSidebar";

export default function CollabRejected() {
    const proposals = [
        { id: "P001", title: "Tech Integration", status: "Proposal Submitted", approvedDate: "2025-08-10" },
        { id: "P002", title: "Tech Integration", status: "Proposal Under Review", approvedDate: "2025-08-10" },
        { id: "P003", title: "Tech Integration", status: "Proposal Under Review", approvedDate: "2025-08-10" },
        { id: "P004", title: "Tech Integration", status: "Proposal Approved", approvedDate: "2025-08-10" },
        { id: "P005", title: "Tech Integration", status: "Proposal Rejected", approvedDate: "2025-08-10" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%] overflow-x-auto">
                <h1 className="text-2xl font-bold text-red-700">Rejected Proposals</h1>
                <p className="text-sm text-gray-600 mt-1 border-b-3 border-black pb-2 sm:pb-4 border-red-700">
                    Track all your collaboration proposals that has been rejected with BPI.
                </p>

                <div className="border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl mt-5">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm rounded-lg overflow-hidden min-w-[600px]">
                            <thead>
                                <tr>
                                    <th className="p-3 text-left text-red-700 whitespace-nowrap">Proposal ID</th>
                                    <th className="p-3 text-left text-red-700 whitespace-nowrap">Proposal Title</th>
                                    <th className="p-3 text-left text-red-700 whitespace-nowrap">Status</th>
                                    <th className="p-3 text-left text-red-700 whitespace-nowrap">Approved Date</th>
                                    <th className="p-3 text-center text-red-700 whitespace-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {proposals.map((p, i) => (
                                    <tr key={i} className="border-t">
                                        <td className="p-3 whitespace-nowrap">{p.id}</td>
                                        <td className="p-3">{p.title}</td>
                                        <td className="p-3">{p.status}</td>
                                        <td className="p-3 whitespace-nowrap">{p.approvedDate}</td>
                                        <td className="p-3 text-center">⋮</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
