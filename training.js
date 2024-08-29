const students1 = [
    {
        firstName:'hauwau',
        lastName:'ibrahim',
        age: 15,
        gender:'female',
        address: 'duala',
        marks:[29 ,67,85],

    },

    {
        firstName:'ibrahim',
        lastName:'sani',
        age: 63,
        status: true,
        gender:'male',
        address: 'duala',
        marks:[100 ,97,90],
        

    },
];



const students = [
    {
        firstName:'hauwau',
        lastName:'ibrahim',
        age: 15,
        gender:'female',
        address: 'duala',
        marks:[100 ,97,90],

    },

    {
        firstName:'ibrahim',
        lastName:'sani',
        age: 63,
        status: true,
        gender:'male',
        address: 'duala',
        marks:[100 ,97,90],
        

    },
];

const students2 = [
    {
        firstName:'saratu',
        lastName:'labaran',
        age: 15,
        gender:'female',
        address: 'duala',

    },

    {
        firstName:'ali',
        lastName:'ibrahim',

        age: 63,
        status: true,
        gender:'male',
        address: 'duala',
        marks:[100 ,97,90],
        

    },
];



const combine = students.concat(student2);
console.log(combine);

const keys = Object.keys(students1);
console.log(keys);







//students.forEach((student) => {
    //const fullName = student.firstName + '' + student.lastName;
   // console.log(fullName);
//});