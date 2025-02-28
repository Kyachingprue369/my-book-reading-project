import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const getStoredReadList = () => {
  // read list
  const storedListStr = localStorage.getItem('read-list');
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = id => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    //already exist do not add it
    toast('This book already Exist !!!');
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
    toast('Your Book is Adding');
  }
};

export { addToStoredReadList, getStoredReadList };
