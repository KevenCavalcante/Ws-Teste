import mongoose from 'mongoose';

const URI = 'mongodb+srv://dbUser:dbUserPassword@dev.j1kgr.mongodb.net/dbVo2?retryWrites=true&w=majority';

let options = {};

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(URI, options)
  .then(() => console.log('DB is Up!'))
  .catch((err) => console.log(err));
