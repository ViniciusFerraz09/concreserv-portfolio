export function saoPauloDay(date?:Date):string;
export function shiftDay(day:string,delta:number):string;
export function validDay(day:string):boolean;
export function dailySeries(args:{workId:string;plan:any;entries:any[];audit:any[];from:string;to:string;team?:string}):{date:string;quantity:number;target:number|null;entryIds:string[];targetSource:string}[];
