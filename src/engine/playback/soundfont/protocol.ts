import type { SamplePlan } from './plan';
import type { BankId } from './presets';
export type SampleCommand =
  | { type:'bank'; request:number; id:BankId; buffer:ArrayBuffer }
  | { type:'plan'; request:number; plan:SamplePlan; position:number; playing:boolean; catchUpTime?:number }
  | { type:'seek'; request:number; position:number; playing:boolean }
  | { type:'play'; request:number }
  | { type:'pause'; request:number; when?:number }
  | { type:'dispose'; request:number };
export type SampleReply =
  | { type:'ack'; request:number; position?:number }
  | { type:'position'; position:number; voices:number; seeking:boolean }
  | { type:'error'; request?:number; error:string };
