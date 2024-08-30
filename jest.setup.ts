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