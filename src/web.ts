import { WebPlugin } from '@capacitor/core';
import { TrueCaller OneTapPlugin } from './definitions';

export class TrueCaller OneTapWeb extends WebPlugin implements TrueCaller OneTapPlugin {
  constructor() {
    super({
      name: 'TrueCaller OneTap',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const TrueCaller OneTap = new TrueCaller OneTapWeb();

export { TrueCaller OneTap };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TrueCaller OneTap);
