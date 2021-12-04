# Server-Books

A back-end server in Node.js that uses APIs made by NY Times (https://developer.nytimes.com/apis) and Google Books (https://developers.google.com/books/docs/overview)
and display 2 endpoints:
 
- 1st Endpoint: Returns the list of the various book lists present in the NY Times systems.
- 2nd Endpoint: Given the code of a list, it returns the list of books present in that list and enriches the content with the link to the preview of the book on google books.
 
# Install

Install package:
```
npm install
```
or 

```
yarn install
```
Create your `env` file and get API key or Other service that you want.

Starting server:
```
yarn dev
```
# ENDPOINTS
- basic: `/`

## NY Times:
- Go to https://developer.nytimes.com/ and get API_key
- Endpoint `welcome`: `/nytimes`
- Endpoint `books`: `/nytimes/books`
- Endpoint `book`: `/nytimes/books/:id`

## Google Books:
- Go to https://developers.google.com/books/docs/overview and get API_key
- Endpoint `welcome`: `/gbooks`