type ContactName = string;
type ContactStatus = 'active' | 'inactive' | 'new';
type ContactBirthDate = Date | number | string;

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
}

let primaryContact: Contact = {
  id: 12345,
  name: 'Jamie Johnson',
  status: 'active',
};

type ContactField = keyof Contact;

const id: ContactField = 'id';

const getValue = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

getValue({ id: 3 }, 'id');
