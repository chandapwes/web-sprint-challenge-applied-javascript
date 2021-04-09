const Header = (title, date, temp) => {
  const headerX = document.createElement('div');
  headerX.classList.add('header');


  const dateX = document.createElement('span');
  dateX.classList.add('date');
  dateX.textContent = date;


  const titleX = document.createElement('h1');
  titleX.classList.add('title')
  titleX.textContent = title;


  const tempX = document.createElement('span');
  tempX.classList.add('temp');
  tempX.textContent = temp;

  headerX.appendChild(date);
  headerX.appendChild(temp);
  dateX.appendChild(title);

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //)
}

const headerAppender = (selector) => {
 selector.appendChild;

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
