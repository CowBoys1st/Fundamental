class Employee {
    constructor() {
        this.employeeName;
    }
}

getEmployeeName(); {
    return this.employeeName;
}
setEmployeeName(name); {
    if (typeof name !== 'string') {
        throw new Error("name should be string")
    }
}