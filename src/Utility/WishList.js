import { toast } from 'react-toastify';
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
    toast('This Book already Exist !!!');
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('wish-list', storedListStr);
    toast('Your Book is Adding');
  }
};

export { addToWishedStoredList, getStoredWishList };
