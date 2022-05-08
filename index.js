/*READ THIS
.........
DO NOT DELETE THIS TO SUPPORT ME TO MAKE MORE PORTOFOLIO WEBSITE
TRY TO MIND PEOPLE WHO WORK HARD ON CODE
.........
*/
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })  

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
/*READ THIS
.........
DO NOT DELETE THIS TO SUPPORT ME TO MAKE MORE PORTOFOLIO WEBSITE
TRY TO MIND PEOPLE WHO WORK HARD ON CODE
.........
*/