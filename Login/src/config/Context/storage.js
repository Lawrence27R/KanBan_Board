import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const StorageContext = createContext();

const InitialData = [
  {
    id: uuidv4(),
    color: '#ff5722',
    title: 'To Do',
    cards: [
      {
        id: uuidv4(),
        title: 'Host Project',
        description: 'Host the project using firebase application',
        date: '2023-04-01',
        assign: 'Lawrence27R',
        tasks: [],
      },
      {
        id: uuidv4(),
        title: 'Save User Data',
        description: 'Save user data in the firebase datastore',
        date: '2023-04-15',
        assign: 'Lawrence27R',
        tasks: [],
      },
      {
        id: uuidv4(),
        title: 'Make changes in Admin Page',
        description: 'Make necessary changes in the admin page',
        date: '2023-04-01',
        assign: 'Lawrence27R',
        tasks: [],
      },
    ],
  },
  {
    id: uuidv4(),
    color: '#795548',
    title: 'In Progress',
    cards: [
      {
        id: uuidv4(),
        title: 'Database connectivity',
        description: 'Connect the application with firebase database',
        date: '2023-03-31',
        assign: 'Lawrence27R',
        tasks: [],
      },
      {
        id: uuidv4(),
        title: 'Admin Page',
        description: 'Make necessary changes',
        date: '2023-04-01',
        assign: 'Lawrence27R',
        tasks: [],
      },
    ],
  },
  {
    id: uuidv4(),
    color: '#e91e63',
    title: 'Done',
    cards: [
      {
        id: uuidv4(),
        title: 'Login And SignUp Page',
        description: 'Login and signup with google and github login using firebase',
        date: '2022-09-25',
        assign: 'Lawrence27R',
        tasks: [],
      },
    ],
  },
];

export const StorageProvider = ({ children }) => {
  const [StorageData, setStorageData] = useState(JSON.parse(localStorage.getItem('Kanban')) || InitialData);
  localStorage.setItem('Kanban', JSON.stringify(StorageData));
  return (
    <StorageContext.Provider value={{ StorageData, setStorageData }}>
      {children}
    </StorageContext.Provider>
  );
};
