import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import { startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm';

// Request DTO
interface Request {
  provider: string;
  date: Date;

}

class CreateAppointmentService {

  public async execute({ provider, date }: Request): Promise<Appointment> {

    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    // receives all the appointment creation logic
    const appointmentDate = startOfHour(date); // business related rule requirement

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);
    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');

    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment); // save created appointment into the DB

    return appointment;
  }

}

export default CreateAppointmentService;
