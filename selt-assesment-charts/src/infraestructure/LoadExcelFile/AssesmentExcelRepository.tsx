import { Schema } from "read-excel-file"
import { Assesment } from "../../Domain/Assesment"

export interface AssesmentExcelRepository{
  transformRowsToAssesment: (rows: object[]) => Assesment
  getSchema: () => Schema
}