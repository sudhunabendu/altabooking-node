exports.generatePassword = (length = 8, availableSets = 'luds') => {
    const sets = [];

    if (availableSets.includes('l')) {
        sets.push('abcdefghjkmnpqrstuvwxyz');
    }

    if (availableSets.includes('u')) {
        sets.push('ABCDEFGHJKMNPQRSTUVWXYZ');
    }

    if (availableSets.includes('d')) {
        sets.push('23456789');
    }

    if (availableSets.includes('s')) {
        sets.push('@#$%^&*()-_=+?/');
    }

    let all = '';
    let password = '';

    // Ensure each set is represented at least once
    sets.forEach(set => {
        password += set.charAt(Math.floor(Math.random() * set.length));
        all += set;
    });

    // Create a single string with all characters from all sets
    all = all.split('');

    // Fill the rest of the password length with random characters from the combined sets
    for (let i = 0; i < length - sets.length; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }

    // Shuffle the password to ensure randomness
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
}


exports.isExist = (table, col, value, id = '') => {
    if (!table || !col) {
        return false;
    }

    let query = knex(table).count({ CNT: 'id' }).where(col, value);

    if (id) {
        query.andWhere('id', '!=', id);
    }

    try {
        const result = query.first();
        return result.CNT > 0;
    } catch (error) {
        console.error('Database query failed:', error);
        return false;
    }
}