# STOCK PICKER

A simple stock Picker which has autocomplete to show data and we can view information of a particular stock which is refreshed after a particular time.

### Setup

`yarn`

### Run It

`yarn start`

---

### Updates

The API we rely on for this exercise [alphavantage.co](https://www.alphavantage.co/) is free. This update also includes error handling that will log the message from the API and avoid showing the react crash screen.
Acceptance Criteria:

-   Used React Hooks and Redux for state mangement.
-   Based on the user's input, the user gets a list of stock symbols and company
    names in a dropdown below the input field while typing in the search field (i.e.
    AutoComplete).
-   Show message if no results are found.
-   User can click any of the items in list to get a detailed view of the selected stock.
-   If user performs multiple search he should be able to navigate back and forward to show previous or next item.
-   The stock detail page should show refreshed data in a certain time interval (made this very high else API runs out of Limit).
-   If the user clicks enter or search button without autocomplete selection it should show the stock details if the symbol exist else show stock not found message.
-   Stock price chart for the day using Google CHART js.
-   Hoisted on https://stock-info20.herokuapp.com/
-   All LightHouse Params are above 80
-   ![alt text](https://user-images.githubusercontent.com/6905324/145756100-9a1ce6f9-7ea7-428d-a6f3-955543976a10.png)

---

This app was built using [Create React App](https://create-react-app.dev/).
