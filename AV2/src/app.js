const express = require('express');
const sequelize = require('./config/database');

//importar modelos
const Passageiro = require('./models/Passageiro');
const Voo = require('./models/Voo');
const Passagem = require('./models/Passagem');
const Checkin = require('./models/Checkin');

//importar rotas
const passageiroRoutes = require('./routes/passageiroRoutes');
const vooRoutes = require('./routes/vooRoutes');
const checkinRoutes = require('./routes/checkinRoutes');
const passagemRoutes = require('./routes/passagemRoutes'); 

const app = express();

app.use(express.json());

//rotas
app.use('/passageiros', passageiroRoutes);
app.use('/voos', vooRoutes);
app.use('/checkins', checkinRoutes);
app.use('/passagens', passagemRoutes); 


sequelize
  .sync({ force: false }) //force: true recria tudo ao sincronizar
  .then(() => {
    console.log('Banco de dados sincronizado!');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar banco de dados:', error);
  });


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
