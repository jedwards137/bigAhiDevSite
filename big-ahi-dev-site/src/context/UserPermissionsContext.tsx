import { createContext } from 'react';
import { UserPermissions } from '../model/UserPermissions.model';

export const UserPermissionsContext = createContext({
  permissions: new UserPermissions(),
});