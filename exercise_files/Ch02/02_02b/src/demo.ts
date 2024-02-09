interface Contact extends Address {
  id: number;
  name: string;
  birthDate: Date;
  bird?: string;
  address: Address;
}

interface Address {
  line1: string;
  line2?: string;
  city: string;
}

let primaryContact: Contact = {
  id: 1234,
  birthDate: new Date('11-04-1990'),
  name: 3 as any,
  line1: '',
  city: '',
  address: {
    line1: '',
    city: '',
  },
};
