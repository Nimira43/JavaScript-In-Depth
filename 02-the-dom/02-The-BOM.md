## The BOM

###### The BOM, or Browser Object Model, represents the structure and functionality available to interact with the browser itself. While the DOM (Document Object Model) is all about manipulating the web page's content, the BOM focuses on the browser environment around the page. Here's what it entails:

#### Key Features of the BOM:
##### Window Object:

###### The top-level object of the BOM hierarchy.

###### Represents the browser window or tab.

###### Provides access to properties like window.alert, window.location, and methods like window.open().

##### Navigator Object:

###### Contains information about the user's browser.

###### Examples include navigator.userAgent (detects the browser type) and navigator.geolocation (handles location data).

##### Location Object:

###### Represents the URL of the current page.

###### You can interact with it using methods like location.href (to get or set the URL) and location.reload().

##### History Object:

###### Provides access to the user's browsing history for the session.

###### Methods like history.back() and history.forward() allow navigation between pages.

##### Screen Object:

###### Provides information about the user's screen, such as dimensions (screen.width, screen.height).

##### Document Object:

###### While part of the BOM, it's also central to the DOM. It lets you interact with the page content via document.querySelector, etc.

##### Example Usage:

```
// Redirect to another page
window.location.href = "https://www.example.com"

// Show an alert
window.alert("Hello, world!")

// Log screen dimensions
console.log(`Width: ${screen.width}, Height: ${screen.height`)
```

##### Differences Between BOM and DOM:
###### DOM: Represents the structure and content of the web page (e.g., HTML elements).

###### BOM: Represents the browser environment (e.g., history, screen dimensions, navigation).