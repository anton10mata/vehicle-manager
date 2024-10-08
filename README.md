# Vehicle Manager CLI Application

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The Vehicle Manager CLI is a command-line application built with Node.js that allows users to create and manage various types of vehicles. This application helps users simulate vehicle management by providing different actions based on vehicle types. The Vehicle Manager supports creating cars, trucks, and motorbikes, with each vehicle type having unique attributes and functionalities.

The application uses the Inquirer package to prompt users for vehicle details and offers various actions based on the type of vehicle created. For example, users can create trucks with a specified payload capacity or motorbikes with a unique engine size. The Truck and Motorbike classes have additional properties and methods that are not present in the Car class, offering distinct behaviors and actions. This functionality ensures that each vehicle type provides a different experience when performing actions, such as hauling cargo for trucks or riding on the highway for motorbikes.

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

```bash
npm install
