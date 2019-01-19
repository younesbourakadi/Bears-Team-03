import React from 'react'

class ProjectDetails extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      prj : {
        applicants: [] // to reduce boilerplate ( check against applicanst existence no needed anymore)
      }
    }
  }

  componentDidMount() {
    const {prj, prj_id} = this.props.location.state;

    if(prj) {
      prj.startDate = this.formatDate(prj.startDate);
      prj.endDate = this.formatDate(prj.endDate);
      prj.dueDate = this.formatDate(prj.dueDate);
      this.setState({prj});
    } else {
      this.setState({prj: prj_id}); // fetch prj
    }
  }

  formatDate = (ISODate) => {
    let newDate = new Date(ISODate);
    return `${newDate.getFullYear()} / ${newDate.getMonth() +1} / ${newDate.getDate()}`
  }

  handleApplication = () => {
    this.props.toggleSubscription(this.state.prj._id)
      .then(() => {
        const {newProject} = this.props.prjStatus;
        if (newProject) {
          newProject.startDate = this.formatDate(newProject.startDate);
          newProject.endDate = this.formatDate(newProject.endDate);
          newProject.dueDate = this.formatDate(newProject.dueDate);
          this.setState({
            prj: newProject
          })
        } else {
          console.log('something went wrong');
        }
      });    
  }

  render() {
    const {applicationRequirements, applicants, email, ownerId, phoneContact, projectDescription, projectLocationAddress, projectLocationCountry, projectName, workDays, workFields, workingHours, startDate, endDate, dueDate} = this.state.prj;
    return (
      <div>
        <h2>Project Details</h2>
        <h3>{projectName}</h3> 
        <p>{projectDescription}</p>
        <div>{applicationRequirements}</div>
        <div>Tags: {workFields && workDays.map((el, i) => i===workDays.length-1 ?
        `${el}`:
        `${el}, ` )}</div>
        <span>Announce due date: </span> {dueDate}
        <hr />
        <h4>Work time</h4>
        <div>
          <span>Project Start: </span> {startDate}
          <span>Project Ends: </span> {endDate}
        </div>
        <div>Available days: {workDays && workDays.map((el, i) => i===workDays.length-1 ?
        `${el}`:
        `${el}, ` )}</div>
        <div>{workingHours && `From: ${workingHours[0]} to ${workingHours[1]}`}</div>
        <hr />
        <h4>Work place</h4>
        <p>{projectLocationAddress}</p>
        <p>{projectLocationCountry}</p>
        <hr />
        <h4>Customer</h4>
        <p>{ownerId}</p>
        <p><span>{phoneContact}</span> <span>{email}</span> </p>
        <button onClick={this.handleApplication} >Apply for the role!</button>
        <h6>Already applying: {applicants.length}</h6>
        <ul>
          {
            applicants.map((guy) => <li key={guy._id}>{guy.applicantInfo.fullname}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default ProjectDetails;