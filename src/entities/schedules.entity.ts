import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './users.entity';
import RealEstate from './real_state.entity';

@Entity('schedules')
class Schedule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  hour: Date;

  @ManyToOne(() => User, (user) => user.schedules)
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  realEstate: RealEstate;
}

export default Schedule;