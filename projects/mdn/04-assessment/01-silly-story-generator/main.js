// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.querySelector('#customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = `
It was 94 fahrenheit outside, so :insertx: went for a walk. 
When they got to :inserty:, they stared in horror for a few moments, 
then :insertz:. Bob saw the whole thing, but was not surprised — 
:insertx: weighs 300 pounds, and it was a hot day.`

const insertX = [
'Willy the Goblin',
'Big Daddy',
'Father Christmas'
]

const insertY = [
'the soup kitchen',
'Disneyland',
'the White House'
]

const insertZ = [
'spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away'
]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

result();
randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14) + ' stone';
    let temperature =  Math.round((94-32)*5/9) + ' centigrade';
    newStory = newStory.replace(/300 pounds/, weight);
    newStory = newStory.replace(/94 fahrenheit/, temperature);
  }

  story.textContent = newStory;
}