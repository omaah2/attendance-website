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
}) {
  const downloadPDF = () => {
    const doc = new jsPDF();
    const table = document.getElementById("attendanceTable");

    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;
      doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position -= pageHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save("attendance.pdf");
    });
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
        />
      </div>
    </div>
  );
}

export default Dashboard;
