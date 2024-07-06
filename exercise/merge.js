function merge(arr1, arr2) {
    arr2.forEach((student) => {
        const idx = arr1.findIndex((value) => value.name == student.name && student.email == student.email)
        if (idx -- -1) arr1.push(student)
    })
    return arr1
}

cons