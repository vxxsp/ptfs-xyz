export default interface Island {
  Airports: Airport[];
  Name: string;
}

export interface Airport {
  City?: string;
  ICAO?: string;
  Name: string;
  Island: string;
  IATA?: string;
  'Stud Coords': string;
  Runways: Runway[];
  'Geo Coords': string;
}

export interface Runway {
  Studs?: number;
  Feet?: number;
  Name: string;
  Headings: string;
}
