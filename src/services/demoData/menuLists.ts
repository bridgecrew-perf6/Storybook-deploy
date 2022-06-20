export const menuLists = [
  {
    title: 'Principal',
    icon: 'tachometer-alt',
    active: true,
    children: [
      {
        title: 'Ações',
        children: [
          {
            title: 'Meus perfil',
            url: '/meu-perfil'
          },
          {
            title: 'Usuários',
            url: '/usuarios'
          },
          {
            title: 'Usuários',
            url: '/usuarios'
          },
          {
            title: 'Usuários',
            url: '/usuarios'
          }
        ]
      },
      {
        title: 'PDV',
        children: [
          {
            title: 'Novo pedido',
            url: '/pdv'
          }
        ]
      },
      {
        title: 'Kanban',
        children: [
          {
            title: 'Certidões',
            url: '/kanban-certidao'
          },
          {
            title: 'Certidões » Contraditório',
            url: '/kanban-contraditorio'
          }
        ]
      }
    ]
  },
  {
    title: 'Relatórios',
    icon: 'file-alt',
    active: false,
    children: [
      {
        title: 'Financeiro',
        children: [
          {
            title: 'Exemplo de Relatório A',
            url: '/'
          }
        ]
      }
    ]
  }
]
