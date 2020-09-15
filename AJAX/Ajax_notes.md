# Ajax - Asynchronous javascript and XML
# sends request to the server asynchronously receives the response and loads the data without page refresh
# the data is not just limited to be XML, it could be JSON, text and html
# object used to perform AJAX is XHR (xml http request)
# fetch is a promise based library(web api) for ajax (newer and easier version built into web browser)
# axios is even better version of fetch, although we have to install it explicitly ( helps us perform get and post requests lot easily)



# promise small review:
# any callback function that returns promise does two things
# handles error - .then (success) and .catch(error)
# the callback function returns promise makes your code asynchronous