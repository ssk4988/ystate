import { createMachine, assign } from "xstate";


export const machine = createMachine({
    id: "RoutineRabbit Website",
    initial: "Login",
    states: {
      Login: {
        on: {
          "Click login": {
            target: "Landing",
          },
          "Click signup": {
            target: "Signup",
          },
        },
      },
      Landing: {
        on: {
          "Click Go": {
            target: "CollectionHabits",
          },
          "Click Graphs": {
            target: "Data",
          },
          "Click Habits": {
            target: "Habits",
          },
          "Click Profile": {
            target: "Profile",
          },
          "Click Data": {
            target: "Data",
          },
          "Sign Out": {
            target: "Login",
          }
        },
      },
      CollectionHabits: {
        on: {
          Go : {
            target: "Rating",
          },
          cancel: {
            target: "Landing",
          },
          "Click Graphs": {
            target: "Data",
          },
          "Click Habits": {
            target: "Habits",
          },
          "Click Profile": {
            target: "Profile",
          },
          "Click Data": {
            target: "Data",
          },
          "Sign Out": {
            target: "Login",
          }
        },
      },
      Rating: {
        on: {
          Done: {
            target: "Landing",
            description: "Daily Check-In Done",
          },
          cancel: {
            target: "Landing",
          },
        },
      },
      Data: {
        on: {
          RoutineRabbit: {
            target: "Landing",
          },
          "Click Habits": {
            target: "Habits",
          },
          Profile: {
            target: "Profile",
          },
        },
      },
      Habits: {
        on: {
          "Click Data": {
            target: "Data",
          },
          Profile: {
            target: "Profile",
          },
          RoutineRabbit: {
            target: "Landing",
          },
          "Click Graphs": {
            target: "Data",
          },
          "Click Habits": {
            target: "Habits",
          },
          "Click Profile": {
            target: "Profile",
          },
          "Click Data": {
            target: "Data",
          },
          "Sign Out": {
            target: "Login",
          }
        },
      },
      Profile: {
        on: {
          "Click Habits": {
            target: "Habits",
          },
          "Click Data": {
            target: "Data",
          },
          "RoutineRabbit" : {
            target: "Landing",
          },
          "Click Graphs": {
            target: "Data",
          },
          "Click Habits": {
            target: "Habits",
          },
          "Click Profile": {
            target: "Profile",
          },
          "Click Data": {
            target: "Data",
          },
          "Sign Out": {
            target: "Login",
          }
        },
      },
      Signup: {
        on: {
          "Account made": {
            target: "Landing",
          },
        },
      },
    },
    context: {},
    predictableActionArguments: true,
    preserveActionOrder: true,
  });


  