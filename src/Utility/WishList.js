import Swal from 'sweetalert2';

const getStoredWishList = () => {
  //Wish-List
  const wishListStr = localStorage.getItem('wish-list');
  if (wishListStr) {
    const wishedList = JSON.parse(wishListStr);
    return wishedList;
  } else {
    return [];
  }
};

const addToWishedStoredList = id => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    //already exist do not add it
    console.log(id, 'already exist in the read List');
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
    localStorage.setItem('wish-list', storedListStr);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Book is Added',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export { addToWishedStoredList, getStoredWishList };
