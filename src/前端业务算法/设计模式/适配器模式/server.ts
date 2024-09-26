let express = require('express');
let app = express();
app.get('/api/user', (req:any, res:any) => {
    res.json({ id: req.query.id, name: 'zhufeng' });
});
app.listen(8080, () => {
    console.log("server is running at http://localhost:8080");
});