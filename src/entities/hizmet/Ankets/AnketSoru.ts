/**
 * @author mali.sahin
 * @since  03-Aug-18.
 */


export class AnketSoru {

  anketId: number;
  orgKod: string;
  soruId: number;
  soruSira: number;
  zorunlu: string;
  serSoruTnm: SerSoruTnm;
}


export class SerSoruTnm {
  iptal: string;
  orgKod: string;
  soruId: number;
  soruMethod: string;
  soruText: string;
  grpKod: string;
}
