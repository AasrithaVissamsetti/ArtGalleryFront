import React, { useState, useEffect } from "react";
import "./ViewReports.css"; // Make sure to add your styles
import "./AdminSideNavbar";
import AdminSideNavbar from "./AdminSideNavbar";

const ViewReports = () => {
  // Sample data - replace with actual API data if needed
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Monthly Report - October",
      description: "This report contains the data of October 2024.",
      date: "2024-10-31",
      status: "Completed",
    },
    {
      id: 2,
      title: "Sales Report - November",
      description: "This report contains the sales data for November.",
      date: "2024-11-30",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Performance Report - December",
      description: "Performance metrics for December 2024.",
      date: "2024-12-05",
      status: "Pending",
    },
  ]);

  const [error, setError] = useState("");

  useEffect(() => {
    // Simulate fetching reports from an API
    // If using an actual API, make an axios or fetch call here
    // Example: fetchReports();
  }, []);

  return (
    <div>
      <h1>View Reports</h1>
      <AdminSideNavbar/>
      {error && <div className="error-message">{error}</div>}

      {/* Report Table */}
      <div className="reports-table">
        <table>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.length > 0 ? (
              reports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.title}</td>
                  <td>{report.description}</td>
                  <td>{new Date(report.date).toLocaleDateString()}</td>
                  <td>{report.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No reports available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewReports;
