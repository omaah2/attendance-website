import React from "react";
import AttendanceForm from "./AttendanceForm";
import AttendanceList from "./AttendanceList";
import Stats from "./Stats";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Dashboard({
  attendanceList,
  addAttendance,
  toggleStatus,
  togglePaidStatus,
  editItem,
  setEditItem,
  editAttendance,
}) {
  const downloadPDF = () => {
    const input = document.getElementById("attendanceTable");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("attendance.pdf");
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-primary mb-8">
        Attendance Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AttendanceForm
          addAttendance={addAttendance}
          editItem={editItem}
          editAttendance={editAttendance}
        />
        <Stats attendanceList={attendanceList} />
      </div>
      <div className="mt-8">
        <button
          onClick={downloadPDF}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download Attendance as PDF
        </button>
      </div>
      <div id="attendanceTable">
        <AttendanceList
          attendanceList={attendanceList}
          toggleStatus={toggleStatus}
          togglePaidStatus={togglePaidStatus}
          setEditItem={setEditItem}
        />
      </div>
    </div>
  );
}

export default Dashboard;
