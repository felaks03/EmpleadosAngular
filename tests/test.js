console.log("Hello World")
function validatedepartment(_department) {
    let department = _department
    if(department == ""){
      return {'validatedepartment': true}
    } else {
      return null
    }
}

console.log(validatedepartment("Marketing"))
