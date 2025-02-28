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
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('wish-list', storedListStr);
  }
};

export { addToWishedStoredList };
