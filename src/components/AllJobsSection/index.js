import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'
import JobCard from '../JobCard'

class AllJobsSection extends Component {
  state = {
    jobsList: [],
  }

  componentDidMount() {
    this.getJobs()
  }

  getJobs = async () => {
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const formattedData = data.jobs.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        rating: eachItem.rating,
        packagePerAnnum: eachItem.package_per_annum,
        location: eachItem.location,
        jobDescription: eachItem.job_description,
        employmentType: eachItem.employment_type,
        companyLogoUrl: eachItem.company_logo_url,
      }))

      this.setState({
        jobsList: formattedData,
      })
    }
  }

  renderJobsList = () => {
    const {jobsList} = this.state
    return (
      <ul className="jobs-list-container">
        {jobsList.map(eachItem => (
          <JobCard jobDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    return <>{this.renderJobsList()}</>
  }
}

export default AllJobsSection
