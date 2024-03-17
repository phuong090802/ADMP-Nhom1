import HomeContent from './HomeContent';
import HomeStore from './HomeStore';

import HomeRealmContext from '../../../../realm/context/home-realm-context';

const HomeScreen = () => {
  const { RealmProvider: HomeRealmProvider } = HomeRealmContext;

  return (
    <HomeRealmProvider>
      <HomeStore>
        <HomeContent />
      </HomeStore>
    </HomeRealmProvider>
  );
};

export default HomeScreen;
