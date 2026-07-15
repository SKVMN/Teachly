import { logFrom, UserRoles } from '@teachly/shared';

const userRole: UserRoles = 'student';

console.log('message from backend');
logFrom(userRole);
