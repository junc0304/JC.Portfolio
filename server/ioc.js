const {createContainer, asClass, asFunction, InjectionMode} = require('awilix');
const jobController = require('./controllers/jobController');
const jobDataManager = require('./classes/jobDataManager');
const jobDataAdapter = require('./classes/jobDataAdapter');

const container = createContainer({injectionMode: InjectionMode.CLASSIC});

container.register({
  jobDataAdapter: asClass(jobDataAdapter).singleton(),
  jobDataManager: asClass(jobDataManager),
  jobController: asClass(jobController)
})

global.container = container;