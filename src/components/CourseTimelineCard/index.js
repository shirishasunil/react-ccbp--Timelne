import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  console.log(courseDetails)
  const {courseTitle, duration, description, tagsList} = courseDetails

  return (
    <>
      <div className="course-card-container">
        <div className="course-title-icon-container">
          <h1 className="course-title">{courseTitle}</h1>
          <div className="clock-icon-duration-container">
            <AiFillClockCircle color="#171f46" />
            <p className="course-duration">{duration}</p>
          </div>
        </div>
        <p className="course-description">{description}</p>
        <ul className="course-list">
          {tagsList.map(eachItem => (
            <li key={eachItem.id} className="course-list-item">
              <p className="course-name">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default CourseTimelineCard
