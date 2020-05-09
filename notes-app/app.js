const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


// Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'The Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Show a list',
    handler: function () {
        console.log('This is a list');
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reading som text',
    handler: function () {
        console.log('Reading some text');
    }
})

yargs.parse();
