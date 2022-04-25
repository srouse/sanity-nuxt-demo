export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-demo-studio',
                  apiId: '97ff7cff-8222-42d3-b200-18e88861a939'
                },
                {
                  buildHookId: '6266f4369acebe0f51bc877d',
                  title: 'Events Website',
                  name: 'sanity-nuxt-demo',
                  apiId: '8a721f4d-b9ab-4ed3-8093-c6ff8f20141f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/srouse/sanity-nuxt-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
