import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { db } from './firebase_config';

export default function TodoItem({todo, isDone, id}) {

    function toggleIsDone(){
        db.collection("todos").doc(id).update({
            isDone: !isDone
        })
    }
    function deleteTodo(){
        db.collection("todos").doc(id).delete();
    }
    return (
        <div style ={{display: 'flex'}}>
            <ListItem>
                <ListItemText 
                    primary = {todo} 
                    secondary = {isDone ? "Completed" : "In progress"}
                />
            </ListItem>
            <Button onClick = {toggleIsDone}>
                {isDone ? "unDone" : "Done"}
            </Button>
            <Button onClick = {deleteTodo}><DeleteIcon/>
            </Button>
        </div>
    )
}
