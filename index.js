// index.js
import inquirer from 'inquirer';
const { prompt } = inquirer;
import { Vehicle, Car, Truck, Motorbike } from './Vehicle.js';

// Array to store existing vehicles
const vehicles = [];

// Function to display the main menu
const promptMainMenu = async () => {
  const answers = await prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Do you want to create a new vehicle or use an existing vehicle?',
      choices: ['Create New Vehicle', 'Use Existing Vehicle', 'Exit'],
    },
  ]);

  switch (answers.choice) {
    case 'Create New Vehicle':
      await createNewVehicle();
      break;
    case 'Use Existing Vehicle':
      await useExistingVehicle();
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit();
  }
};

// Function to create a new vehicle
const createNewVehicle = async () => {
  const vehicleType = await prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Choose the vehicle type:',
      choices: ['Car', 'Truck', 'Motorbike'],
    },
  ]);

  const vehicleDetails = await prompt([
    { type: 'input', name: 'brand', message: 'Enter the vehicle brand:' },
    { type: 'input', name: 'model', message: 'Enter the vehicle model:' },
    { type: 'input', name: 'year', message: 'Enter the vehicle year:' },
  ]);

  let newVehicle;

  switch (vehicleType.type) {
    case 'Car':
      newVehicle = new Car(vehicleDetails.brand, vehicleDetails.model, vehicleDetails.year);
      break;
    case 'Truck':
      newVehicle = new Truck(vehicleDetails.brand, vehicleDetails.model, vehicleDetails.year);
      break;
    case 'Motorbike':
      newVehicle = new Motorbike(vehicleDetails.brand, vehicleDetails.model, vehicleDetails.year);
      break;
  }

  vehicles.push(newVehicle);
  console.log(`Created a new vehicle: ${newVehicle.getInfo()}`);
  await promptAction(newVehicle);
};

// Function to select and use an existing vehicle
const useExistingVehicle = async () => {
  if (vehicles.length === 0) {
    console.log('No existing vehicles found. Create a new vehicle first.');
    return promptMainMenu();
  }

  const { selectedVehicle } = await prompt([
    {
      type: 'list',
      name: 'selectedVehicle',
      message: 'Select an existing vehicle to use:',
      choices: vehicles.map((vehicle, index) => ({
        name: vehicle.getInfo(),
        value: index,
      })),
    },
  ]);

  await promptAction(vehicles[selectedVehicle]);
};

// Function to perform actions on a vehicle
const promptAction = async (vehicle) => {
  const action = await prompt([
    {
      type: 'list',
      name: 'action',
      message: `What would you like to do with the ${vehicle.getInfo()}?`,
      choices: ['Perform Action', 'Go Back to Main Menu'],
    },
  ]);

  if (action.action === 'Perform Action') {
    console.log(vehicle.performAction());
    await promptAction(vehicle);
  } else {
    await promptMainMenu();
  }
};

// Start the application
promptMainMenu();