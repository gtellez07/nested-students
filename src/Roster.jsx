import React from 'react'
import Student from './Student'

export default class Roster extends React.Component {
    render() {
        const studentArray = [] 
        this.props.students.forEach((student, idx)=> {
            studentArray.push(
                <Student
                 key={idx}
                 name={student.name}
                 bio={student.bio}
                 score={student.scores}  
                />
            )
        })
        // console.log(this.props)
        return (
            <div>
                {studentArray}
            </div>
        )
    }
}    