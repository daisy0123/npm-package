import type { App } from 'vue';
import { SFCWithInstall } from '../../typings/global';
import QButtonView from './index.vue';

const QButton: SFCWithInstall<typeof QButtonView> =
  QButtonView as SFCWithInstall<typeof QButtonView>;

QButton.install = (app: App): void => {
  app.component('QButton', QButton);
};

export { QButton };
