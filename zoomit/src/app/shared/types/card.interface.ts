import { Rating } from './rating.interface';
import { Session } from './session.interface';
import { Tutor } from './tutor.interface';

export interface Card {
  id: string;
  mainImageUrl: string;
  title: string;
  subjects: string[];
  sessions: Session[];
  tutor: Tutor;
  rating: Rating;
}
