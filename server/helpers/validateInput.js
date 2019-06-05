const Joi = require('@hapi/joi');
module.exports = {
  validateBody: schema => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if(result.error) {
        return new Error(result.error);
      }
      if(!req.value) {
        req.value = {};
      }
      req.value['body'] = result.value;
      next();
    }
  },

  schemas: {
    signUp: Joi.object().keys({
      email:    Joi.string().email({ minDomainSegments: 2 }).required(true, 'please enter valid email'),
      password: Joi.string().required(true, 'please enter valid password'),
      nickName: Joi.string().required(true, "Please enter nick name field"),
      address:  Joi.string(),
      lastName: Joi.string(),   
      firstName:Joi.string(),   
      phone:    Joi.string(), 
      linkedIn: Joi.string(),
      facebook: Joi.string(),    
    }),
    signIn: Joi.object().keys({
      email:    Joi.string().email().required(true, 'please enter valid email'),
      password: Joi.string().required(true, 'please enter valid password')
    }),

  }
}