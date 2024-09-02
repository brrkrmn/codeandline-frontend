import server from './src/utils/setupMockServer';

beforeAll(() => {
  server.listen();
})

beforeEach(() => {
  server.resetHandlers();
})

afterAll(() => {
  server.close()
})

window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));
