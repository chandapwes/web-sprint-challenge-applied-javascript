import axios from "axios";

const Tabs = ({topics}) => {
  const topic = document.createElement('div');
  topic.classList.add('topics');

  const topic1 = document.createElement('div');
  topic1.classList.add('tab');
  topic1.textContent = topics;

  // const topic2 = document.createElement('div');
  // topic2.classList.add('tab');
  // topic2.textContent = topics;

  // const topic3 = document.createElement('div');
  // topic3.classList.add('tab');
  // topic3.textContent = topics;

  topic.appendChild(topic1);
  // topic.appendChild(topic2);
  // topic.appendChild(topic3);


  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  return topic;
}


const tabsContent = document.querySelector('.tabs-container')


const tabsAppender = (selector) => {
  axios 
  .get(`https://lambda-times-api.herokuapp.com/topics`)
  .then((res) => {
  const topicS = res.data.topics;
  
  topicS.forEach((topics) => {
    const tab = Tabs({topics})
    tabsContent.appendChild(tab)
  })
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('done')
  })

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }