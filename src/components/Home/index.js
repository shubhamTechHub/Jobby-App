import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content-container">
        <h1 className="home-page-heading">Find The Job That Fits Your Life</h1>
        <p className="home-page-description">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <button type="button" className="find-jobs-button">
          Find Jobs
        </button>
      </div>
    </div>
  </>
)

export default Home
