const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Implement route handler for /foo
app.get('/foo', (req, res, next) => {
    
    // Randomly choose between two responses or pass control to the next applicable route
    const randomResponse = Math.random() < 0.5 ? 'sometimes this' : next();
    
    res.send(randomResponse);
});
  
// Implement a second route handler for /foo
app.get('/foo', (req, res) => {
    res.send('and sometimes that');
});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});
  
  
