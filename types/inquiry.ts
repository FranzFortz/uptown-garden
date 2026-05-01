export type EventType = 'wedding' | 'birthday_debut' | 'corporate';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  event_type: EventType;
  event_date: string;
  guest_count?: number;
  message?: string;
  created_at: string;
}
