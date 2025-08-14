'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProposalReportChart() {
    const data = {
        labels: ['Approved', 'In Progress', 'Submitted', 'Rejected'],
        datasets: [
            {
                data: [1, 1, 2, 5], 
                backgroundColor: ['#15803d', '#eab308', '#1d4ed8', '#b91c1c'],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        cutout: '65%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // We'll create custom legends
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    const total = data.datasets[0].data.reduce((a, b) => a + b, 0);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center h-full">
            <h3 className="text-red-700 font-bold text-xl mb-6 text-center">Proposal Report</h3>
            
            <div className="flex items-center justify-center gap-8">
                {/* Chart container */}
                <div className="relative w-48 h-48">
                    <Doughnut data={data} options={options} />
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-900">
                        {total}
                    </div>
                </div>
                
                {/* Custom legend on the right */}
                <div className="flex flex-col space-y-3">
                    {data.labels.map((label, index) => (
                        <div key={label} className="flex items-center space-x-3">
                            <div 
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                            ></div>
                            <span className="text-sm font-medium text-gray-700">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}