# Server-Books

Un server back-end in Node.js che utilizza le APIs realizzate da NY Times (https://developer.nytimes.com/apis) e Google Books (https://developers.google.com/books/docs/overview) 
ed esponga 2 endpoints:
 
- 1° Endpoint: Restituisce l'elenco delle varie liste di libri presenti nei sistemi del NY Times.
- 2° Endpoint: Dato il codice di una lista restituisce l'elenco dei libri presenti in quella lista e arricchisce il contenuto con il link alla preview del libro su google books.
 
# Install

```
yarn install

```

# NY Times:
- Go to https://developer.nytimes.com/ and get API_key
- Endopint: `/nytimes`