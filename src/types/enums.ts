// https://stackoverflow.com/questions/38335668/how-to-refer-to-typescript-enum-in-d-ts-file-when-using-amd/48159049#48159049

export const enum TruckStatus {
  OUT_OF_SERVICE = 0,
  LOADING,
  TO_JOB,
  AT_JOB,
  RETURNING
}
