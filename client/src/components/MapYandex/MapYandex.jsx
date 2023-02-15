import React, { useEffect, useRef, useState } from 'react';
import {
  YMaps, Map, ZoomControl, SearchControl, GeolocationControl, FullscreenControl,
} from '@pbe/react-yandex-maps';

const style = {
  width: '350px',
  height: '800px',
};

export default function MapYandexFinal() {
  const [text, setText] = useState(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (text && searchRef.current) {
      searchRef.current.search(text);
    }
  }, [text]);

  return (
    <YMaps
      query={
        { apikey: 'd1254f0b-df49-4875-887b-67d0a18123f7' }
        }
    >
      <Map
        style={style}
        defaultState={{
          center: [57.871648, 35.005739],
          zoom: 10,
          controls: [],
        }}
      >
        <GeolocationControl
          onLoad={() => setText('Фитнес')}
          options={{ float: 'left' }}
        />
        <ZoomControl options={{ float: 'right' }} />
        <SearchControl
          instanceRef={(ref) => {
            if (ref) searchRef.current = ref;
          }}
          options={{
            float: 'right',
            provider: 'yandex#search',
            searchCoordOrder: 'latlong',
            placeholderContent: 'Search',
          }}
        />
        <FullscreenControl />
      </Map>
    </YMaps>
  );
}
