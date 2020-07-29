import Appointment from '../models/Appointment'
import appointmentsRouter from '../routes/appointments.routes';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appointment) // recebe o Model Appointment
class AppointmentsRepository extends Repository<Appointment> {

  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date }, // {date} or { date: date} (same)
    })
    return findAppointment || null;
  }
}
export default AppointmentsRepository;
