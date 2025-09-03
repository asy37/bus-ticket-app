import { AuthButtons } from './_components/AuthButtons';
import { AuthDropdown } from './_components/AuthDropdown';

const token = false;
export const AuthMenu = () => {
  return token ? <AuthDropdown /> : <AuthButtons />;
};
