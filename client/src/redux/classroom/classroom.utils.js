export const mapClassroomToClassrooms = (classrooms, classroom) => {
    const classroomsCopy = [ ...classrooms ];
    const found = classroomsCopy.find(x => x.id === classroom.id);
    if(found) {
        const index = classroomsCopy.indexOf(found)
        classroomsCopy.splice(index, 1)
        return [...classroomsCopy, classroom]
    }
    return [...classroomsCopy, classroom]
}