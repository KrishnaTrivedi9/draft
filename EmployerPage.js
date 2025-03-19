import React, { useState } from "react";
import { FaBuilding } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmployerPage = ({ addJobPosting }) => {
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    company: "",
    salary: "",
    location: "",
    category: "",
    length: "",
    deadline: "",
    startDate: "",
  });

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobDetails.title || !jobDetails.company) {
      alert("Please fill in all required fields.");
      return;
    }

    // Format the new job opportunity
    const newJob = {
      title: jobDetails.title,
      description: jobDetails.description,
      company: jobDetails.company,
      tags: [jobDetails.location, jobDetails.salary, jobDetails.category, jobDetails.length],
      icon: <FaBuilding />,
      deadline: `Apply by: ${jobDetails.deadline}`,
      startDate: `Start: ${jobDetails.startDate}`,
    };

    addJobPosting(newJob); // Add job to opportunities
    navigate("/"); // Redirect to main page
  };

  return (
    <div className="employer-page">
      <h2>Post a Job Opening</h2>
      <form onSubmit={handleSubmit} className="job-form">
        <input type="text" name="title" placeholder="Job Title" value={jobDetails.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" value={jobDetails.description} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" value={jobDetails.company} onChange={handleChange} required />
        <input type="text" name="salary" placeholder="Salary (e.g., £40,000)" value={jobDetails.salary} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location (e.g., London)" value={jobDetails.location} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Job Category (e.g., Software Engineering)" value={jobDetails.category} onChange={handleChange} required />
        <input type="text" name="length" placeholder="Length (e.g., 12 months)" value={jobDetails.length} onChange={handleChange} required />
        <input type="date" name="deadline" value={jobDetails.deadline} onChange={handleChange} required />
        <input type="date" name="startDate" value={jobDetails.startDate} onChange={handleChange} required />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default EmployerPage;
