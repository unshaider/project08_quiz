#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("Welcome to the TypeScript Quiz App!"));

interface Question {
  question: string;
  choices: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "What is TypeScript?",
    choices: [
      "A JavaScript framework",
      "A superset of JavaScript",
      "A CSS framework",
      "A database",
    ],
    correctAnswer: "A superset of JavaScript",
  },
  {
    question: "Who developed TypeScript?",
    choices: ["Google", "Facebook", "Microsoft", "Twitter"],
    correctAnswer: "Microsoft",
  },
  {
    question: "Which extension is used for TypeScript files?",
    choices: [".ts", ".js", ".tsx", ".jsx"],
    correctAnswer: ".ts",
  },
  {
    question: "Which command is used to compile TypeScript files?",
    choices: ["tsc", "node", "npm", "ng"],
    correctAnswer: "tsc",
  },
  {
    question:
      "What is the default type assigned to variables in TypeScript if not specified?",
    choices: ["string", "number", "any", "void"],
    correctAnswer: "any",
  },
  {
    question: "How do you define a function in TypeScript?",
    choices: [
      "function myFunction()",
      "def myFunction()",
      "func myFunction()",
      "function: myFunction()",
    ],
    correctAnswer: "function myFunction()",
  },
  {
    question:
      "Which of the following is a correct way to define an interface in TypeScript?",
    choices: [
      "interface MyInterface {}",
      "class MyInterface {}",
      "def MyInterface {}",
      "func MyInterface {}",
    ],
    correctAnswer: "interface MyInterface {}",
  },
  {
    question:
      "How do you define a variable with a specific type in TypeScript?",
    choices: [
      "let name: string",
      "let name = string",
      "let name: str",
      "let name => string",
    ],
    correctAnswer: "let name: string",
  },
  {
    question: "How do you define an array of numbers in TypeScript?",
    choices: [
      "let arr: number[]",
      "let arr: [number]",
      "let arr: array<number>",
      "let arr: [number[]]",
    ],
    correctAnswer: "let arr: number[]",
  },
  {
    question: "What is the correct way to define a tuple in TypeScript?",
    choices: [
      "let tuple: [string, number]",
      "let tuple: (string, number)",
      "let tuple: {string, number}",
      "let tuple: [string, number][]",
    ],
    correctAnswer: "let tuple: [string, number]",
  },
  {
    question: "Which of the following is true about TypeScript classes?",
    choices: [
      "They cannot have constructors",
      "They cannot extend other classes",
      "They support inheritance",
      "They do not support public and private access modifiers",
    ],
    correctAnswer: "They support inheritance",
  },
  {
    question: 'What is the purpose of the "readonly" modifier in TypeScript?',
    choices: [
      "To make a property immutable",
      "To make a property private",
      "To make a property protected",
      "To make a property optional",
    ],
    correctAnswer: "To make a property immutable",
  },
  {
    question: "How do you specify an optional property in an interface?",
    choices: [
      "property?: type",
      "property: type?",
      "property: type",
      "property => type",
    ],
    correctAnswer: "property?: type",
  },
  {
    question: 'What does the "!" (non-null assertion) operator do?',
    choices: [
      "Asserts that a value is not null or undefined",
      "Negates a boolean value",
      "Marks a variable as optional",
      "Defines a constant value",
    ],
    correctAnswer: "Asserts that a value is not null or undefined",
  },
  {
    question: 'What is the "unknown" type used for?',
    choices: [
      "For variables that can hold any value, but must be checked before using",
      "For declaring functions",
      "For creating interfaces",
      "For defining optional properties",
    ],
    correctAnswer:
      "For variables that can hold any value, but must be checked before using",
  },
  {
    question:
      "Which TypeScript feature allows you to create a new type from an existing type with some modifications?",
    choices: ["Type aliases", "Interfaces", "Mapped types", "Enums"],
    correctAnswer: "Mapped types",
  },
  {
    question: 'What is the purpose of the "extends" keyword in TypeScript?',
    choices: [
      "To create a subclass or derived class",
      "To define a new variable",
      "To import modules",
      "To declare an interface",
    ],
    correctAnswer: "To create a subclass or derived class",
  },
  {
    question: "How do you define a generic function in TypeScript?",
    choices: [
      "function myFunction<T>(arg: T): T",
      "function myFunction[arg: T]: T",
      "function myFunction(arg: T): T",
      "function myFunction{T}(arg: T): T",
    ],
    correctAnswer: "function myFunction<T>(arg: T): T",
  },
  {
    question: 'What is the purpose of the "never" type in TypeScript?',
    choices: [
      "To represent a value that never occurs",
      "To represent a value that can be any type",
      "To represent a value that is always null",
      "To represent an optional value",
    ],
    correctAnswer: "To represent a value that never occurs",
  },
  {
    question: "How do you import a module in TypeScript?",
    choices: [
      'import { module } from "module-name"',
      'require("module-name")',
      'include "module-name"',
      'import module from "module-name"',
    ],
    correctAnswer: 'import { module } from "module-name"',
  },
];

const askQuestion = async (question: Question) => {
  const { answer } = await inquirer.prompt({
    type: "list",
    name: "answer",
    message: question.question,
    choices: question.choices,
  });

  if (answer === question.correctAnswer) {
    console.log(chalk.green("Correct!"));
    return true;
  } else {
    console.log(chalk.red("Incorrect!"));
    return false;
  }
};

let score = 0;

for (const question of questions) {
  const isCorrect = await askQuestion(question);
  if (isCorrect) {
    score++;
  }
}

console.log(
  chalk.blue(`Your final score is ${score} out of ${questions.length}.`)
);
