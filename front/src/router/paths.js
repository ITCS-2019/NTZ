/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/mariner/app/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
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
    path: '/mariner/app/import-certificate',
    name: 'Import Certificate',
    view: 'ImportCertificate'
  },
  {
    path: '/mariner/app/profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/mariner/app/sailors',
    name: 'Sailors',
    view: 'Sailors'
  },
  {
    path: '/mariner/app/training-organisations',
    name: 'Training Organisations',
    view: 'TrainingOrganisations'
  },
  {
    path: '/mariner/app/training-organisations/:id',
    name: 'Training Organisation',
    view: 'TrainingOrganisation'
  },
  {
    path: '/mariner/app/training-organisations/edit/:id',
    name: 'Edit Training Organisations',
    view: 'EditTrainingOrganisations'
  },
  {
    path: '/mariner/app/users',
    name: 'Users',
    view: 'Users'
  },
  {
    path: '/mariner/app/regulations',
    name: 'Regulations',
    view: 'Regulations'
  },
  {
    path: '/mariner/app/regulations/edit/:id',
    name: 'Regulation',
    view: 'EditRegulations'
  }
]
