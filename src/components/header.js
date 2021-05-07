const Header = ({ title, date, temp }) => {
  const header = document.createElement('div');
  header.classList.add('header');


  const dateX = document.createElement('span');
  dateX.classList.add('date');
  dateX.textContent = date;


  const titleX = document.createElement('h1');
  titleX.textContent = title;


  const tempX = document.createElement('span');
  tempX.classList.add('temp');
  tempX.textContent = temp;

  header.appendChild(dateX);
  header.appendChild(titleX);
  header.appendChild(tempX);


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
  return header;
}

const test = Header({title: 'test title', date: 'test date', temp: 'test temp'})
console.log(test)

const headerContent = document.querySelector('.header-container')
const headerAppender = (selector) => {
  const siteHeader = Header({title: 'Applied JS', date: 'May 7th', temp: 'Warm'})
  return headerContent.appendChild(siteHeader)
  

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
