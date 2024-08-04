import AttendanceForm from "./AttendanceForm";
import AttendanceList from "./AttendanceList";
import Stats from "./Stats";

function Dashboard({
  attendanceList,
  addAttendance,
  toggleStatus,
  togglePaidStatus,
}) {
  const downloadAttendance = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Name,PhoneNumber,Time,Status,Paid,Date\n" +
      attendanceList
        .map(
          (item) =>
            `${item.name},${item.phoneNumber},${item.time},${item.status},${
              item.paid ? "Paid" : "Not Paid"
            },${item.date}`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-primary mb-8">
        Attendance Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AttendanceForm addAttendance={addAttendance} />
        <Stats attendanceList={attendanceList} />
      </div>
      <div className="mt-8">
        <button
          onClick={downloadAttendance}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download Attendance
        </button>
      </div>
      <AttendanceList
        attendanceList={attendanceList}
        toggleStatus={toggleStatus}
        togglePaidStatus={togglePaidStatus}
      />
    </div>
  );
}

export default Dashboard;
