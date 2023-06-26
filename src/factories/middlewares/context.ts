import { ContextController } from '../../presentation/controllers/middlewares';

const makeContext = () => {
  return new ContextController().context;
};

export { makeContext };
