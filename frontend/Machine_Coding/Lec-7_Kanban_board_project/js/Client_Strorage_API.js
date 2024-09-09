/***
   Client Side Storage API:

    -  It's browser API to store data locally in the browser.
    -  makes the UX better by reducing the number of HTTP requests and enabling the offline usage.
    - Usage:
       - user preferences
       - session data
       - referesh token
       - redirection URL

    - majorly we 3 kind of client storage API:
      1. localStorage:
          - use to store user's data in key value format at the client side.
          - Storage limit: 5-10MB (varies by browser)
          - Presist the data even if your browser has been closed.
          - localStorage API
            1. localStorage.setItem('key', 'value');
            2. localStorage.getItem('key');
            3. localStorage.removeItem('key');
            4. localStorage.clear()
      2. sessionStorge
      3. cookie
 
 */