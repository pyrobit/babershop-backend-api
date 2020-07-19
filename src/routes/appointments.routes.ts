import { Router, request, response } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';
// parsIso converts a date in string to the json format native js Date(javascript)
// startOfHour gets a date and sets minutes and seconds as zero


const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response)=>{
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointments.find(appointment => isEqual(parsedDate,appointment.date));

  const appointment = {
    id: uuid(),
    provider,
    parsedDate
  }
  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
