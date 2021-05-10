import express, { request } from 'express';

import {
  getUserFunction,
  createUserFunction, getSingleUserFunction,
  deleteUserFunction, updateUserFunction
} from '../Controllers/users.js'


const router = express.Router();



// all requests here already starts with '/users'
//send to: http://localhost:5000/users
router.get('/', getUserFunction);

router.post('/', createUserFunction);

// /user/2 == request.params{id:2}
router.get('/:id', getSingleUserFunction);

router.delete('/:id', deleteUserFunction);

router.patch('/:id', updateUserFunction);

export default router;