import { Router } from "express";
import { parseISO } from "date-fns";

import AppointmentsRepository from "../repositories/AppointmentsRepository";
import CreateAppointmentServices from "../services/CreateAppointmentService";

const appointmentsRepository = new AppointmentsRepository();

const appointmentsRouter = Router();

appointmentsRouter.get("/", (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post("/", (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentServices(
      appointmentsRepository
    );

    const appointment = createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

export default appointmentsRouter;
