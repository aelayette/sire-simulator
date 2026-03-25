const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the project root
app.use(express.static(__dirname));

// Landing page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'SIRE.html'));
});

app.listen(PORT, () => {
  console.log(`SIRE simulator running at http://localhost:${PORT}`);
});
