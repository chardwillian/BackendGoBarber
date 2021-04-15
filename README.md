# Recuperação de senha

**Requisito Funcional**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar senha;

**Requisito Não Funcional**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regra de Negócio**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha para reseta-lá;

# Atualização do perfil

**Requisito Funcional**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**Regra de Negócio**
- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**Requisito Funcional**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;


**Requisito Não Funcional**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regra de Negócio**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;


# Agendamento de serviços

**Requisito Funcional**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com o prestador;

**Requisito Não Funcional**

- A listagem de prestadores deve ser armazenada em cache;

**Regra de Negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h
- O usuário não pode agendar em um horario já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar consigo mesmo;
