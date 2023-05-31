let role = 'guest';

switch (role) {
    case 'guest':
        console.log('guest user');
        break
    case 'moderator':
        console.log('moderator user');
        break

    default:
        console.log('Unknown user');
}


if (role === 'guest') console.log('guest user');
else if (role === 'moderator') console.log('moderator user');
else console.log('Unknown user');