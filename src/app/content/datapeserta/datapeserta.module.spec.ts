import { DatapesertaModule } from './datapeserta.module';

describe('DatapesertaModule', () => {
  let datapesertaModule: DatapesertaModule;

  beforeEach(() => {
    datapesertaModule = new DatapesertaModule();
  });

  it('should create an instance', () => {
    expect(datapesertaModule).toBeTruthy();
  });
});
