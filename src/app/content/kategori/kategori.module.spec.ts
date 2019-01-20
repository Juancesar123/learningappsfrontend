import { KategoriModule } from './kategori.module';

describe('KategoriModule', () => {
  let kategoriModule: KategoriModule;

  beforeEach(() => {
    kategoriModule = new KategoriModule();
  });

  it('should create an instance', () => {
    expect(kategoriModule).toBeTruthy();
  });
});
