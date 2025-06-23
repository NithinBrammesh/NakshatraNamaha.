import { useParams, useNavigate } from 'react-router-dom';
import jobDescriptions from './jobDescriptions'; // ensure path is correct
import './JobDetail.css';

export default function JobDetail() {
  const { slug } = useParams();
  const job = jobDescriptions[slug];
  const navigate = useNavigate();

  if (!job) return <p className="text-center mt-5">Job not found.</p>;

  return (
    <div className="job-modal-overlay" onClick={() => navigate(-1)}>
      <div className="job-modal-content" onClick={e => e.stopPropagation()}>
        <button className="job-modal-close" onClick={() => navigate(-1)}>&times;</button>

        <h2>{job.title}</h2>
        <p><strong>Type:</strong> {job.type}</p>
        <p><strong>Experience:</strong> {job.experience}</p>
        <p><strong>Vacancy:</strong> {job.vacancy}</p>
        <p><strong>Skills:</strong> {job.skills}</p>
        <h4>Job Responsibilities</h4>
        <ul>
          {job.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <a href={job.applyLink} className="btn btn-primary mt-4">Apply Now</a>
      </div>
    </div>
  );
}
