import { motion, AnimatePresence } from "framer-motion";

interface Project {
    title: string;
    description: string;
}

interface RecommendedProjectsModalProps {
    isOpen: boolean;
    onClose: () => void;
    projects: Project[];
    loading?: boolean;
    error?: string | null;
}

export default function RecommendedProjectsModal({
    isOpen,
    onClose,
    projects,
    
}: RecommendedProjectsModalProps) {
    
    return (
        
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 backdrop-blur-md bg-white/20 flex justify-center items-center z-50 p-4"
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 w-full max-w-3xl relative overflow-y-auto max-h-[85vh] mx-4"
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        transition={{ 
                            duration: 0.4,
                            type: "spring",
                            damping: 20,
                            stiffness: 300
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-gray-200/80 text-gray-600 hover:text-gray-800 transition-all duration-200 hover:scale-110"
                            onClick={onClose}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Header */}
                        <div className="text-center mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                                className="w-16 h-16 bg-gradient-to-br from-[#B11016] to-[#8B0C11] rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </motion.div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#B11016] to-[#8B0C11] bg-clip-text text-transparent mb-2">
                                Recommended Projects
                            </h2>
                            <p className="text-gray-600">Discover curated projects tailored for your success</p>
                        </div>

                        {/* Project Grid */}
                        <div className="space-y-6">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                                    className="group bg-white/60 backdrop-blur-sm border border-gray-400/50 rounded-xl p-6 hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-3 h-3 bg-gradient-to-r from-[#B11016] to-[#8B0C11] rounded-full"></div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#B11016] transition-colors duration-200">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <button className="w-full bg-gradient-to-r from-[#B11016] to-[#8B0C11] hover:from-[#8B0C11] hover:to-[#B11016] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group">
                                        <span>Adapt Recommended Project</span>
                                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {projects.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Projects Available</h3>
                                <p className="text-gray-500">Check back later for recommended projects.</p>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}