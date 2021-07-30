import React, { useState } from 'react'
import { Container, Draggable, Droppable, InProgress } from './Dnd2Styled';


export default function Dnd2() {

    const [tasks, setTasks] = useState([
        {id: "1", taskName:"Read book",type:"inProgress", backgroundColor: "#26c6da"},
        {id: "2", taskName:"Pay bills", type:"inProgress", backgroundColor:"#29b6f6"},
        {id: "3", taskName:"Go to the gym", type:"Done", backgroundColor:"#ffee58"},
        {id: "4", taskName:"Play baseball", type:"Done", backgroundColor:"#ff7043"}
    ]);

      

    const onDragStart = (e, taskName) => {
        e.dataTransfer.setData('taskName', taskName);
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e, cat) => {
        let taskName = e.dataTransfer.getData('taskName');
        let newTasks = tasks.filter(task => {
            if (task.taskName === taskName) {
                task.type = cat;
            }
            return task;
        });

        setTasks(newTasks);
    }

    const tasksList = {
    inProgress: [],
    Done: []
    }

    tasks.forEach(task => {
        tasksList[task.type].push(
        <Draggable 
            draggable
            onDragStart={(e) => onDragStart(e, task.taskName)}
            key={task.taskName} 
            className='draggable' 
            style={{backgroundColor: `${task.backgroundColor}`}}
        >
            {task.taskName}
        </Draggable>
        )
    });


    
    return (
        <Container>
            <h2 className="head">To do list</h2>
            <InProgress 
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, 'inProgress')}
            >
                <span className="group-header">
                    In Progress
                </span>
                {tasksList.inProgress}
            </InProgress>
            <Droppable 
                onDragOver={(e) => onDragOver(e)}
                onDrop={((e) => onDrop(e, 'Done'))}
            >
                <span className="group-header">
                    Done
                </span>
                {tasksList.Done}
            </Droppable>
        </Container>
    )
}
