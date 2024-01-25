# express_conditionalRouting

STEPS TO RUN SERVER:
1. clone repo into your desired folder
2. open terminal and change directory to your folder, command may vary based on
   preference of terminal. `cd`
3. type command `node index.js` and hit enter
4. terminal will print message that server is running, then go to localhost:3000/foo to
   see results

HOW CONDITIONAL ROUTING IS IMPLEMENTED:

the routing is implemented by using app.get() with first parameter as `/foo` and second parameter as 
a callback function with three parameters (req, res, next) 

inside the callback function is two statements:

`const randomResponse = Math.random() < 0.5 ? 'sometimes this' : next();`

`res.send(randomResponse);`

first statement uses Math.random to generate number between 1 and 0 and is less than < 0.5 
if test is true "sometimes this" is displayed on page otherwise the next() function is called

next() will move to the next middleware function in the stack, in other words the next route handler for /foo
which is defined as "and sometimes that". 

second statement sends the random resposne to the server and based on that will display either "sometimes this" or "and sometimes that".

the second route handler for /foo is defined as follows underneath the first route handler:

    app.get('/foo', (req, res) => {
      res.send('and sometimes that');
    });`

   
