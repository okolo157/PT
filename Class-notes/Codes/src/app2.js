const express = require("express")
const bcrypt = require('bcrypt');

const fs = require('fs').promises;
const app = express();
app.use(express.json());

app.get("/api/error", async (req, res) => {

    try {

        const logContent = await fs.readFile('app.log', 'utf8');


        const errorLogs = logContent
            .split('\n')
            .filter(line => line.includes('ERROR'));


        await fs.writeFile('errors.log', errorLogs.join('\n'));
        res.json({ message: "Files Exported Successfully" });

        console.log('Error logs extracted successfully');
    } catch (error) {
        console.error('Failed to process log file:', error);
    }



});

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

function validateUser(user) {
    const errors = [];


    if (!user.email) {
        errors.push('Email is required');
        console.log(errors)

    }

    if (!user.name) {
        errors.push('Name is required');
        console.log(errors)


    }

    if (user.name && (typeof user.name !== 'string')) {
        errors.push('Name must letters');
        console.log(errors)

    }


    if (user.email && !user.email.includes('@')) {
        errors.push('Invalid email format');
        console.log(errors)

    }

    if (!user.password) {
        errors.push("Password Does Not Exist");
        console.log(errors)

    }

    if (user.password && (user.password.length < 8)) {
        errors.push('Password must be more than 8 characters')
        console.log(errors)
    }


    if (user.age && (typeof user.age !== 'number' || user.age < 0)) {
        errors.push('Age must be a positive number');
        console.log(errors)
    }

    return errors;
}

function createUser(userData) {
    const errors = validateUser(userData);

    if (errors.length > 0) {
        throw createError('ValidationError', errors.join(', '));
    }


    const hashPwd = bcrypt.hashSync(userData.password, 10);
    console.log(hashPwd)

    return {
        ...userData,
        password: hashPwd,
        createdAt: new Date()
    };
}


app.post('/reg', async (req, res) => {
    try {
        const newUser = await createUser(req.body);



        res.json(newUser);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({
                error: 'Validation Failed',
                message: error.message
            });
        } else {
            res.status(500).json({
                error: 'Validation Failed',
                message: 'Something went wrong',
            });
        }
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



