import inquirer from 'inquirer';
import { Vehicle, Car, Truck, Motorbike } from './Vehicle.js';

const { prompt } = inquirer;
const vehicles = [];

// Main Menu
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

// Create New Vehicle
const createNewVehicle = async () => {
  const { type } = await prompt([
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

  switch (type) {
    case 'Car':
      newVehicle = new Car(vehicleDetails.brand, vehicleDetails.model, vehicleDetails.year);
      break;
    case 'Truck':
      const { towingCapacity } = await prompt([
        { type: 'input', name: 'towingCapacity', message: 'Enter the towing capacity (in lbs):' },
      ]);
      newVehicle = new Truck(vehicleDetails.brand, vehicleDetails.model, vehicleDetails.year, towingCapacity);
      break;
    case 'Motorbike':
      const { frontTireDiameter, rearTireDiameter, tireBrand } = await prompt([
        { type: 'input', name: 'frontTireDiameter', message: 'Enter the front tire diameter (in inches):' },
        { type: 'input', name: 'rearTireDiameter', message: 'Enter the rear tire diameter (in inches):' },
        { type: 'input', name: 'tireBrand', message: 'Enter the tire brand:' },
      ]);
      newVehicle = new Motorbike(vehicleDetails.brand, vehicleDetails.model, vehicleDetails.year, frontTireDiameter, rearTireDiameter, tireBrand);
      break;
  }

  vehicles.push(newVehicle);
  console.log(`Created a new vehicle: ${newVehicle.getInfo()}`);
  await promptAction(newVehicle);
};

// Use Existing Vehicle
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
  const actionChoices = ['Go Back to Main Menu'];

  if (vehicle instanceof Truck) {
    actionChoices.unshift('Tow');
  } else if (vehicle instanceof Motorbike) {
    actionChoices.unshift('Perform Wheelie');
  } else if (vehicle instanceof Car) {
    actionChoices.unshift('Drive');
  }

  const { action } = await prompt([
    {
      type: 'list',
      name: 'action',
      message: `What would you like to do with the ${vehicle.getInfo()}?`,
      choices: actionChoices,
    },
  ]);

  if (action === 'Tow' && vehicle instanceof Truck) {
    console.log(vehicle.tow());
  } else if (action === 'Perform Wheelie' && vehicle instanceof Motorbike) {
    console.log(vehicle.wheelie());
  } else if (action === 'Drive' && vehicle instanceof Car) {
    console.log(vehicle.performAction());
  } else {
    await promptMainMenu();
    return;
  }

  await promptAction(vehicle);
};

// Start the application
promptMainMenu();
