import { SubkategoriModule } from './subkategori.module';

describe('SubkategoriModule', () => {
  let subkategoriModule: SubkategoriModule;

  beforeEach(() => {
    subkategoriModule = new SubkategoriModule();
  });

  it('should create an instance', () => {
    expect(subkategoriModule).toBeTruthy();
  });
});
