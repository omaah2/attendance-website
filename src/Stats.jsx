import React, { useMemo } from "react";
import { motion } from "framer-motion";

function Stats({ attendanceList }) {
  const stats = useMemo(() => {
    const present = attendanceList.filter(
      (item) => item.status === "Present"
    ).length;
    const absent = attendanceList.filter(
      (item) => item.status === "Absent"
    ).length;
    const total = attendanceList.length;

    return [
      { label: "Present", value: present, color: "bg-green-500" },
      { label: "Absent", value: absent, color: "bg-red-500" },
    ];
  }, [attendanceList]);

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-primary">
        Today's Stats
      </h2>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className={`w-full bg-gray-200 rounded-full h-2.5 mr-2`}>
              <div
                className={`${stat.color} h-2.5 rounded-full`}
                style={{
                  width: `${(stat.value / attendanceList.length) * 100}%`,
                }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-700">
              {stat.label}: {stat.value}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="mt-4 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Total Students: {attendanceList.length}
      </motion.p>
    </motion.div>
  );
}

export default Stats;
