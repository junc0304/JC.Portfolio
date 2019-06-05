const {createContainer, asClass, asFunction, InjectionMode} = require('awilix');

const authController = require('./controllers/AuthController.js');
const userController = require('./controllers/UserController.js');
const userDataHandler = require('./classes/UserDataHandler/UserDataHandler.js');

const jobController = require('./controllers/jobController.js');
const projectController =require('./controllers/ProjectController.js');
const educationController = require('./controllers/EducationController.js');
const profileController = require('./controllers/ProfileController.js');
const profileDataHandler = require('./classes/ProfileDataHandler/ProfileDataHandler.js');

const container = createContainer({injectionMode: InjectionMode.CLASSIC});

container.register({
  authController: asClass(authController),
  userController: asClass(userController),
  userDataHandler: asClass(userDataHandler).singleton(),

  jobController: asClass(jobController),
  projectController: asClass(projectController),
  educationController: asClass(educationController),
  profileController: asClass(profileController),
  profileDataHandler: asClass(profileDataHandler).singleton(),
})

global.container = container;