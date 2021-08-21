export default {
  addListener: jest.fn(),
  getCurrentPosition: jest.fn(),
  removeListeners: jest.fn(),
  requestAuthorization: jest.fn().mockReturnValue('granted'),
  setConfiguration: jest.fn(),
  startObserving: jest.fn(),
  stopObserving: jest.fn(),
};
