export interface ResponseWorkPlanDetails {
  UUID_Sede: string;
  company_address: string;
  company_name: string;
  company_phone: null;
  contact_cc: null | string;
  contact_name: null | string;
  primary_secondary: PrimarySecondary;
  service_order: null | string;
  service_request: null | string;
  status: Status;
  tipo_cliente: string;
  uuid_wp_details: null;
  work_plan_detail_id: number;
  work_plan_id: string;
  work_plan_no: string;
}

export enum PrimarySecondary {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

export enum Status {
  NoSincronizado = 'No Sincronizado',
  Recolectado = 'Recolectado',
}
