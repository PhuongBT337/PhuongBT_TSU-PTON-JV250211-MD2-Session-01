const createUser=(name, age= 18, role="user") =>{
    const user={
        name: name,
        age: age,
        role: role
    };
    return user;
}

console.log(createUser("Dev"));
console.log(createUser("Nguyen Van A", 20, "Admin"));
