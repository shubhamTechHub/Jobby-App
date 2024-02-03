import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  const {
    title,
    rating,
    packagePerAnnum,
    location,
    jobDescription,
    employmentType,
    companyLogoUrl,
  } = jobDetails
  return (
    <li className="job-list-container">
      <div className="title-logo-rating-card">
        <img className="logo" src={companyLogoUrl} alt="logo" />
        <div className="title-rating-card">
          <h1 className="title">{title}</h1>
          <p className="rating">{rating}</p>
        </div>
      </div>
      <div className="location-employement-type-package-card">
        <div className="location-employement-type-card">
          <p className="location">{location}</p>
          <p className="employement-type">{employmentType}</p>
        </div>
        <p className="package">{packagePerAnnum}</p>
      </div>
      <hr className="separator" />
      <h1 className="description-heading">Description</h1>
      <p className="job-description">{jobDescription}</p>
    </li>
  )
}

export default JobCard
