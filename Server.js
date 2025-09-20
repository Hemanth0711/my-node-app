const express = require('express');
const app = express();
const port = 3004;

app.get('/', (req, res) => {
    res.send('Hello from Hemanth Jenkins CI/CD 🚀');
});

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
