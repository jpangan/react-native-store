import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';

export enum Language {
  AR = 'ar',
  EN = 'en',
}

const useLanguage = () => {
  const lang: Language = I18nManager.isRTL ? Language.AR : Language.EN;

  const changeLang = () => {
    I18nManager.forceRTL(!I18nManager.isRTL);
    RNRestart.Restart();
  };

  return { lang, changeLang };
};

export default useLanguage;
