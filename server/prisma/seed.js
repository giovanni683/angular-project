const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Cria um usuário de teste
  await prisma.user.upsert({
    where: { email: 'teste@teste.com' },
    update: {
      name: 'Teste',
      password: '$2b$10$QsALMrbuQaGOl0WjlIP1oe8V6L1a9f0TpNU584DN6oPG4xjWtPXiy',
      role: 'USER',
    },
    create: {
      name: 'Teste',
      email: 'teste@teste.com',
      password: '$2b$10$QsALMrbuQaGOl0WjlIP1oe8V6L1a9f0TpNU584DN6oPG4xjWtPXiy',
      role: 'USER',
    },
  });
  console.log('Usuário de teste criado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
