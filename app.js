//Part One: Solidify Terminology:

//In your own terms, define the following terms:
// What is HTTP?
HTTP is a set of rules that specifies how communication should work 
between a browser and a web server. It includes specifying language, type of context,
HTTP is used to send request and receive responses between browser and server.

//- What is a URL?
URL stands for Uniform Resource Locator. A URL is nothing more than the address of a 
given unique resource on the Web. A URL is broken down into several componets including 
the protocol, the hostname, the port, the resource, and the query string. 

//- What is DNS?
Domain Name Systems (DNS) is like the phone book of the web. It's main purpose is to translate 
hostnames into their corresponding IP addresses.
//- What is a query string?
A query string is an optional last component of a URL and it's a way of providing or 
specifying additional information. The query takes the form of key- value pair and 
begins with a question mark.

//- What are two HTTP verbs and how are they different?
Get: Request without side effects (doens't change server data)
- Typically arguments passed along in query string
- Entering - URL- in- browser, checking links, and some form of submission
Post: Request with side effects (changes server data)
- Typically arguments sent as a body of the requests ( not in query string)
- Some form submission (but never entering entering-URL-in-browser links)
- Used when there's a side effect : sending mail.changing feed, charging credit card


//- What is an HTTP request?
HTTP request is a process that occurs when a client makes a request to the server to access specific
information or perform a certain action.

//- What is an HTTP response?
HTTP response is the process that occurs after the client's request for specific information
from the server, the server processes the request and sends back a response.

//- What is an HTTP header? Give a couple examples of request and response headers you have seen.
HTTP Headers are the core part of HTTP requests and responses, and carry information about the client
browser, the requested page, the server and more. They are an important part of the HTTP protocol and 
are using for passing additional information between the client and the server. 

ex:  mozilla/5.0 (windows NT 10.0, win 64; x64)
//- What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
1. The browser “resolves” the Name into an IP address using DNS
2. The browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things)
3. The server sends a response (typically, HTML, with a status code (200 if it was sucessful)
4. The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)
5. The browser makes separate HTTP requests for those resources and receives response from the server for each
