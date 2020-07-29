# Barber shop backend Prototype
## A nodejs express backend API to manage appointments scheduling of a barber service

> This project is set to run on your localhost, you may customize password, username and db name as you wish. check it on root folder file ormconfig.json

### Technologies
* Typescript
* Nodejs
* Express

### File structure


```
src
├── database
│   ├── index.ts
│   └── migrations
│       └── 1595533688353-CreateAppointments.ts
├── models
│   └── Appointment.ts
├── repositories
│   └── AppointmentsRepository.ts
├── routes
│   ├── appointments.routes.ts
│   └── index.ts
├── server.ts
├── services
│   └── CreateAppointmentService.ts
├── tsconfig.json
├── vscodeUserSettings.json
├── yarn.lock
├── package.json
├── ormconfig.json
├── prettier.config.js
└── README.md
```


