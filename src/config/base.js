// Base application config.
export default {
  comments: {
    startingLimit: 5,
    expandLimit: 25,
    failThreshold: 5,
    fetchDelay: 60000,
  },
  featureFlags: {
    hideAppliedSavedOnJobIndex: true,
  },
  fullScreenPaths: [
    '/profile/new',
  ],
  fullTimeJobTypeId: '5124b71a-19ad-42ee-8779-de3433bf7f88',
  modalPaths: [
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
  ],
  nonceInterval: 1000 * 60 * 90,
  posts: {
    maxPage: 20,
  },
  profile: {
    descriptionLimit: 200,
    coinvestorsPerPage: 10,
    investorPortfolioPerPage: 10,
    similarCompaniesPerPage: 6,
    teamPerPage: 4,
    teamPhotoLimit: 6,
    defaultCompanyImageUrl: 'https://staticid.techinasia.com/assets/images/company-logos/icon-placeholdercompany.png',
  },
  requestTimeout: 30000,
  taxonomiesId: {
    accelerator: 'fe16590e-fee1-48be-b935-e22538599dbe',
    corporate: '94aac83b-c6a0-4e09-85d6-6a2c34a5798e',
    'private-equity': '4bec6246-6298-4552-88ad-045723033349',
    startup: '0eb89e73-b4bf-4024-92b4-802d7f6f5291',
    'venture-capital': 'd258a32c-429b-496c-b9c1-8effb7895a1e',
  },
  techinasiaSiteImageUrl: 'https://staticid.techinasia.com/assets/images/favicon/favicon-194x194.png',
  websiteSiteId: '0dd8d02e-1255-492a-b484-150e47be1385',
  cdnUrl: 'https://staticid.techinasia.com',
};
