import React, { useContext, useState, useEffect } from 'react';
import { I18nManager } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const SiteDirectionContext = React.createContext<any>({});

export const useSiteDirection = () => {
  const { isRtl, directionStyles } = useContext(SiteDirectionContext);

  return {
    isRtl,
    directionStyles
  };
};

const rtlStyles = {
  direction: 'rtl',
  writingDirection: 'rtl'
};

const ltrStyles = {
  direction: 'ltr',
  writingDirection: 'ltr'
};

export const SiteDirectionContextProvider = ({ children }: any) => {
  const [isRtl, setIsRtl] = useState(I18nManager.isRTL);
  const [directionStyles, setDirectionStyles] = useState({});
  const { lang } = useSelector((state: RootState) => state.environment);

  const changeDirection = async (val: boolean) => {
    await I18nManager.forceRTL(val);
  };

  useEffect(() => {
    const rtl = lang === 'ar' ? true : false;
    changeDirection(rtl);
    setIsRtl(rtl);
    setDirectionStyles(rtl ? rtlStyles : ltrStyles);
  }, [lang]);

  return (
    <>
      <SiteDirectionContext.Provider value={{ isRtl, directionStyles }}>
        {children}
      </SiteDirectionContext.Provider>
    </>
  );
};

export default SiteDirectionContextProvider;
