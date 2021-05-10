import { v4 as uuidv4 } from 'uuid';

let users = []

export const getUserFunction = (request, respond) => {
  console.log(users);
  //respond.send('Hello'); 
  respond.send(users);
}

export const createUserFunction = (request, respond) => {
  //console.log('POST ROUTE REACHED');
  // respond.send('POST ROUTE REACHED');
  console.log(request.body);

  const newUser = request.body;
  const newUserID = uuidv4();
  const newUserWithID = { ...newUser, id: newUserID };
  users.push(newUserWithID);

  respond.send(`User with the name ${newUser.firstName} ${newUser.lastName} has been added to the databse. `)
}

export const getSingleUserFunction = (request, respond) => {
  //respond.send('the getID route');
  console.log(request.params);

  const { id } = request.params;
  const foundUser = users.find((user) => user.id === id);


  //respond.send(request.params);
  respond.send(foundUser);
}

export const deleteUserFunction = (request, respond) => {
  const { id } = request.params;
  console.log(id);
  const idToDelete = id;

  const userTobeDelete = users.find((user) => user.id === idToDelete);
  users = users.filter((user) => user.id !== idToDelete);

  respond.send(`user with
  \n id: ${idToDelete} 
  \n first Name: ${userTobeDelete.firstName} 
  \n last Name: ${userTobeDelete.lastName} 
  \n has been deleted from the database.`)
}

export const updateUserFunction = (request, respond) => {
  const { id } = request.params;
  const { firstName, lastName, age } = request.body;

  console.log(request.body);

  const idToBeUpdated = id;
  const newFirstName = firstName;
  const newLastName = lastName;
  const newAge = age;


  const userToBeUpdated = users.find((user) => user.id === idToBeUpdated);


  if (newFirstName) {
    userToBeUpdated.firstName = newFirstName;

    respond.send(`User with the id ${idToBeUpdated} has been updated.\n
    it now has a updated first name ${userToBeUpdated.firstName}`);
  };

  if (newLastName) {
    userToBeUpdated.lastName = newLastName;

    respond.send(`User with the id ${idToBeUpdated} has been updated.\n
    it now has a updated last name ${userToBeUpdated.lastName}`);
  };

  if (newAge) {
    userToBeUpdated.age = newAge;

    respond.send(`User with the id ${idToBeUpdated} has been updated.\n
    it now has a updated age ${userToBeUpdated.age}`);
  };




}



