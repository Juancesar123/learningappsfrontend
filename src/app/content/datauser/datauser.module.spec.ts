import { DatauserModule } from './datauser.module';

describe('DatauserModule', () => {
  let datauserModule: DatauserModule;

  beforeEach(() => {
    datauserModule = new DatauserModule();
  });

  it('should create an instance', () => {
    expect(datauserModule).toBeTruthy();
  });
});
