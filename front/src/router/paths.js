/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/mariner/app',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  },
  {
    path: '/mariner/app/certificates',
    name: 'Certificates',
    view: 'Certificates'
  },
  {
    path: '/mariner/app/training-directions',
    name: 'Training Directions',
    view: 'TrainingDirections'
  },
  {
    path: '/mariner/app/edit-certificate/:id',
    name: 'Edit Certificate',
    view: 'EditCertificate'
  },
  {
    path: '/mariner/app/import-certificate',
    name: 'Import Certificate',
    view: 'ImportCertificate'
  },
  {
    path: '/mariner/app/profile',
    name: 'User Profile',
    view: 'UserProfile'
  }
]
