# Roadtrip Itinerary

You're planning a roadtrip, and you want to build a simple express application to help you plan out the order that you'll be visiting different locations.

First, plan out a list of at least 5 places you'd like to visit on this trip (e.g. Boston -> NYC -> Chicago -> Boulder -> San Francisco)

Create a route for a home page that contains information about your starting location (e.g. Boston). On this page, there should be a link on this page that says "Next" which links the user to the next location in the trip, (e.g. NYC). On this second location, the user should see a similar page, only with information about the second location. This second page should also have a link that says "Next", which links to the third location.

Each page should follow this pattern, so that the user can keep clicking "Next" to get info about each stop on the trip, in order.

Each page should have at least one CSS file linked to it, and may use several images, if you like. Use the static middleware to serve these files, instead of making individual routes: `app.use(express.static())`

DO write individual routes to serve the HTML files, instead of relying on the static middleware. This lets us have pretty URLs like `/chicago` instead of `/chicago.html`.
