import { VideopembelajaranModule } from './videopembelajaran.module';

describe('VideopembelajaranModule', () => {
  let videopembelajaranModule: VideopembelajaranModule;

  beforeEach(() => {
    videopembelajaranModule = new VideopembelajaranModule();
  });

  it('should create an instance', () => {
    expect(videopembelajaranModule).toBeTruthy();
  });
});
