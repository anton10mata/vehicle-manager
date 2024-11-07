# Vehicle Manager CLI Application

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The **Vehicle Manager CLI** is a command-line application built with Node.js that allows users to create and manage various types of vehicles. This application helps users simulate vehicle management by providing different actions based on vehicle types. The Vehicle Manager supports creating cars, trucks, and motorbikes, with each vehicle type having unique attributes and functionalities.

The application uses the **Inquirer** package to prompt users for vehicle details and offers various actions based on the type of vehicle created. For example, users can create trucks with a specified payload capacity or motorbikes with a unique engine size. The Truck and Motorbike classes have additional properties and methods that are not present in the Car class, offering distinct behaviors and actions. This functionality ensures that each vehicle type provides a different experience when performing actions, such as hauling cargo for trucks or riding on the highway for motorbikes.

This project demonstrates object-oriented programming (OOP) principles, with a base `Vehicle` class and derived classes like `Car`, `Truck`, and `Motorbike`. The application offers a simple way for users to manage these vehicles and interact with them through a set of predefined actions. It is an excellent tool for practicing CLI-based interactions, inheritance in JavaScript, and implementing unique behaviors for different object types.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To install the necessary dependencies, navigate to the project directory and run:

## Usage

To use the application, run the following command in your terminal:

The application will prompt you to either create a new vehicle or use an existing vehicle. Follow the prompts to enter details about the vehicle, select actions, and manage your vehicles. You can create cars, trucks, and motorbikes, each with unique properties and actions.

### Creating a Vehicle

1. Choose to create a new vehicle.
2. Select the type of vehicle (Car, Truck, or Motorbike).
3. Enter the brand, model, and year for all vehicles.

### Using an Existing Vehicle

1. Choose to use an existing vehicle from the list.
2. Perform available actions specific to that vehicle type.

### Unique Actions for Each Vehicle Type

- **Car**:
  - **Drive**: The car can be driven around the neighborhood.

- **Truck**:
  - **Haul Cargo**: The truck can haul heavy cargo.

- **Motorbike**:
  - **Zoom Down the Highway**: The motorbike can zoom down the highway.

These actions ensure that each vehicle type has a unique set of behaviors and provides a different experience when using the application.

## Walkthrough Video

For a detailed walkthrough of the application's functionality, watch the video below:

[![Walkthrough Video](https://img.youtube.com/vi/07o5l7zR8o0/0.jpg)](https://youtu.be/07o5l7zR8o0)

[Click here to view the walkthrough video](https://youtu.be/isB6P7t97co)

The walkthrough video demonstrates:

- How to invoke the application from the command line.
- How to create a new vehicle and enter all necessary details.
- How to select an existing vehicle and perform unique actions.
- All the prompts and functionality related to cars, trucks, and motorbikes working properly.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Contributing

If you would like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request. Any contributions that improve functionality or add new features are welcome.

## Questions

If you have any questions or need further assistance, feel free to reach out:

- **GitHub**: [anton10mata](https://github.com/anton10mata)
- **Email**: [antoniomatallc@gmail.com](mailto:antoniomatallc@gmail.com)

