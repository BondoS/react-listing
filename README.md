This project is a demonstration of an E-commerce platform, represented by a Hotel rooms bookings portal. it is built with React-Redux, and it uses a local JSON-Server which exposes some endpoints to import the data.

#### How to run the project

- run `yarn install` to install npm_modules.
- run `yarn dev-server` to load the server.
- run `yarn start` to load the client.

---

#### React Testing Library

- This project includes some tests with RTL.
  ![image](https://user-images.githubusercontent.com/2457873/155895224-d262af22-563d-45f9-9738-f59c45f0fb2e.png)

---

#### Environment variables contain

- `REACT_APP_API` > API url.
- `REACT_APP_CACHE` > Number of seconds to cache project data within the redux store.
  - Default is 10 seconds.
- `REACT_APP_HOTELS_PER_PAGE` Number of hotels to be rendered per page.
  In order the changes to take effect, you must rebuild the project.

---

#### Redux

- I used **[Redux Toolkit](https://redux-toolkit.js.org/)**, which is the official most efficient way to write **Redux** currently, I don't need to edit 10 files in order to add new feature anymore.
- To maintain scalability, I built a **createSliceEnhancer** function over **createSlice** in order to add as many as properties as we may need in the future, not just hotels and/or rooms, I can actually load any other kind of properties with just exactly two lines to edit and all the new property data will be available in the store, and set/get/delete will be available too.
- Each list of properties are represented by
  1. Array of their Ids.
  2. Object with Ids as keys and actual property as value. <br />
     Just in case we need to sort or reference the properties in multiple locations within the app, the properties object will remain untouched, while a new array of Ids can be created. [Dan Abramov reference](https://egghead.io/lessons/javascript-redux-normalizing-the-state-shape)

---

##### Multi-language

- All data is translated and available with English and German - Plz excuse my German, I used Google translate, I'm sure a lot of data might not be accurately translated -.
- To edit property translation, each property has an En and De titles and description.
- To edit fields placeholders, please check public/locales folder

---

#### Abstraction & Enums

- I have converted amenities, prices, rating to key value pairs, In order to add as many as we need in the future, and to abstract them from their translation, and I saved only their integer representation in the Database, so as to consume less memory space.

---

#### Filter

- The single source of truth for the **filter** and **sort** is the **URL**, minimal data saved in the store related to the filter, like number of pages for current filter, or resulted hotels Ids for current active page.

---

#### Sort

- Sorting techniques are abstracted into separate file which is src/utils/sort.js, I can add and/or edit as many sorting techniques as we may need in the future, the first sorting technique is the default, which is "Desc" by **rating**.

---

#### Admin pages "Dashboard area"

- Main page includes two buttons to add hotel and/or room. and two lists for current hotels/rooms in order to edit or delete them.
- Edit pages for hotel and room.

---

#### Public pages

- **Home page** filter is collapsed by default if the client device innerWidth less than 768px which is usually tablet or mobile.
  - because of the screen real estate shortage, I need the user to find what he/she is looking for, which are the hotels.
- **Hotel page** which presents all rooms.
- **Confirmation page** confirmation data is saved in local storage, you can bookmark and return to this page without any API calls and even if there is no internet connection.

---

#### React Portals

- React [portals](https://reactjs.org/docs/portals.html) are used to render a pop up modal as a direct child for < body /> tag.

---

#### UX

- Using the red color for call to action buttons in home page and hotel page. [link](https://usabilitygeek.com/traffic-lights-ux-smart-color/)
- Loading bar to clarify page loading to user.
- There are numerous possibilities for UX enhancements, like adding ripple buttons feedback, scroll edges feedback, .... [Don't make me think](https://uxplanet.org/dont-make-me-think-20-wise-thoughts-about-usability-from-steve-krug-876b563f1d63)

---

#### UI

- Images are now zoomed in on hover with a simple css trick I did, carousel should be implemented in the future and different zoom technique.
- I used styled-components to compose different UI elements, further abstraction needed in the future.

---

#### TODO

- Validation
- Add more clear call to action in Home page.
- Enhance overall UI.
- Split main Admin page into two pages, one for rooms and one for hotels.
- Shorter confirmation ID is a must in the future.
- Split Components to be more modular.
