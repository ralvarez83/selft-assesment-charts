import type { Schema } from "read-excel-file/browser"
import { Assesment } from "../../Domain/Assesment"

// `Row` es la forma del objeto que produce el esquema del Excel, distinta para
// cada tipo de auto-evaluación.
export interface AssesmentExcelRepository<Row extends object = object>{
  transformRowsToAssesment: (rows: Row[]) => Assesment
  getSchema: () => Schema<Row>
}
