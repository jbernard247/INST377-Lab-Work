const array = [];
dataHandler(array);
async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form');
  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  if (dataHandler.length >= 0) {
    form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      console.log('form submission'); // this is substituting for a "breakpoint"
      console.table(arrayFromJson.data); // this is called "dot notation"
      // arrayFromJson.data - we're accessing a key called 'data' on the returned object
      // it contains all 1,000 records we need

      // updating with CSS
      const root = document.documentElement;
      root.addEventListener('mousemove', () => {
        root.style.setProperty('display');
      });
    });
  }
  const root2 = document.documentElement;
  root2.addEventListener('mousemove', () => {
    root2.style.setProperty('display');
  });
  dataHandler.push(math.random() * 15);
}
dataHandler();
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
