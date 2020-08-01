import { Router } from "express";
import { startOfHour, parseISO } from "date-fns";

import AppointmentsRepository from "../repositories/AppointmentsRepository";

const appointmentsRepository = new AppointmentsRepository();

const appointmentsRouter = Router();

appointmentsRouter.post("/", (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parsedDate
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: "This appointment is already booked" });
  }

  const appointment = appointmentsRepository.create(provider, parsedDate);

  return response.json(appointment);
});

export default appointmentsRouter;
