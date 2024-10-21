import { createContext, useEffect, useState } from "react";
import { Color } from "../constants/mapConstants";

export type MapMode = "satellite" | "map";

type ViewerContextProps = {
  map: mapboxgl.Map | undefined;
  setMap: React.Dispatch<React.SetStateAction<mapboxgl.Map | undefined>>;
  parentLayer: string;
  setParentLayer: React.Dispatch<React.SetStateAction<string>>;
  color: Color | undefined;
  setColor: React.Dispatch<React.SetStateAction<Color | undefined>>;
  mapMode: MapMode;
  toggleMapMode: () => void;
}

export const ViewerContext = createContext<ViewerContextProps>({} as ViewerContextProps);

/**
 * Context provider for the viewers (Cesium satellite / Mapbox map).
 */
export function ViewerContextProvider({children}: {children: React.ReactNode}) {
  const [map, setMap] = useState<mapboxgl.Map>();
  const [parentLayer, setParentLayer] = useState<string>("");
  const [color, setColor] = useState<Color>();
  const [mapMode, setMapMode] = useState<MapMode>(() => {
    const savedMapMode = localStorage.getItem("mapMode") as MapMode;
    return savedMapMode || "satellite";
  });

  useEffect(() => {
    // Modify UI theme according to the map mode.
    document.documentElement.setAttribute('map-mode', mapMode);
    localStorage.setItem("mapMode", mapMode);
  }, [mapMode]);

  const toggleMapMode = () => {
    setMapMode(prevMode => prevMode === "satellite" ? "map" : "satellite");
  }

  return (
    <ViewerContext.Provider
      value={{
        map,
        setMap,
        parentLayer,
        setParentLayer,
        color,
        setColor,
        mapMode,
        toggleMapMode,
      }}
    >
      {children}
    </ViewerContext.Provider>
  );
}