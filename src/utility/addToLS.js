const getBookFromLS = () => {
  const storedBookString = localStorage.getItem("readList");

  if (storedBookString) {
    const storedBookData = JSON.parse(storedBookString);
    return storedBookData;
  } else {
    return [];
  }
};

const addToLS = (id) => {
  const storedBookData = getBookFromLS();

  if (storedBookData.includes(id)) {
    alert("Book already exist!!");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};

export { addToLS, getBookFromLS };
