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
    console.log(id, 'already exist do not again');
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'This Book Already Exist',
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Book is Added',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export { addToStoredReadList, getStoredReadList };
