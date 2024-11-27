#AV2 API AEROPORTO

# classe: Passagem 

## 🚀 Funcionalidades

- Criar, listar, atualizar e excluir passagens;
- Gerenciar voos e check-ins;
- Relacionar passageiros e passagens.

##Exemplos

#Criar passagem 
- 1° testar com id falso para mostrar o funcionamento do relacionamento


POST http://localhost:3000/passagens/adicionar
{
  "codigo_passagem": "AV2_123",
  "classe": "econômica",
  "preco": 450.50,
  "data_compra": "2024-11-27T12:00:00.000Z",
  "status": "ativa",
  "vooId": 7
}

#Criar voo
POST http://localhost:3000/voos/
{
  "codigo_voo": "BR666",
  "destino": "Canada",
  "origem": "Acre",
  "horario_partida": "2024-12-01T10:00:00.000Z"
}



cancelar passagem
PUT http://localhost:3000/passagens/cancelar/1
(o 1 deve ser alterado pelo id desejado)

alterar passagem
PUT http://localhost:3000/passagens/alterar-voo/id

{
  "novoVooId": 2
}
