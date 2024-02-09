interface Contact {
  id: number;
  name: string;
  clone(name: string): Contact
}

function clone(source: Contact): Contact {
  return Object.apply({}, source);
}
